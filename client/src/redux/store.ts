import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { sessionReduser } from './reducers/session.reducer'

const reducers = combineReducers({
  userSession: sessionReduser,
})

export const store = configureStore({
  reducer: reducers,
})
