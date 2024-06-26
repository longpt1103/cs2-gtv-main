import { createSlice } from '@reduxjs/toolkit'
import {
  fetchUserInfo,
  fetchLinkSteamAccount,
  fetchSteamConfig,
  postVerifierSteam,
} from './asyncThunk'
import { saveAllStorage, clearLogout, checkUserSignIn } from 'utils/auth'
import { getLinkSteamRedirect } from 'utils/steam'
import modal from 'components/modal/provider'

const { isSignIn, userInfo } = checkUserSignIn(true)
const initialState = {
  isSignIn,
  userInfo,
  isPendingLinkSteamAccount: false,
  isPendingSteamConfig: false,
  isPendingVerifier: false,
  steamId: null,
  steamInfo: null,
}

const resetState = () => ({
  ...initialState,
  isSignIn: false,
  userInfo: null,
})

const getSteamInfo = (data = {}) => {
  return {
    steamId: data?.['steam_id'] || '',
    steamInfo: {
      display_name: data?.['display_name'] || '',
      avatar_url: data?.['avatar_url'] || '',
    },
  }
}

const logMessage = (data) => {
  setTimeout(() => {
    modal.common.open(data)
  }, 500)
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      clearLogout()
      return resetState()
    },
  },
  extraReducers: (builder) => {
    // user info
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      const { response, token } = action.payload
      const userInfo = response?.Data || response?.data || null
      if (userInfo) {
        state.isSignIn = true
        state.userInfo = userInfo
        saveAllStorage({
          token,
          userInfo,
        })
      }
    })
    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      clearLogout()
      return resetState()
    })
    // link steam account
    builder.addCase(fetchLinkSteamAccount.pending, (state) => {
      state.isPendingLinkSteamAccount = true
    })
    builder.addCase(fetchLinkSteamAccount.fulfilled, (state, { payload }) => {
      const { response } = payload
      const data = response.Data || response.data || {}
      const { steamId, steamInfo } = getSteamInfo(data)
      state.isPendingLinkSteamAccount = false
      state.steamId = steamId
      state.steamInfo = steamInfo
    })
    builder.addCase(fetchLinkSteamAccount.rejected, (state) => {
      state.isPendingLinkSteamAccount = false
      state.steamId = null
      state.steamInfo = null
    })
    // steam config
    builder.addCase(fetchSteamConfig.pending, (state) => {
      state.isPendingSteamConfig = true
    })
    builder.addCase(fetchSteamConfig.fulfilled, (state, { payload }) => {
      const { response } = payload
      const data = response.Data || response.data || {}
      const linkSteamRedirect = getLinkSteamRedirect(data)
      if (linkSteamRedirect) window.location.href = linkSteamRedirect
      state.isPendingSteamConfig = false
    })
    builder.addCase(fetchSteamConfig.rejected, (state) => {
      state.isPendingSteamConfig = false
    })
    // verifier
    builder.addCase(postVerifierSteam.pending, (state) => {
      state.isPendingVerifier = true
    })
    builder.addCase(postVerifierSteam.fulfilled, (state, { payload }) => {
      const { response } = payload
      const data = response.Data || response.data || {}
      const { steamId, steamInfo } = getSteamInfo(data)
      state.steamId = steamId
      state.steamInfo = steamInfo
      state.isPendingVerifier = false
    })
    builder.addCase(postVerifierSteam.rejected, (state, action) => {
      state.isPendingVerifier = false
      logMessage({
        title:
          action?.payload?.data?.Message ||
          'Tài khoản steam đã được liên kết với tài khoản khác.',
      })
    })
  },
})

export const { actions: authActions, reducer: authReducer } = slice
export { initialState }
