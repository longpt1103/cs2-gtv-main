import {
  FETCH_SERVER_LIMIT,
  defaultPlaying,
  EXPIRE_BEFORE_FETCH_ALL,
} from 'utils/constants'
import { isIncludeGameModeParam } from 'utils/route'
import {
  getLocalStorage,
  STORAGE_KEYS,
  removeLocalStorage,
  setLocalStorage,
} from './storages'

const defaultPage = 1

export const getModeFromPathName = () => {
  const location = window.location
  const pathname = location?.pathname || ''
  const [, mode] = pathname.split('/').filter((path) => path)
  return mode || ''
}

export const getLinkSteamRedirect = (steamConfigData = {}) => {
  let steamRedirectUri = ``
  const {
    openid_op_endpoint,
    openid_claimed_id,
    openid_identity,
    openid_ns,
    openid_mode,
  } = steamConfigData
  if (
    openid_op_endpoint &&
    openid_claimed_id &&
    openid_identity &&
    openid_ns &&
    openid_mode
  ) {
    const queries = [
      { key: 'openid.claimed_id', value: openid_claimed_id },
      { key: 'openid.identity', value: openid_identity },
      { key: 'openid.mode', value: openid_mode },
      { key: 'openid.ns', value: openid_ns },
      { key: 'openid.realm', value: window.location.origin },
      { key: 'openid.return_to', value: window.location.href },
    ]
    let queryString = ''
    queries.forEach((query, index) => {
      queryString += `${query.key}=${query.value}`
      if (index < queries.length - 1) queryString += `&`
    })
    steamRedirectUri = `${openid_op_endpoint}?${queryString}`
  }
  return steamRedirectUri
}

export const getStartEndIndexPage = ({ page = 1, listLength }) => {
  const maxPage = Math.ceil(listLength / FETCH_SERVER_LIMIT)
  const start = (page - 1) * FETCH_SERVER_LIMIT
  const end = start + FETCH_SERVER_LIMIT
  const disabledStart = page === 1
  const disabledEnd = page * FETCH_SERVER_LIMIT >= listLength
  return {
    minPage: 1,
    maxPage,
    start,
    end,
    disabledStart,
    disabledEnd,
    isHide: (page > maxPage) | (maxPage === 1),
  }
}

export const getServerListPage = (search = '') => {
  const searchParams = new URLSearchParams(search)
  if (searchParams.has('page')) {
    const pageNumber = parseInt(searchParams.get('page'))
    if (!isNaN(pageNumber) && pageNumber >= 1) {
      return pageNumber
    }
    return defaultPage
  }
  return defaultPage
}

export const getInitServerListPage = () => {
  const location = window.location
  const mode = getModeFromPathName()
  if (mode && isIncludeGameModeParam(mode)) {
    return getServerListPage(location?.search || '')
  }
  return defaultPage
}

export const getSumServer = (servers = []) => {
  let playing = 0
  let maxPlayer = 0
  const maps = []
  let serverOnline = 0
  servers.forEach((server) => {
    playing += server.players || 0
    maxPlayer += server.max_players || 0
    serverOnline += 1
    if (server.map && !maps.includes(server.map)) maps.push(server.map)
  })
  return {
    playing,
    maxPlayer,
    maps,
    serverOnline,
  }
}

export const removePlayingFromLocal = () => {
  removeLocalStorage(STORAGE_KEYS.PLAYING)
}

export const getPlayingFromLocal = () => {
  try {
    const playing = JSON.parse(getLocalStorage(STORAGE_KEYS.PLAYING))
    return playing || defaultPlaying
  } catch (error) {
    removePlayingFromLocal()
    return defaultPlaying
  }
}

export const checkPlayingInLocal = () => {
  try {
    const playing = JSON.parse(getLocalStorage(STORAGE_KEYS.PLAYING))
    return playing || null
  } catch (error) {
    removePlayingFromLocal()
    return null
  }
}

export const setPlayingToLocal = (obj) => {
  setLocalStorage(STORAGE_KEYS.PLAYING, obj)
}

export const setLastTimeSavePlaying = (value) => {
  setLocalStorage(STORAGE_KEYS.LAST_TIME_SAVE_PLAYING, value)
}

export const isReFreshCountData = () => {
  const hasPlayingLocal = checkPlayingInLocal()
  if (!hasPlayingLocal) return true
  const lastTimeSavePlaying = getLocalStorage(
    STORAGE_KEYS.LAST_TIME_SAVE_PLAYING,
  )
  const eta = parseInt(lastTimeSavePlaying)
  if (!isNaN(eta) && eta > 0) {
    const now = new Date().getTime()
    return now > eta + EXPIRE_BEFORE_FETCH_ALL
  }
  return true
}
