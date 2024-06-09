import axiosService from 'services/axios'
import baseUrl from 'services/baseUrl'

export const getUserInfo = (config) => {
  const url = baseUrl.community('/user-info')
  return axiosService.get(url, config)
}

export const getLinkSteamAccount = () => {
  const url = baseUrl.account('/account/link-steam-account')
  return axiosService.get(url)
}

export const getSteamConfig = () => {
  const url = baseUrl.account('/account/verifier/steam-config')
  return axiosService.get(url)
}

export const verifierSteam = (data) => {
  const url = baseUrl.account('/account/verifier/steam')
  return axiosService.post(url, data)
}
