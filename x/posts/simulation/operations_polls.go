package simulation

// DONTCOVER

import (
	"math/rand"
	"time"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"

	"github.com/desmos-labs/desmos/v6/testutil/simtesting"

	subspacessim "github.com/desmos-labs/desmos/v6/x/subspaces/simulation"
	subspacestypes "github.com/desmos-labs/desmos/v6/x/subspaces/types"

	"github.com/desmos-labs/desmos/v6/x/posts/keeper"
	"github.com/desmos-labs/desmos/v6/x/posts/types"
)

// SimulateMsgAnswerPoll tests and runs a single msg answer poll post
func SimulateMsgAnswerPoll(
	k *keeper.Keeper, sk types.SubspacesKeeper, ak authkeeper.AccountKeeper, bk bankkeeper.Keeper,
) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context,
		accs []simtypes.Account, chainID string,
	) (OperationMsg simtypes.OperationMsg, futureOps []simtypes.FutureOperation, err error) {

		answer, user, skip := randomAnswerPollFields(r, ctx, accs, k, sk)
		if skip {
			return simtypes.NoOpMsg(types.RouterKey, "answer poll", "skip"), nil, nil
		}

		msg := types.NewMsgAnswerPoll(answer.SubspaceID, answer.PostID, answer.PollID, answer.AnswersIndexes, user.Address.String())

		return simtesting.SendMsg(r, app, ak, bk, msg, ctx, user)
	}
}

// randomAnswerPollFields returns the data needed to answer a user poll
func randomAnswerPollFields(
	r *rand.Rand, ctx sdk.Context, accs []simtypes.Account, k *keeper.Keeper, sk types.SubspacesKeeper,
) (answer types.UserAnswer, user simtypes.Account, skip bool) {
	if len(accs) == 0 {
		// Skip because there are no accounts
		skip = true
		return
	}

	// Get a poll
	var polls []types.Attachment
	k.IterateActivePollsQueue(ctx, time.Now(), func(poll types.Attachment) (stop bool) {
		polls = append(polls, poll)
		return false
	})
	if len(polls) == 0 {
		// Skip because there are no active polls
		skip = true
		return
	}

	// Get a random poll
	poll := RandomAttachment(r, polls)
	if content, ok := poll.Content.GetCachedValue().(*types.Poll); ok && content.EndDate.Before(time.Now().Add(time.Minute*1)) {
		// Skip because the poll voting period has already ended
		skip = true
		return
	}

	// Get a user
	users := sk.GetUsersWithRootPermissions(ctx, poll.SubspaceID, subspacestypes.NewPermissions(types.PermissionInteractWithContent))
	acc := subspacessim.GetAccount(subspacessim.RandomAddress(r, users), accs)
	if acc == nil {
		// Skip the operation withofut error as the account is not valid
		skip = true
		return
	}
	user = *acc

	if !k.HasProfile(ctx, user.Address.String()) {
		// Skip because the user does not have a profile
		skip = true
		return
	}

	// Get some answers
	answersIndexes := RandomAnswersIndexes(r, poll.Content.GetCachedValue().(*types.Poll))
	userAnswer := types.NewUserAnswer(poll.SubspaceID, poll.PostID, poll.ID, answersIndexes, user.Address.String())
	return userAnswer, user, false
}
