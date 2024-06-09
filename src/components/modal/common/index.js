import { MODAL_TYPE } from '../constant'
import { showModal } from '../helper'

const showModals = {
  open: showModal(MODAL_TYPE.COMMON.OPEN),
  loginRequired: showModal(MODAL_TYPE.COMMON.LOGIN_REQUIRED),
}

export { showModals }
