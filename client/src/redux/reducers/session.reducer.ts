import { Action } from 'redux-ts'
import { SESSION_DEPARTMENTS_FILTERS } from '../constants/session-filter'

const defaultState = {
  departmentsFilters: {},
}

export const sessionReduser = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SESSION_DEPARTMENTS_FILTERS:
      return {
        ...state,
        departmentsFilters: action.payload,
      }

    default:
      return state
  }
}
