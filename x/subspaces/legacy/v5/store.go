package v5

import (
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	"github.com/cosmos/cosmos-sdk/telemetry"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/desmos-labs/desmos/v6/x/subspaces/types"
)

// MigrateStore migrates the store from version 4 to version 5.
func MigrateStore(ctx sdk.Context, storeKey storetypes.StoreKey, cdc codec.BinaryCodec, accountKeeper types.AccountKeeper) error {
	err := migrateSubspaces(ctx, storeKey, cdc, accountKeeper)
	if err != nil {
		return err
	}
	return createNonExistingAccounts(ctx, storeKey, accountKeeper)
}

// migrateSubspaces migrates subspace to have new treasury address generated from subspace id
func migrateSubspaces(ctx sdk.Context, storeKey storetypes.StoreKey, cdc codec.BinaryCodec, accountKeeper types.AccountKeeper) error {
	store := ctx.KVStore(storeKey)
	subspacesStore := prefix.NewStore(store, types.SubspacePrefix)
	iterator := subspacesStore.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var oldSubspace types.Subspace
		if err := cdc.Unmarshal(iterator.Value(), &oldSubspace); err != nil {
			return err
		}
		newTreasury := types.GetTreasuryAddress(oldSubspace.ID)
		if !accountKeeper.HasAccount(ctx, newTreasury) {
			accountKeeper.SetAccount(ctx, accountKeeper.NewAccountWithAddress(ctx, newTreasury))
		}
		newSubspace := types.NewSubspace(
			oldSubspace.ID,
			oldSubspace.Name,
			oldSubspace.Description,
			newTreasury.String(),
			oldSubspace.Owner,
			oldSubspace.Creator,
			oldSubspace.CreationTime,
			oldSubspace.AdditionalFeeTokens,
		)
		store.Set(types.SubspaceStoreKey(oldSubspace.ID), cdc.MustMarshal(&newSubspace))
	}
	return nil
}

// createNonExistingAccounts creates an account for users who are in a user group
func createNonExistingAccounts(ctx sdk.Context, key storetypes.StoreKey, accountKeeper AccountKeeper) error {
	groupsStore := prefix.NewStore(ctx.KVStore(key), types.GroupsMembersPrefix)
	iterator := groupsStore.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		_, _, user := types.SplitGroupMemberStoreKey(append(types.GroupsMembersPrefix, iterator.Key()...))
		userAcc, err := sdk.AccAddressFromBech32(user)
		if err != nil {
			return err
		}

		accExists := accountKeeper.HasAccount(ctx, userAcc)
		if !accExists {
			accountKeeper.SetAccount(ctx, accountKeeper.NewAccountWithAddress(ctx, userAcc))
			telemetry.IncrCounter(1, "new", "account")
		}
	}
	return nil
}
