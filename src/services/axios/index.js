import { createService } from './axios'
import axiosCancel from './axiosCancel'

const axiosService = createService()
export default axiosService
export { axiosService, axiosCancel }
