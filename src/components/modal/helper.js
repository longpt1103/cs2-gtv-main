import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsOpen, selectModalData } from './selectors'
import { getDispatch } from 'utils/reduxStore'
import { modalActions as actions } from './slices'

export const getMergeModalName = (
  moduleName = 'MODAL_DEFAULT',
  listModalName = [],
) => {
  const listNameArr = []
  const listNameOb = {}

  listModalName.forEach((name) => {
    const modalName = `${moduleName}__${name}`.toUpperCase()
    listNameArr.push(modalName)
    listNameOb[name.toUpperCase()] = modalName
  })

  return {
    listNameArr,
    listNameOb,
    list: {
      [moduleName.toUpperCase()]: listNameOb,
    },
  }
}

export const showModal = (type) => {
  return (data = {}) => {
    const dispatch = getDispatch()
    const modal = { type, data }
    dispatch(actions.showModal({ modal }))
  }
}

export const useModal = (type) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectIsOpen(type))
  const data = useSelector(selectModalData(type))
  const onClose = useCallback(() => {
    dispatch(actions.hideModal({ type }))
  }, [type])
  return {
    isOpen,
    onClose,
    data,
  }
}
