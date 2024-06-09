import axios from 'axios'
import { getTokenFromLocal } from 'utils/token'

const parseDataResponse = (response) => {
  const { data } = response
  let responseData = data
  return responseData
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
      //(error) => handleErrorRequest(error, instance),
    )
  }

  return instance
}

const axiosService = createService()
export default axiosService
