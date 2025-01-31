package simulation

// DONTCOVER

import (
	"math/rand"

	"github.com/desmos-labs/desmos/v6/testutil/simtesting"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"

	"github.com/desmos-labs/desmos/v6/x/subspaces/keeper"
	"github.com/desmos-labs/desmos/v6/x/subspaces/types"
)

// SimulateMsgCreateSection tests and runs a single MsgCreateSection
func SimulateMsgCreateSection(
	k *keeper.Keeper, ak authkeeper.AccountKeeper, bk bankkeeper.Keeper,
) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context,
		accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {

		// Get the data
		subspaceID, update, parentID, creator, skip := randomCreateSectionFields(r, ctx, accs, k)
		if skip {
			return simtypes.NoOpMsg(types.RouterKey, "MsgCreateSection", "skip"), nil, nil
		}

		// Build the message
		msg := types.NewMsgCreateSection(
			subspaceID,
			update.Name,
			update.Description,
			parentID,
			creator.Address.String(),
		)

		// Send the message
		return simtesting.SendMsg(r, app, ak, bk, msg, ctx, creator)
	}
}

// randomCreateSectionFields returns the data used to build a random MsgCreateSection
func randomCreateSectionFields(
	r *rand.Rand, ctx sdk.Context, accs []simtypes.Account, k *keeper.Keeper,
) (subspaceID uint64, update types.SectionUpdate, parentID uint32, account simtypes.Account, skip bool) {
	// Get a subspace id
	subspaces := k.GetAllSubspaces(ctx)
	if len(subspaces) == 0 {
		// Skip because there are no subspaces
		skip = true
		return
	}
	subspace := RandomSubspace(r, subspaces)
	subspaceID = subspace.ID

	// Get a parent section
	sections := k.GetSubspaceSections(ctx, subspaceID)
	parentSection := RandomSection(r, sections)
	parentID = parentSection.ID

	// Get a random update
	update = types.NewSectionUpdate(
		RandomSectionName(r),
		RandomSectionDescription(r),
	)

	// Get a signer
	signers := k.GetUsersWithRootPermissions(ctx, subspace.ID, types.NewPermissions(types.PermissionManageSections))
	acc := GetAccount(RandomAddress(r, signers), accs)
	if acc == nil {
		// Skip the operation without error as the account is not valid
		skip = true
		return
	}
	account = *acc

	return subspaceID, update, parentID, account, false
}

// --------------------------------------------------------------------------------------------------------------------

// SimulateMsgEditSection tests and runs a single MsgEditSection
func SimulateMsgEditSection(
	k *keeper.Keeper, ak authkeeper.AccountKeeper, bk bankkeeper.Keeper,
) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context,
		accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {

		// Get the data
		subspaceID, sectionID, update, creator, skip := randomEditSectionFields(r, ctx, accs, k)
		if skip {
			return simtypes.NoOpMsg(types.RouterKey, "MsgEditSection", "skip"), nil, nil
		}

		// Build the message
		msg := types.NewMsgEditSection(
			subspaceID,
			sectionID,
			update.Name,
			update.Description,
			creator.Address.String(),
		)

		// Send the message
		return simtesting.SendMsg(r, app, ak, bk, msg, ctx, creator)
	}
}

// randomEditSectionFields returns the data used to build a random MsgEditSection
func randomEditSectionFields(
	r *rand.Rand, ctx sdk.Context, accs []simtypes.Account, k *keeper.Keeper,
) (subspaceID uint64, sectionID uint32, update types.SectionUpdate, account simtypes.Account, skip bool) {
	// Get a subspace id
	subspaces := k.GetAllSubspaces(ctx)
	if len(subspaces) == 0 {
		// Skip because there are no subspaces
		skip = true
		return
	}
	subspace := RandomSubspace(r, subspaces)
	subspaceID = subspace.ID

	// Get a random section
	sections := k.GetSubspaceSections(ctx, subspaceID)
	section := RandomSection(r, sections)
	sectionID = section.ID

	// Get a random update
	update = types.NewSectionUpdate(
		RandomSectionName(r),
		RandomSectionDescription(r),
	)

	// Get a signer
	signers := k.GetUsersWithRootPermissions(ctx, subspace.ID, types.NewPermissions(types.PermissionManageSections))
	acc := GetAccount(RandomAddress(r, signers), accs)
	if acc == nil {
		// Skip the operation without error as the account is not valid
		skip = true
		return
	}
	account = *acc

	return subspaceID, sectionID, update, account, false
}

// --------------------------------------------------------------------------------------------------------------------

