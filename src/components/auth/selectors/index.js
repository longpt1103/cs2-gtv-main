import { createSelector } from '@reduxjs/toolkit'

import { initialState } from '../slices'

const selectSlice = (state) => state.auth || initialState

export const selectIsSignIn = createSelector(
  [selectSlice],
  (state) => state.isSignIn,
)

export const selectUserInfo = createSelector(
  [selectSlice],
  (state) => state.userInfo,
)

export const selectSteamInfo = createSelector(
  [selectSlice],
  (state) => state.steamInfo,
)

export const selectSteamInfoName = createSelector(
  [selectSlice],
  (state) => state.steamInfo?.['display_name'] || '',
)

export const selectSteamId = createSelector(
  [selectSlice],
  (state) => state.steamId,
)

export const selectIsPendingLinkSteamAccount = createSelector(
  [selectSlice],
  (state) => state.isPendingLinkSteamAccount,
)

export const selectIsPendingSteamConfig = createSelector(
  [selectSlice],
  (state) => state.isPendingSteamConfig,
)

export const selectIsPendingVerifier = createSelector(
  [selectSlice],
  (state) => state.isPendingVerifier,
)
