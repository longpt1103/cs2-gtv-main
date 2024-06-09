import { useCallback, useImperativeHandle } from 'react'
import { useModal } from './helper'
import BaseModal from './BaseModal'

const Modal = ({ modalRef, type, onClose: onCloseProp, children, ...rest }) => {
  const modal = useModal(type)

  const onClose = useCallback(() => {
    modal.onClose() // dispatch
    onCloseProp?.() // extra action
  }, [modal, onCloseProp])

  useImperativeHandle(
    modalRef,
    () => ({
      onClose,
    }),
    [onClose],
  )

  return (
    <BaseModal
      isOpen={modal.isOpen}
      onClose={onClose}
      /* react-modal props */
      overlayClassName="modal fade"
      closeTimeoutMS={2000}
      {...rest}
    >
      {children}
    </BaseModal>
  )
}

export default Modal
