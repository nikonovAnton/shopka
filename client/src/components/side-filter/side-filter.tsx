import React, { useState } from 'react'
import styles from './side-filter.module.scss'
import { Button } from '../button/button'
import { CheckboxFilter } from '../filters'
import { FilterIcon } from '../icons'
import { checkboxFilters } from '../../models/side-filter.model'

export const SideFilter = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const filterHandler = () => {
    setIsFiltersOpen(!isFiltersOpen)
  }

  const filterIconsStyle = {
    transform: `rotate(${isFiltersOpen ? 0 : 180}deg)`,
  }

  return (
    <div className={styles.side_filter_container}>
      <Button onClick={filterHandler}>
        <span className={styles.filter_icon} style={filterIconsStyle}>
          <FilterIcon />
        </span>
        <span>Departments</span>
      </Button>

      {isFiltersOpen && (
        <>
          {checkboxFilters.map((checkboxFilter) => (
            <CheckboxFilter
              title={checkboxFilter.title}
              checkboxNames={checkboxFilter.checkboxNames}
            />
          ))}
        </>
      )}
    </div>
  )
}
