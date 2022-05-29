import { ISessionDepartmentsFilters } from '../../hook/session/use-session-departments/use-session-departments.interface'
import { SESSION_DEPARTMENTS_FILTERS } from '../constants/session-filter'

export const setSessionDepartmentsFiltersAction = (
  action: ISessionDepartmentsFilters,
) => ({
  type: SESSION_DEPARTMENTS_FILTERS,
  payload: action,
})
