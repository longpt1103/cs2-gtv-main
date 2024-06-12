import { useCallback } from 'react'
import { useModal } from '../helper'
import BaseModal from '../BaseModal'

const ModalCommon = ({ type }) => {
  const { isOpen, onClose, data = {} } = useModal(type)
  const { title, closeTimeoutMS = 2000 } = data

  const onCloseModal = useCallback(() => {
    onClose() // dispatch
  }, [onClose])

  const onOK = useCallback(() => {
    onCloseModal()
    // some extra other action
  }, [onCloseModal])

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onCloseModal}
      closeTimeoutMS={closeTimeoutMS}
      overlayClassName="modal"
      className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
    >
      <div className="modal-content" style={{ minHeight: 280 }}>
        <div className="modal-body d-flex flex-column align-items-center justify-content-center">
          <div className="text-large">{title}</div>
          <button className="btn btn-wide btn-game-red mt-4" onClick={onOK}>
            OK
          </button>
        </div>
      </div>
    </BaseModal>
  )
}

export default ModalCommon
