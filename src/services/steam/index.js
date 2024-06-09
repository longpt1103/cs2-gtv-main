import axiosService from 'services/axios'
import baseUrl from 'services/baseUrl'
import { FETCH_SERVER_LIST_ALL } from 'utils/constants'

export const getServerList = ({
  filters = [],
  limit = FETCH_SERVER_LIST_ALL,
  ...rest
}) => {
  const s = '\\' // \ char
  const filterString = filters.reduce((line, filter) => {
    line += `${s}${filter.key}${s}${filter.value}`
    return line
  }, '')
  const url = baseUrl.steamIGameServersService({
    path: 'GetServerList',
    query: new URLSearchParams({
      limit,
      ...(filterString ? { filter: filterString } : {}),
      ...rest,
    }).toString(),
  })
  return axiosService.get(url)
}
