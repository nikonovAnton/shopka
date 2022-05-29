import { SESSION_DEPARTMENTS_FILTERS_KEY } from '../../../constants/user-session-keys'
import { setSessionDepartmentsFiltersAction } from '../../../redux/actions/session.action'
import { ISessionDepartmentsFilters } from './use-session-departments.interface'

export const useSessionDepartments = () => {
  const getFilter = (): ISessionDepartmentsFilters => {
    const filter = sessionStorage.getItem(SESSION_DEPARTMENTS_FILTERS_KEY)
    return filter ? JSON.parse(filter) : defaultState
  }

  const setFilter = (newFilter: ISessionDepartmentsFilters) => {
    setSessionDepartmentsFiltersAction(newFilter)
  }

  return {
    departmentFilter: getFilter(),
    setDepartmentFilter: setFilter,
  }
}

const defaultState = {
  refetchCount: 0,
  isOpen: true,
  categories: [
    { name: 'Expanded Filters', isOpen: true, sectionSelected: undefined },
  ],
}
