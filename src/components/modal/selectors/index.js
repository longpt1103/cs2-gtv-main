import { createSelector } from '@reduxjs/toolkit'

import { initialState } from '../slices'

const selectSlice = (state) => state.modal || initialState

export const selectModals = createSelector(
  [selectSlice],
  (state) => state.shows,
)

export const selectIsOpen = (type) =>
  createSelector([selectModals], (modalShows) => modalShows.includes(type))
