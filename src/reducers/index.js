import { combineReducers } from '@reduxjs/toolkit'
import { modalReducer } from 'components/modal/slices'
import { authReducer } from 'components/auth/slices'
import { steamReducer } from 'components/steam/slices'

const rootState = {
  modal: modalReducer,
  auth: authReducer,
  steam: steamReducer,
}

const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    ...injectedReducers,
    // other non-injected reducers can go here...
    ...rootState,
  })

  return rootReducer
}

export { createReducer }
