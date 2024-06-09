import { getMergeModalName } from './helper'

const commonModal = getMergeModalName('COMMON', ['OPEN', 'LOGIN_REQUIRED'])

export const MODAL_TYPE = {
  ...commonModal.list,
}
