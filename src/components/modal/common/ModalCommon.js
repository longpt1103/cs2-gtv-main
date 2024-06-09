import Modal from '../Modal'

const ModalCommon = ({ type }) => {
  return (
    <Modal type={type}>
      <div>Modal common: {type}.</div>
    </Modal>
  )
}

export default ModalCommon
