import { STEAM_API_KEY } from 'utils/constants'

const steamProxy = 'https://api.steampowered.com'

const config = {
  community: 'https://graph.gplay.vn/community/api/v2.0',
  account: 'https://graph.gplay.vn/users/api/v2.0',
  steam: steamProxy,
  steamIGameServersService: ({ query = '', path = '' }) => {
    // const root = process.env.NODE_ENV === 'production' ? steamProxy : ''
    return `${steamProxy}/IGameServersService/${path}/v1/?key=${STEAM_API_KEY}${
      query ? `&${query}` : ''
    }`
  },
}

export default config
