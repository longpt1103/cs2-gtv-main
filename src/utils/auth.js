import {
  getTokenFromLocal,
  removeTokenFromLocal,
  removeExpireTokenAtFromLocal,
  removeUserInfoFromLocal,
  isTokenExpired,
  getUserInfoFromLocal,
} from './token'
import { storageCryptData, setLocalStorage, STORAGE_KEYS } from './storages'
import { TIME_EXPIRE_TOKEN } from './constants'
import history from './history'

export const removeAllStorage = () => {
  removeTokenFromLocal()
  removeExpireTokenAtFromLocal()
  removeUserInfoFromLocal()
}

export const saveAllStorage = ({ token, userInfo }) => {
  if (token && userInfo) {
    setLocalStorage(STORAGE_KEYS.USER_INFO, JSON.stringify(userInfo))
    storageCryptData.set(STORAGE_KEYS.TOKEN, token) // encrypt token
    const expireTokenAt = new Date().getTime() + TIME_EXPIRE_TOKEN
    setLocalStorage(STORAGE_KEYS.EXPIRE_TOKEN_AT, expireTokenAt)
  }
}

export const getConfigWithToken = (token) => {
  if (!token) return {}
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
}

export const isUserSignIn = () => {
  const token = getTokenFromLocal()
  const tokenExpired = isTokenExpired()
  return !!(token && !tokenExpired)
}

export const clearAuthorizeQueryString = () => {
  const location = window.location
  const searchParams = new URLSearchParams(location?.search)
  const pathname = location.pathname
  const hasAuthorizeQuery = searchParams.has('authorize_code')
  if (hasAuthorizeQuery && pathname) {
    // clear query string
    history.replace({ pathname, search: '' })
  }
}

export const clearQueryString = () => {
  const location = window.location
  const pathname = location.pathname
  history.replace({ pathname, search: '' })
}

export const clearLogout = () => {
  removeAllStorage()
}

export const checkUserSignIn = (clearStorage = false) => {
  let isSignIn = isUserSignIn()
  let userInfo = getUserInfoFromLocal()
  if ((isSignIn && !userInfo) || !isSignIn) {
    isSignIn = false
    userInfo = null
    if (clearStorage) clearLogout()
  }
  return {
    isSignIn,
    userInfo,
  }
}

export const simulate = () => {
  const uri = `https://id.gplay.vn/?redirect=${window.location.href}`
  const encoded = encodeURI(uri)
  window.location.href = encoded
}
