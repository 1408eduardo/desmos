package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/desmos-labs/desmos/v6/x/profiles/types"
)

// RequestDTagTransfer defines a rpc method for MsgRequestDTagTransfer
func (k MsgServer) RequestDTagTransfer(goCtx context.Context, msg *types.MsgRequestDTagTransfer) (*types.MsgRequestDTagTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the request's receiver has blocked the sender before
	if k.IsUserBlocked(ctx, msg.Receiver, msg.Sender) {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidRequest, "the user with address %s has blocked you", msg.Receiver)
	}

	profile, found, err := k.GetProfile(ctx, msg.Receiver)
	if err != nil {
		return nil, err
	}

	if !found {
		return nil, errors.Wrap(sdkerrors.ErrInvalidRequest, "the request recipient does not have a profile")
	}

	dTagToTrade := profile.DTag
	if len(dTagToTrade) == 0 {
		return nil, errors.Wrapf(
			sdkerrors.ErrInvalidRequest,
			"the user with address %s doesn't have a profile yet so their DTag cannot be transferred",
			msg.Receiver,
		)
	}

	transferRequest := types.NewDTagTransferRequest(dTagToTrade, msg.Sender, msg.Receiver)
	err = k.SaveDTagTransferRequest(ctx, transferRequest)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeRequestedDTagTransfer,
			sdk.NewAttribute(types.AttributeKeyDTagToTrade, dTagToTrade),
			sdk.NewAttribute(types.AttributeKeyRequestSender, transferRequest.Sender),
			sdk.NewAttribute(types.AttributeKeyRequestReceiver, transferRequest.Receiver),
		),
	})

	return &types.MsgRequestDTagTransferResponse{}, nil
}

// CancelDTagTransferRequest defines a rpc method for MsgCancelDTagTransferRequest
func (k MsgServer) CancelDTagTransferRequest(goCtx context.Context, msg *types.MsgCancelDTagTransferRequest) (*types.MsgCancelDTagTransferRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the request exists
	if !k.HasDTagTransferRequest(ctx, msg.Sender, msg.Receiver) {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidRequest, "request from %s to %s not found", msg.Sender, msg.Receiver)
	}

	// Delete the request
	k.DeleteDTagTransferRequest(ctx, msg.Sender, msg.Receiver)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCanceledDTagTransferRequest,
			sdk.NewAttribute(types.AttributeKeyRequestSender, msg.Sender),
			sdk.NewAttribute(types.AttributeKeyRequestReceiver, msg.Receiver),
		),
	})

	return &types.MsgCancelDTagTransferRequestResponse{}, nil
}

// AcceptDTagTransferRequest defines a rpc method for MsgAcceptDTagTransferRequest
func (k MsgServer) AcceptDTagTransferRequest(goCtx context.Context, msg *types.MsgAcceptDTagTransferRequest) (*types.MsgAcceptDTagTransferRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	request, found, err := k.GetDTagTransferRequest(ctx, msg.Sender, msg.Receiver)
	if err != nil {
		return nil, err
	}

	if !found {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidRequest, "no request made from %s", msg.Sender)
	}

	// Get the current owner profile
	requestReceiverProfile, exist, err := k.GetProfile(ctx, msg.Receiver)
	if err != nil {
		return nil, err
	}

	if !exist {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidRequest, "profile of %s doesn't exist", msg.Receiver)
	}

	// Get the DTag to trade and make sure its correct
	dTagWanted := request.DTagToTrade
	dTagToTrade := requestReceiverProfile.DTag
	if dTagWanted != dTagToTrade {
		return nil, errors.Wrap(sdkerrors.ErrInvalidRequest, "the owner's DTag is different from the one to be exchanged")
	}

	// Change the DTag and validate the profile
	requestReceiverProfile.DTag = msg.NewDTag
	err = k.ValidateProfile(ctx, requestReceiverProfile)
	if err != nil {
		return nil, errors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	// Check for an existent profile of the receiving user
	requestSenderProfile, exist, err := k.GetProfile(ctx, msg.Sender)
	if err != nil {
		return nil, err
	}

	if exist && msg.NewDTag == requestSenderProfile.DTag {
		err = k.storeProfileWithoutDTagCheck(ctx, requestReceiverProfile)
		if err != nil {
			return nil, err
		}
	} else {
		err = k.Keeper.SaveProfile(ctx, requestReceiverProfile)
		if err != nil {
			return nil, err
		}
	}

	if !exist {
		add, err := sdk.AccAddressFromBech32(msg.Sender)
		if err != nil {
			return nil, err
		}

		senderAcc := k.ak.GetAccount(ctx, add)
		if senderAcc == nil {
			senderAcc = k.ak.NewAccountWithAddress(ctx, add)
		}

		requestSenderProfile, err = types.NewProfileFromAccount(dTagToTrade, senderAcc, ctx.BlockTime())
		if err != nil {
			return nil, err
		}
	} else {
		requestSenderProfile.DTag = dTagToTrade
	}

	// Validate the request sender profile
	err = k.ValidateProfile(ctx, requestSenderProfile)
	if err != nil {
		return nil, errors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	// Save the request sender profile
	err = k.Keeper.SaveProfile(ctx, requestSenderProfile)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeAcceptedDTagTransferRequest,
			sdk.NewAttribute(types.AttributeKeyDTagToTrade, dTagToTrade),
			sdk.NewAttribute(types.AttributeKeyNewDTag, msg.NewDTag),
			sdk.NewAttribute(types.AttributeKeyRequestSender, msg.Sender),
			sdk.NewAttribute(types.AttributeKeyRequestReceiver, msg.Receiver),
		),
	})

	return &types.MsgAcceptDTagTransferRequestResponse{}, nil
}

// RefuseDTagTransferRequest defines a rpc method for MsgRefuseDTagTransferRequest
func (k MsgServer) RefuseDTagTransferRequest(goCtx context.Context, msg *types.MsgRefuseDTagTransferRequest) (*types.MsgRefuseDTagTransferRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the request exists
	if !k.HasDTagTransferRequest(ctx, msg.Sender, msg.Receiver) {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidRequest, "request from %s to %s not found", msg.Sender, msg.Receiver)
	}

	// Delete the request
	k.DeleteDTagTransferRequest(ctx, msg.Sender, msg.Receiver)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeRefusedDTagTransferRequest,
			sdk.NewAttribute(types.AttributeKeyRequestSender, msg.Sender),
			sdk.NewAttribute(types.AttributeKeyRequestReceiver, msg.Receiver),
		),
	})

	return &types.MsgRefuseDTagTransferRequestResponse{}, nil
}
