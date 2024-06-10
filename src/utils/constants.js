export const TIME_EXPIRE_TOKEN = 0.5 * 60 * 60 * 1000 // 0.5 hours
export const EXPIRE_BEFORE = 10 * 60 * 1000 // expire when `now > expireTokenAt - EXPIRE_BEFORE`
export const STEAM_API_KEY = '8356942B53F59221CA7E1DB40C99E539'
export const EXPIRE_BEFORE_FETCH_ALL = 2 * 60 * 60 * 1000 // 2 hours

// filter exact with pathname
export const FILTER_GAMEMODE = {
  fivevsfive: '5vs5',
  deathmatch: 'deathmatch',
  retake: 'retake',
  bhop: 'bhop',
  arena: 'arena',
  clutch: 'clutch',
  zombieEscape: 'zm',
}
export const FILTER_GAMEMODE_VALUES = Object.values(FILTER_GAMEMODE)

/**
 * filter exact with query filter to `IGameServersService` steam service
 * Ex: pathname = `zoombie-es but query = `zm`
 */
export const FILTER_GAMEMODE_QUERY = {
  [FILTER_GAMEMODE.fivevsfive]: '5vs5',
  [FILTER_GAMEMODE.deathmatch]: 'deathmatch',
  [FILTER_GAMEMODE.retake]: 'retake',
  [FILTER_GAMEMODE.bhop]: 'bhop',
  [FILTER_GAMEMODE.arena]: 'arena',
  [FILTER_GAMEMODE.clutch]: 'clutch',
  [FILTER_GAMEMODE.zombieEscape]: 'zm',
}

export const FETCH_SERVER_LIST_ALL = 100
export const FETCH_SERVER_LIMIT = 10 // limit or item per page

export const defaultPlaying = FILTER_GAMEMODE_VALUES.reduce((ob, mode) => {
  ob[mode] = {
    playing: 0,
    maxPlayer: 0,
    maps: [],
    serverOnline: 0,
  }
  return ob
}, {})