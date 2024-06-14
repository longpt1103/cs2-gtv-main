import { getServerList } from 'services/steam'
import {
  FETCH_FILTER_GAMEMODE as allGameMode,
  ACCEPT_FILTER_QUERY as acceptListQuery,
} from 'utils/constants'

const convertValue = (value) => {
  let hasValue = false
  let newValue = value
  if (typeof value === 'string' && value.trim() !== '') {
    hasValue = true
    newValue = value.trim()
  } else if (Array.isArray(value) && value.length) {
    hasValue = true
    newValue = value.join(',')
  }
  return {
    hasValue,
    value: newValue,
  }
}

export const getFilterGetServerList = (mode) => {
  const filters = []
  for (let i = 0; i < acceptListQuery.length; i++) {
    const listQuery = acceptListQuery[i]
    const query = listQuery[mode]
    const { hasValue, value } = convertValue(query?.value)
    if (query?.key && hasValue) {
      filters.push({
        key: query.key,
        value,
      })
    }
  }
  return filters
}

export const getListPromisesGetAllServerList = () => {
  const promises = []
  for (let i = 0; i < allGameMode.length; i++) {
    const mode = allGameMode[i]
    const filters = getFilterGetServerList(mode)
    if (filters.length) promises.push(getServerList({ filters }))
  }
  return promises
}
