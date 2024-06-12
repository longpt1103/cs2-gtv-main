import { createAsyncThunk } from '@reduxjs/toolkit'
import { getConfigWithToken } from 'utils/auth'
import {
  getUserInfo,
  getLinkSteamAccount,
  getSteamConfig,
  verifierSteam,
} from 'services/auth'

// extraReducers
const fetchUserInfo = createAsyncThunk('auth/fetchUserInfo', async (token) => {
  // dont save token before call success (mabybe token spam)
  const config = getConfigWithToken(token)
  const response = await getUserInfo(config)
  return {
    response,
    token,
  }
})

const fetchLinkSteamAccount = createAsyncThunk(
  'auth/fetchLinkSteamAccount',
  async () => {
    const response = await getLinkSteamAccount()
    return {
      response,
    }
  },
)

const fetchSteamConfig = createAsyncThunk('auth/fetchSteamConfig', async () => {
  const response = await getSteamConfig()
  return { response }
})

const postVerifierSteam = createAsyncThunk(
  'auth/verifierSteam',
  async (data, { rejectWithValue }) => {
    try {
      const response = await verifierSteam(data)
      return { response }
    } catch (error) {
      if (!error.data) throw error
      return rejectWithValue(error)
    }
  },
)

export {
  fetchUserInfo,
  fetchLinkSteamAccount,
  fetchSteamConfig,
  postVerifierSteam,
}
