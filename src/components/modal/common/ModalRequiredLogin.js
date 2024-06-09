import { useRef } from 'react'
import Modal from '../Modal'
import { useCallback } from 'react'
import { simulate } from 'utils/auth'

const ModalRequiredLogin = ({ type }) => {
  const modalRef = useRef(null)
  const onClose = useCallback(() => {
    simulate()
  }, [])
  return (
    <Modal
      modalRef={modalRef}
      type={type}
      className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
      onClose={onClose}
    >
      <div className="modal-content" style={{ minHeight: 280 }}>
        <div className="modal-body d-flex flex-column align-items-center justify-content-center">
          <div className="text-large">Vui lòng đăng nhập!</div>
          <button
            className="btn btn-wide btn-game-red mt-4"
            onClick={() => {
              simulate()
              if (modalRef.current) modalRef.current?.onClose()
            }}
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalRequiredLogin
