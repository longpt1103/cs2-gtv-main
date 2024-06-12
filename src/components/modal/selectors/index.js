import { createSelector } from '@reduxjs/toolkit'

import { initialState } from '../slices'

const defaultData = {}

const selectSlice = (state) => state.modal || initialState

export const selectModalShows = createSelector(
  [selectSlice],
  (state) => state.shows,
)

export const selectModals = createSelector(
  [selectSlice],
  (state) => state.modals,
)

export const selectIsOpen = (type) =>
  createSelector([selectModalShows], (modalShows) => modalShows.includes(type))

export const selectModalData = (type) =>
  createSelector(
    [selectModals],
    (modals) => modals?.[type]?.data || defaultData,
  )
