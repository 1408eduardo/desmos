// Code generated by MockGen. DO NOT EDIT.
// Source: ./x/reactions/types/expected_keepers.go

// Package testutil is a generated GoMock package.
package testutil

import (
	reflect "reflect"

	types "github.com/cosmos/cosmos-sdk/types"
	types0 "github.com/desmos-labs/desmos/v5/x/posts/types"
	types1 "github.com/desmos-labs/desmos/v5/x/subspaces/types"
	gomock "github.com/golang/mock/gomock"
)

// MockProfilesKeeper is a mock of ProfilesKeeper interface.
type MockProfilesKeeper struct {
	ctrl     *gomock.Controller
	recorder *MockProfilesKeeperMockRecorder
}

// MockProfilesKeeperMockRecorder is the mock recorder for MockProfilesKeeper.
type MockProfilesKeeperMockRecorder struct {
	mock *MockProfilesKeeper
}

// NewMockProfilesKeeper creates a new mock instance.
func NewMockProfilesKeeper(ctrl *gomock.Controller) *MockProfilesKeeper {
	mock := &MockProfilesKeeper{ctrl: ctrl}
	mock.recorder = &MockProfilesKeeperMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockProfilesKeeper) EXPECT() *MockProfilesKeeperMockRecorder {
	return m.recorder
}

// HasProfile mocks base method.
func (m *MockProfilesKeeper) HasProfile(ctx types.Context, user string) bool {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "HasProfile", ctx, user)
	ret0, _ := ret[0].(bool)
	return ret0
}

// HasProfile indicates an expected call of HasProfile.
func (mr *MockProfilesKeeperMockRecorder) HasProfile(ctx, user interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "HasProfile", reflect.TypeOf((*MockProfilesKeeper)(nil).HasProfile), ctx, user)
}

// MockSubspacesKeeper is a mock of SubspacesKeeper interface.
type MockSubspacesKeeper struct {
	ctrl     *gomock.Controller
	recorder *MockSubspacesKeeperMockRecorder
}

// MockSubspacesKeeperMockRecorder is the mock recorder for MockSubspacesKeeper.
type MockSubspacesKeeperMockRecorder struct {
	mock *MockSubspacesKeeper
}

// NewMockSubspacesKeeper creates a new mock instance.
func NewMockSubspacesKeeper(ctrl *gomock.Controller) *MockSubspacesKeeper {
	mock := &MockSubspacesKeeper{ctrl: ctrl}
	mock.recorder = &MockSubspacesKeeperMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSubspacesKeeper) EXPECT() *MockSubspacesKeeperMockRecorder {
	return m.recorder
}

// GetAllSubspaces mocks base method.
func (m *MockSubspacesKeeper) GetAllSubspaces(ctx types.Context) []types1.Subspace {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetAllSubspaces", ctx)
	ret0, _ := ret[0].([]types1.Subspace)
	return ret0
}

// GetAllSubspaces indicates an expected call of GetAllSubspaces.
func (mr *MockSubspacesKeeperMockRecorder) GetAllSubspaces(ctx interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetAllSubspaces", reflect.TypeOf((*MockSubspacesKeeper)(nil).GetAllSubspaces), ctx)
}

// GetUsersWithRootPermissions mocks base method.
func (m *MockSubspacesKeeper) GetUsersWithRootPermissions(ctx types.Context, subspaceID uint64, permission types1.Permissions) []string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetUsersWithRootPermissions", ctx, subspaceID, permission)
	ret0, _ := ret[0].([]string)
	return ret0
}

// GetUsersWithRootPermissions indicates an expected call of GetUsersWithRootPermissions.
func (mr *MockSubspacesKeeperMockRecorder) GetUsersWithRootPermissions(ctx, subspaceID, permission interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetUsersWithRootPermissions", reflect.TypeOf((*MockSubspacesKeeper)(nil).GetUsersWithRootPermissions), ctx, subspaceID, permission)
}

// HasPermission mocks base method.
func (m *MockSubspacesKeeper) HasPermission(ctx types.Context, subspaceID uint64, sectionID uint32, user string, permission types1.Permission) bool {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "HasPermission", ctx, subspaceID, sectionID, user, permission)
	ret0, _ := ret[0].(bool)
	return ret0
}

// HasPermission indicates an expected call of HasPermission.
func (mr *MockSubspacesKeeperMockRecorder) HasPermission(ctx, subspaceID, sectionID, user, permission interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "HasPermission", reflect.TypeOf((*MockSubspacesKeeper)(nil).HasPermission), ctx, subspaceID, sectionID, user, permission)
}

// HasSubspace mocks base method.
func (m *MockSubspacesKeeper) HasSubspace(ctx types.Context, subspaceID uint64) bool {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "HasSubspace", ctx, subspaceID)
	ret0, _ := ret[0].(bool)
	return ret0
}

// HasSubspace indicates an expected call of HasSubspace.
func (mr *MockSubspacesKeeperMockRecorder) HasSubspace(ctx, subspaceID interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "HasSubspace", reflect.TypeOf((*MockSubspacesKeeper)(nil).HasSubspace), ctx, subspaceID)
}

// IterateSubspaces mocks base method.
func (m *MockSubspacesKeeper) IterateSubspaces(ctx types.Context, fn func(types1.Subspace) bool) {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "IterateSubspaces", ctx, fn)
}

