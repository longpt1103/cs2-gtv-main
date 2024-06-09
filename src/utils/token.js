import {
  storageCryptData,
  STORAGE_KEYS,
  getLocalStorage,
  removeLocalStorage,
} from 'utils/storages'
import { EXPIRE_BEFORE } from 'utils/constants'

export const getTokenFromLocal = () => {
  return storageCryptData.get(STORAGE_KEYS.TOKEN)
}

export const removeTokenFromLocal = () => {
  removeLocalStorage(STORAGE_KEYS.TOKEN)
}

export const getExpireTokenAtFromLocal = () => {
  return getLocalStorage(STORAGE_KEYS.EXPIRE_TOKEN_AT)
}

export const removeExpireTokenAtFromLocal = () => {
  removeLocalStorage(STORAGE_KEYS.EXPIRE_TOKEN_AT)
}

export const removeUserInfoFromLocal = () => {
  removeLocalStorage(STORAGE_KEYS.USER_INFO)
}

export const getUserInfoFromLocal = () => {
  try {
    const userInfo = JSON.parse(getLocalStorage(STORAGE_KEYS.USER_INFO))
    return userInfo || null
  } catch (error) {
    removeUserInfoFromLocal()
    return null
  }
}

export const isTokenExpired = () => {
  const expireTokenAt = getExpireTokenAtFromLocal()
  if (expireTokenAt) {
    const eta = parseInt(expireTokenAt)
    if (!isNaN(eta) && eta > 0) {
      const now = new Date().getTime()
      return now > eta - EXPIRE_BEFORE
    }
    return true
  }
  return true
}
