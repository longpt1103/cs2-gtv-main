export const TIME_EXPIRE_TOKEN = 1 * 60 * 60 * 1000 // 1 hours
export const EXPIRE_BEFORE = 5 * 60 * 1000 // expire when `now > expireTokenAt - EXPIRE_BEFORE`
export const STEAM_API_KEY = '8356942B53F59221CA7E1DB40C99E539'
export const EXPIRE_BEFORE_FETCH_ALL = 0 * 60 * 60 * 1000 // 0 hours
export const GAME_APP_ID = 730 // Cs2

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

export const HIDE_FILTER_GAMEMODE = [
  FILTER_GAMEMODE.deathmatch,
  FILTER_GAMEMODE.clutch,
  FILTER_GAMEMODE.zombieEscape,
]
export const COMING_SOON_FILTER_GAMEMODE = [
  FILTER_GAMEMODE.retake,
  FILTER_GAMEMODE.bhop,
  FILTER_GAMEMODE.arena,
]
export const ROUTE_FILTER_GAMEMODE = [FILTER_GAMEMODE.fivevsfive]
export const FETCH_FILTER_GAMEMODE = [FILTER_GAMEMODE.fivevsfive]

/**
 * filter exact with query filter to `IGameServersService` steam service
 * pathname = `zoombie-es` but query = `zm`
 * Ex: gametype=zm
 */
export const FILTER_KEYS = {
  GAMETYPE: 'gametype',
  ADDR: 'addr',
}
export const FILTER_GAMEMODE_QUERY = {
  [FILTER_GAMEMODE.fivevsfive]: {
    key: FILTER_KEYS.GAMETYPE,
    value: '5vs5',
  },
  [FILTER_GAMEMODE.deathmatch]: {
    key: FILTER_KEYS.GAMETYPE,
    value: 'deathmatch',
  },
  [FILTER_GAMEMODE.retake]: {
    key: FILTER_KEYS.GAMETYPE,
    value: 'retake',
  },
  [FILTER_GAMEMODE.bhop]: {
    key: FILTER_KEYS.GAMETYPE,
    value: 'bhop',
  },
  [FILTER_GAMEMODE.arena]: {
    key: FILTER_KEYS.GAMETYPE,
    value: 'arena',
  },
  [FILTER_GAMEMODE.clutch]: {
    key: FILTER_KEYS.GAMETYPE,
    value: 'clutch',
  },
  [FILTER_GAMEMODE.zombieEscape]: {
    key: FILTER_KEYS.GAMETYPE,
    value: 'zm',
  },
}

/**
 * filter exact with query filter to `IGameServersService` steam service
 * Ex: addr=61.28.230.191
 */
export const FILTER_ADDR_QUERY = {
  [FILTER_GAMEMODE.fivevsfive]: {
    key: FILTER_KEYS.ADDR,
    value: ['61.28.230.134'],
  },
  [FILTER_GAMEMODE.deathmatch]: {
    key: FILTER_KEYS.ADDR,
    value: [],
  },
  [FILTER_GAMEMODE.retake]: {
    key: FILTER_KEYS.ADDR,
    value: [],
  },
  [FILTER_GAMEMODE.bhop]: {
    key: FILTER_KEYS.ADDR,
    value: [],
  },
  [FILTER_GAMEMODE.arena]: {
    key: FILTER_KEYS.ADDR,
    value: [],
  },
  [FILTER_GAMEMODE.clutch]: {
    key: FILTER_KEYS.ADDR,
    value: [],
  },
  [FILTER_GAMEMODE.zombieEscape]: {
    key: FILTER_KEYS.ADDR,
    value: [],
  },
}

export const FETCH_SERVER_LIST_ALL = 100
export const FETCH_SERVER_LIMIT = 10 // limit or item per page
export const ACCEPT_FILTER_QUERY = [
  // FILTER_GAMEMODE_QUERY, // maybe use later
  FILTER_ADDR_QUERY,
]

export const defaultPlaying = FETCH_FILTER_GAMEMODE.reduce((ob, mode) => {
  ob[mode] = {
    playing: 0,
    maxPlayer: 0,
    maps: [],
    serverOnline: 0,
  }
  return ob
}, {})