// IterateSubspaces indicates an expected call of IterateSubspaces.
func (mr *MockSubspacesKeeperMockRecorder) IterateSubspaces(ctx, fn interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "IterateSubspaces", reflect.TypeOf((*MockSubspacesKeeper)(nil).IterateSubspaces), ctx, fn)
}

// MockRelationshipsKeeper is a mock of RelationshipsKeeper interface.
type MockRelationshipsKeeper struct {
	ctrl     *gomock.Controller
	recorder *MockRelationshipsKeeperMockRecorder
}

// MockRelationshipsKeeperMockRecorder is the mock recorder for MockRelationshipsKeeper.
type MockRelationshipsKeeperMockRecorder struct {
	mock *MockRelationshipsKeeper
}

// NewMockRelationshipsKeeper creates a new mock instance.
func NewMockRelationshipsKeeper(ctrl *gomock.Controller) *MockRelationshipsKeeper {
	mock := &MockRelationshipsKeeper{ctrl: ctrl}
	mock.recorder = &MockRelationshipsKeeperMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockRelationshipsKeeper) EXPECT() *MockRelationshipsKeeperMockRecorder {
	return m.recorder
}

// HasRelationship mocks base method.
func (m *MockRelationshipsKeeper) HasRelationship(ctx types.Context, user, counterparty string, subspaceID uint64) bool {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "HasRelationship", ctx, user, counterparty, subspaceID)
	ret0, _ := ret[0].(bool)
	return ret0
}

// HasRelationship indicates an expected call of HasRelationship.
func (mr *MockRelationshipsKeeperMockRecorder) HasRelationship(ctx, user, counterparty, subspaceID interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "HasRelationship", reflect.TypeOf((*MockRelationshipsKeeper)(nil).HasRelationship), ctx, user, counterparty, subspaceID)
}

// HasUserBlocked mocks base method.
func (m *MockRelationshipsKeeper) HasUserBlocked(ctx types.Context, blocker, user string, subspaceID uint64) bool {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "HasUserBlocked", ctx, blocker, user, subspaceID)
	ret0, _ := ret[0].(bool)
	return ret0
}

// HasUserBlocked indicates an expected call of HasUserBlocked.
func (mr *MockRelationshipsKeeperMockRecorder) HasUserBlocked(ctx, blocker, user, subspaceID interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "HasUserBlocked", reflect.TypeOf((*MockRelationshipsKeeper)(nil).HasUserBlocked), ctx, blocker, user, subspaceID)
}

// MockPostsKeeper is a mock of PostsKeeper interface.
type MockPostsKeeper struct {
	ctrl     *gomock.Controller
	recorder *MockPostsKeeperMockRecorder
}

// MockPostsKeeperMockRecorder is the mock recorder for MockPostsKeeper.
type MockPostsKeeperMockRecorder struct {
	mock *MockPostsKeeper
}

// NewMockPostsKeeper creates a new mock instance.
func NewMockPostsKeeper(ctrl *gomock.Controller) *MockPostsKeeper {
	mock := &MockPostsKeeper{ctrl: ctrl}
	mock.recorder = &MockPostsKeeperMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPostsKeeper) EXPECT() *MockPostsKeeperMockRecorder {
	return m.recorder
}

// GetPost mocks base method.
func (m *MockPostsKeeper) GetPost(ctx types.Context, subspaceID, postID uint64) (types0.Post, bool) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPost", ctx, subspaceID, postID)
	ret0, _ := ret[0].(types0.Post)
	ret1, _ := ret[1].(bool)
	return ret0, ret1
}

// GetPost indicates an expected call of GetPost.
func (mr *MockPostsKeeperMockRecorder) GetPost(ctx, subspaceID, postID interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPost", reflect.TypeOf((*MockPostsKeeper)(nil).GetPost), ctx, subspaceID, postID)
}

// GetSubspacePosts mocks base method.
func (m *MockPostsKeeper) GetSubspacePosts(ctx types.Context, subspaceID uint64) []types0.Post {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetSubspacePosts", ctx, subspaceID)
	ret0, _ := ret[0].([]types0.Post)
	return ret0
}

// GetSubspacePosts indicates an expected call of GetSubspacePosts.
func (mr *MockPostsKeeperMockRecorder) GetSubspacePosts(ctx, subspaceID interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSubspacePosts", reflect.TypeOf((*MockPostsKeeper)(nil).GetSubspacePosts), ctx, subspaceID)
}

// HasPost mocks base method.
func (m *MockPostsKeeper) HasPost(ctx types.Context, subspaceID, postID uint64) bool {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "HasPost", ctx, subspaceID, postID)
	ret0, _ := ret[0].(bool)
	return ret0
}

// HasPost indicates an expected call of HasPost.
func (mr *MockPostsKeeperMockRecorder) HasPost(ctx, subspaceID, postID interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "HasPost", reflect.TypeOf((*MockPostsKeeper)(nil).HasPost), ctx, subspaceID, postID)
}

// IteratePosts mocks base method.
func (m *MockPostsKeeper) IteratePosts(ctx types.Context, fn func(types0.Post) bool) {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "IteratePosts", ctx, fn)
}

// IteratePosts indicates an expected call of IteratePosts.
func (mr *MockPostsKeeperMockRecorder) IteratePosts(ctx, fn interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "IteratePosts", reflect.TypeOf((*MockPostsKeeper)(nil).IteratePosts), ctx, fn)
}
