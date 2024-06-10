import axios from 'axios'
import { getTokenFromLocal } from 'utils/token'
import { getDispatch } from 'utils/reduxStore'
import { authActions as actions } from 'components/auth/slices'

const parseDataResponse = (response) => {
  const { data } = response
  let responseData = data
  return responseData
}

const parseDataError = (error) => {
  const status = error?.response?.status
  const data = error?.response?.data || {}
  const isCancel = axios.isCancel(error)
  return Promise.reject({
    status,
    data,
    networkError: error.message === 'Network Error',
    isCancel,
  })
}

const handleErrorRequest = (error, axiosInstance) => {
  const status = error?.response?.status
  switch (status) {
    case 403:
    case 401: {
      const dispatch = getDispatch()
      dispatch(actions.logout())
      return parseDataError(error)
    }
    default:
      return parseDataError(error)
  }
}

export const createService = (
  config,
  skipInterceptorResponse = false,
  skipAuthorization = false,
) => {
  const instance = axios.create(config)

  instance.interceptors.request.use((requestConfig) => {
    // Do something before request is sent
    const token = getTokenFromLocal()
    console.log({ tokenRequest: token })
    const { headers = {} } = requestConfig
    if (token && !skipAuthorization) {
      headers['Authorization'] = 'Bearer ' + token
    }
    return { ...requestConfig, headers }
  })

  if (!skipInterceptorResponse) {
    instance.interceptors.response.use(
      (response) => parseDataResponse(response),
      (error) => handleErrorRequest(error, instance),
    )
  }

  return instance
}
