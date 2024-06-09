import { createSlice } from '@reduxjs/toolkit'
import { fetchServerList, fetchAllServerList } from './asyncThunk'
import {
  getInitServerListPage,
  getPlayingFromLocal,
  getSumServer,
  setPlayingToLocal,
  setLastTimeSavePlaying,
} from 'utils/steam'
import { FILTER_GAMEMODE_VALUES } from 'utils/constants'

const initialState = {
  isPending: false,
  isPendingFetchAll: false,
  serverList: [],
  page: getInitServerListPage(),
  playing: getPlayingFromLocal(),
}

console.log({
  steamReducer: initialState,
})

export const slice = createSlice({
  name: 'steam',
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1
    },
    nextPage(state) {
      const nextPage = state.page + 1
      state.page = nextPage
    },
    prevPage(state) {
      const prevPage = state.page - 1
      state.page = prevPage
    },
    changePage(state, { payload }) {
      state.page = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServerList.pending, (state, action) => {
      state.isPending = true
      state.serverList = []
    })
    builder.addCase(fetchServerList.fulfilled, (state, { payload }) => {
      const { response, mode } = payload
      const playingState = { ...state.playing }
      const servers = response?.servers || []
      const info = getSumServer(servers)
      if (playingState[mode]) {
        playingState[mode] = {
          ...playingState[mode],
          /* playing, maxPlayers, maps */
          ...info,
        }
        state.playing = playingState
        setPlayingToLocal(JSON.stringify(playingState))
      }
      state.serverList = servers
      state.isPending = false
    })
    builder.addCase(fetchServerList.rejected, (state) => {
      state.isPending = false
    })

    builder.addCase(fetchAllServerList.pending, (state) => {
      state.isPendingFetchAll = true
    })
    builder.addCase(fetchAllServerList.fulfilled, (state, { payload }) => {
      console.log('fetchAllServerList.fulfilled', { payload })
      const playingState = { ...state.playing }
      for (let i = 0; i < payload.length; i++) {
        const servers = payload[i]?.response?.servers || []
        const info = getSumServer(servers)
        const mode = FILTER_GAMEMODE_VALUES[i]
        if (playingState[mode]) {
          playingState[mode] = {
            ...playingState[mode],
            /* playing, maxPlayers, maps */
            ...info,
          }
        }
      }
      state.playing = playingState
      state.isPendingFetchAll = false
      setPlayingToLocal(JSON.stringify(playingState))
      setLastTimeSavePlaying(new Date().getTime())
    })
    builder.addCase(fetchAllServerList.rejected, (state, action) => {
      console.log('fetchAllServerList.rejected', { action })
      state.isPendingFetchAll = false
    })
  },
})

export const { actions: steamActions, reducer: steamReducer } = slice
export { initialState }
