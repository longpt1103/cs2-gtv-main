import CryptoJS from 'crypto-js'

const CRYPTO_AES_KEY = 'gplayCs2-04/06/2024'

export const encryptData = (str) =>
  CryptoJS.AES.encrypt(str, CRYPTO_AES_KEY).toString()

export const decryptData = (str) =>
  CryptoJS.AES.decrypt(str, CRYPTO_AES_KEY).toString(CryptoJS.enc.Utf8)

export const isEncrypted = (string) => {
  const bytes = CryptoJS.AES.decrypt(string, CRYPTO_AES_KEY)
  try {
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)
    return !!decrypted
  } catch {
    return false
  }
}
