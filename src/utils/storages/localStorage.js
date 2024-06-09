import { keepDataKeys } from './storageKeys'

import { decryptData, encryptData, isEncrypted } from '../crypto'

const setLocalStorage = (key, obj) => localStorage.setItem(key, obj)

const getLocalStorage = (key) => localStorage.getItem(key)

const removeLocalStorage = (key) => localStorage.removeItem(key)

const clearLocalStorage = () => {
  if (localStorage) {
    Object.keys(localStorage).forEach((key) => {
      if (!keepDataKeys.includes(key)) {
        removeLocalStorage(key)
      }
    })
  }
}

const storageCryptData = {
  set: (key, value, encrypt = true) => {
    try {
      const data =
        typeof value === 'object' ? JSON.stringify(value) : value.toString()
      setLocalStorage(key, encrypt ? encryptData(data) : data)
    } catch {
      setLocalStorage(key, value)
    }
  },
  get: (key, decrypt = true) => {
    const data = getLocalStorage(key) || ''
    try {
      if (isEncrypted(data) && decrypt) {
        return JSON.parse(decryptData(data))
      }
      return JSON.parse(data)
    } catch {
      if (isEncrypted(data) && decrypt) {
        return decryptData(data)
      }
      return data
    }
  },
  remove: (key) => removeLocalStorage(key),
}

export {
  clearLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
  storageCryptData,
}
