import { configureStore } from '@reduxjs/toolkit'
//import { createInjectorsEnhancer } from 'redux-injectors'
//import createSagaMiddleware from 'redux-saga'
import { createReducer } from './reducers'

//const reduxSagaMonitorOptions = {}
//const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
//const { run: runSaga } = sagaMiddleware

/*const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
]*/

const store = configureStore({
  reducer: createReducer(),
  // middleware: []
  //enhancers,
})

export default store