// SimulateMsgMoveSection tests and runs a single MsgMoveSection
func SimulateMsgMoveSection(
	k *keeper.Keeper, ak authkeeper.AccountKeeper, bk bankkeeper.Keeper,
) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context,
		accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {

		// Get the data
		subspaceID, sectionID, newParentID, creator, skip := randomMoveSectionFields(r, ctx, accs, k)
		if skip {
			return simtypes.NoOpMsg(types.RouterKey, "MsgMoveSection", "skip"), nil, nil
		}

		// Build the message
		msg := types.NewMsgMoveSection(
			subspaceID,
			sectionID,
			newParentID,
			creator.Address.String(),
		)

		// Send the message
		return simtesting.SendMsg(r, app, ak, bk, msg, ctx, creator)
	}
}

// randomMoveSectionFields returns the data used to build a random MsgMoveSection
func randomMoveSectionFields(
	r *rand.Rand, ctx sdk.Context, accs []simtypes.Account, k *keeper.Keeper,
) (subspaceID uint64, sectionID uint32, newParentID uint32, account simtypes.Account, skip bool) {
	// Get a subspace id
	subspaces := k.GetAllSubspaces(ctx)
	if len(subspaces) == 0 {
		// Skip because there are no subspaces
		skip = true
		return
	}
	subspace := RandomSubspace(r, subspaces)
	subspaceID = subspace.ID

	// Get a random section
	sections := k.GetSubspaceSections(ctx, subspaceID)
	section := RandomSection(r, sections)
	sectionID = section.ID
	if sectionID == types.RootSectionID {
		// Skip because we can't move the default section
		skip = true
		return
	}

	// Get a random new parent
	parent := RandomSection(r, sections)
	newParentID = parent.ID
	if parent.ID == sectionID {
		// Skip because we can't move the section to itself
		skip = true
		return
	}

	if isChildSection(ctx, k, section, parent) {
		// Skip because we can't move the section to its child section
		skip = true
		return
	}

	// Get a signer
	signers := k.GetUsersWithRootPermissions(ctx, subspace.ID, types.NewPermissions(types.PermissionManageSections))
	acc := GetAccount(RandomAddress(r, signers), accs)
	if acc == nil {
		// Skip the operation without error as the account is not valid
		skip = true
		return
	}
	account = *acc

	return subspaceID, sectionID, newParentID, account, false
}

// isChildSection tells whether the given section is the child of the given parent section or not.
func isChildSection(ctx sdk.Context, k *keeper.Keeper, parent types.Section, section types.Section) bool {
	visitsCount := 0
	k.IterateSectionChildren(ctx, parent.SubspaceID, parent.ID, func(node types.Section) (stop bool) {
		if node.SubspaceID == section.SubspaceID && node.ID == section.ID {
			visitsCount++
		}
		return visitsCount > 1
	})

	return visitsCount == 1
}

// --------------------------------------------------------------------------------------------------------------------

// SimulateMsgDeleteSection tests and runs a single MsgDeleteSection
func SimulateMsgDeleteSection(
	k *keeper.Keeper, ak authkeeper.AccountKeeper, bk bankkeeper.Keeper,
) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context,
		accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {

		// Get the data
		subspaceID, sectionID, creator, skip := randomDeleteFields(r, ctx, accs, k)
		if skip {
			return simtypes.NoOpMsg(types.RouterKey, "MsgDeleteSection", "skip"), nil, nil
		}

		// Build the message
		msg := types.NewMsgDeleteSection(
			subspaceID,
			sectionID,
			creator.Address.String(),
		)

		// Send the message
		return simtesting.SendMsg(r, app, ak, bk, msg, ctx, creator)
	}
}

// randomDeleteFields returns the data used to build a random MsgDeleteSection
func randomDeleteFields(
	r *rand.Rand, ctx sdk.Context, accs []simtypes.Account, k *keeper.Keeper,
) (subspaceID uint64, sectionID uint32, account simtypes.Account, skip bool) {
	// Get a subspace id
	subspaces := k.GetAllSubspaces(ctx)
	if len(subspaces) == 0 {
		// Skip because there are no subspaces
		skip = true
		return
	}
	subspace := RandomSubspace(r, subspaces)
	subspaceID = subspace.ID

	// Get a random section
	sections := k.GetSubspaceSections(ctx, subspaceID)
	section := RandomSection(r, sections)
	sectionID = section.ID
	if sectionID == types.RootSectionID {
		// Skip because we can't delete the default section
		skip = true
		return
	}

	// Get a signer
	signers := k.GetUsersWithRootPermissions(ctx, subspace.ID, types.NewPermissions(types.PermissionManageSections))
	acc := GetAccount(RandomAddress(r, signers), accs)
	if acc == nil {
		// Skip the operation without error as the account is not valid
		skip = true
		return
	}
	account = *acc

	return subspaceID, sectionID, account, false
}
