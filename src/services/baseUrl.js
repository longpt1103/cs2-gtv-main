import config from './config'

const mergeUrl = (hostName) => (endpoint) => {
  return `${config[hostName]}${endpoint}`
}

const mergeUrlSteam =
  (hostName) =>
  ({ path = '', query = '' }) => {
    return config[hostName]({ query, path })
  }

const baseUrl = {
  community: mergeUrl('community'),
  account: mergeUrl('account'),
  steam: mergeUrl('steam'),
  steamIGameServersService: mergeUrlSteam('steamIGameServersService'),
}

export default baseUrl
