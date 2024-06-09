import { createSelector } from '@reduxjs/toolkit'
import { defaultPlaying } from 'utils/constants'
import { getStartEndIndexPage } from 'utils/steam'
import { initialState } from '../slices'

const selectSlice = (state) => state.steam || initialState

export const selectServerList = createSelector(
  [selectSlice],
  (state) => state.serverList,
)

export const selectServerListLength = createSelector(
  [selectSlice],
  (state) => state.serverList.length,
)

export const makeGetServerList = () =>
  createSelector([selectSlice, (_, page) => page], (state, page) => {
    const list = state.serverList
    const { start, end } = getStartEndIndexPage({
      page,
      listLength: list.length,
    })
    return list.slice(start, end)
  })

export const selectIsPending = createSelector(
  [selectSlice],
  (state) => state.isPending,
)

export const selectPage = createSelector([selectSlice], (state) => state.page)

export const selectIsPendingFetchAll = createSelector(
  [selectSlice],
  (state) => state.isPendingFetchAll,
)

export const makeGetPlaying = () =>
  createSelector([selectSlice, (_, mode) => mode], (state, mode) => {
    if (state.playing?.[mode]) return state.playing[mode].playing
    return 0
  })

export const selectPlaying = createSelector(
  [selectSlice],
  (state) => state.playing || defaultPlaying,
)

export const selectTotalPlayers = createSelector([selectPlaying], (playing) => {
  const playingArr = Object.values(playing)
  return playingArr.reduce((sum, cur) => {
    sum += cur.maxPlayer
    return sum
  }, 0)
})

export const selectPlayerOnline = createSelector([selectPlaying], (playing) => {
  const playingArr = Object.values(playing)
  return playingArr.reduce((sum, cur) => {
    sum += cur.playing
    return sum
  }, 0)
})

export const selectMapCount = createSelector([selectPlaying], (playing) => {
  const playingArr = Object.values(playing)
  const maps = playingArr.reduce((maps, cur) => {
    for (let i = 0; i < cur.maps.length; i++) {
      const map = cur.maps[i]
      if (!maps.includes(map)) maps.push(map)
    }
    return maps
  }, [])
  return maps.length
})

export const selectServerOnline = createSelector([selectPlaying], (playing) => {
  const playingArr = Object.values(playing)
  return playingArr.reduce((sum, cur) => {
    sum += cur.serverOnline
    return sum
  }, 0)
})
