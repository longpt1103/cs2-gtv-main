import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shows: [],
  modals: {},
}

export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      const { modal } = action.payload
      if (!state.shows.includes(modal.type)) state.shows.push(modal.type)
      state.modals[modal.type] = modal
    },
    hideModal(state, action) {
      const { type } = action.payload
      state.shows = state.shows.filter((item) => item !== type)
      delete state.modals[type]
    },
    hideAllModal(state) {
      state.modals = {}
      state.shows = []
    },
  },
})

export const { actions: modalActions, reducer: modalReducer } = slice
export { initialState }
