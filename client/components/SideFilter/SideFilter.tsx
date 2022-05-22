import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { CheckboxFilter } from '../Filters'
import { FilterIcon } from '../Icons'

import styles from './SideFilter.module.scss'

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
          <CheckboxFilter
            title="Collapsed filters"
            checkboxNames={['Recommended', 'Recently Added', 'Expiring Soon']}
          />
          <CheckboxFilter
            title="Expanded Filters"
            checkboxNames={['Recommended', 'Recently Added', 'Expiring Soon']}
          />
        </>
      )}
    </div>
  )
}
