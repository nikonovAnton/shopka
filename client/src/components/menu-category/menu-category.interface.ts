export interface CategoriesListProps {
  name: string
  search: string
  icon: (color: string) => JSX.Element
}

export interface MenuСategoryProps {
  categoriesList: CategoriesListProps[]
}
