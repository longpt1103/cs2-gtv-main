import { axiosCancel as axiosService } from 'services/axios'
import baseUrl from 'services/baseUrl'
import { FETCH_SERVER_LIST_ALL, GAME_APP_ID } from 'utils/constants'

export const getServerList = async ({
  filters: filtersGame = [],
  limit = FETCH_SERVER_LIST_ALL,
  ...rest
}) => {
  const s = '\\' // \ char
  const filters = [{ key: 'appid', value: GAME_APP_ID }, ...filtersGame]
  const filterString = filters.reduce((line, filter) => {
    line += `${s}${filter.key}${s}${filter.value}`
    return line
  }, '')
  const url = baseUrl.steamIGameServersService({
    path: 'GetServerList',
    query: new URLSearchParams({
      ...(filterString ? { filter: filterString } : {}),
      ...rest,
    }).toString(),
  })

  return axiosService.get(url)
}
