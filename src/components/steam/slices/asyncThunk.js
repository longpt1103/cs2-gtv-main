import { createAsyncThunk } from '@reduxjs/toolkit'
import { getServerList } from 'services/steam'
import {
  getListPromisesGetAllServerList,
  getFilterGetServerList,
} from 'utils/services'

const fetchServerList = createAsyncThunk(
  'steam/fetchServerList',
  async (props = {}) => {
    const { mode, ...params } = props
    const filters = getFilterGetServerList(mode)
    const response = await getServerList({ filters, ...params })
    return {
      mode,
      response: response?.response || [],
    }
  },
)

const fetchAllServerList = createAsyncThunk(
  'steam/fetchAllServerList',
  async () => {
    const promises = getListPromisesGetAllServerList()
    const responses = await Promise.all(promises)
    return responses
  },
)

export { fetchServerList, fetchAllServerList }
