import { MODAL_TYPE } from '../constant'
import ModalCommon from './ModalCommon'
import ModalRequiredLogin from './ModalRequiredLogin'

export const modalViews = {
  [MODAL_TYPE.COMMON.OPEN]: ModalCommon,
  [MODAL_TYPE.COMMON.LOGIN_REQUIRED]: ModalRequiredLogin,
}
