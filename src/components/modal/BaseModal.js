import { useCallback, memo } from 'react'
import ReactModal from 'react-modal'

function setAppElement() {
  ReactModal.setAppElement('#root')
}

setAppElement()

const BaseModal = ({
  children,
  isOpen = false,
  shouldCloseOnOverlayClick = true,
  onClose,
  ...rest
}) => {
  const onRequestClose = useCallback(() => {
    onClose?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      {...rest}
    >
      {children}
    </ReactModal>
  )
}

export default memo(BaseModal)
