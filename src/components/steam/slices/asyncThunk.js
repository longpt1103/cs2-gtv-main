import { createAsyncThunk } from '@reduxjs/toolkit'
import { getServerList } from 'services/steam'
import { FILTER_GAMEMODE_VALUES, FILTER_GAMEMODE_QUERY } from 'utils/constants'

const fetchServerList = createAsyncThunk(
  'steam/fetchServerList',
  async (props = {}) => {
    const { mode, ...params } = props
    const response = await getServerList({ ...params })
    return {
      mode,
      response: response?.response || [],
    }
  },
)

const fetchAllServerList = createAsyncThunk(
  'steam/fetchAllServerList',
  async () => {
    const promises = FILTER_GAMEMODE_VALUES.map((key) => {
      const filters = [{ key: 'gametype', value: FILTER_GAMEMODE_QUERY[key] }]
      return getServerList({ filters })
    })
    const responses = await Promise.all(promises)
    return responses
  },
)

export { fetchServerList, fetchAllServerList }
