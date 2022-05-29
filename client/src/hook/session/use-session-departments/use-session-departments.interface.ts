export interface ISessionDepartmentsFilters {
  refetchCount: number
  isOpen: boolean
  categories: { name: string; isOpen: boolean; sectionSelected?: string }[]
}
