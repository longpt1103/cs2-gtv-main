import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectModals } from './selectors'
import BaseModal from './BaseModal'
import Modal from './Modal'
import { allViews } from './modalViews'
import { showModal, useModal } from './helper'

const Modals = () => {
  const modals = useSelector(selectModals)
  const renderModal = useCallback((type) => {
    const ModalComponent = allViews[type]
    if (ModalComponent) return <ModalComponent key={type} type={type} />
    return null
  }, [])
  return <>{modals.map((type) => renderModal(type))}</>
}

export { BaseModal, Modal, showModal, useModal, Modals }
