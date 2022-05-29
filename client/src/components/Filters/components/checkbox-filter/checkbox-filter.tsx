import React, { FC, useState, MouseEvent } from 'react'
import styles from './checkbox-filter.module.scss'
import { ArrowIcon } from '../../../icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { CheckboxFilterProps } from './checkbox-filter.interface'
import classNames from 'classnames'

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
  title,
  checkboxNames,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true)
  const [activeСheckboxes, setActiveСheckboxes] = useState<string[]>([])

  const openFilterHandler = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const onChangeHandler = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    const element = target.closest(`li`)
    const elementId = element?.id || ''

    if (!activeСheckboxes.includes(elementId)) {
      return setActiveСheckboxes((prev) => [...prev, elementId])
    }

    setActiveСheckboxes((prev) =>
      prev.filter((checkbox) => checkbox !== elementId),
    )
  }

  const getCheckboxContainerClassName = (checkboxName: string) => {
    return classNames(
      styles.checkbox_input_container,
      activeСheckboxes.includes(checkboxName) ? styles.active : null,
    )
  }

  return (
    <div className={styles.filter}>
      <div className={styles.header} onClick={openFilterHandler}>
        <h3>{title}</h3>

        <span
          className={styles.arrow_icon}
          style={{ transform: `rotate(${isFilterOpen ? 0 : 180}deg)` }}
        >
          <ArrowIcon />
        </span>
      </div>

      {isFilterOpen && (
        <ul onClick={onChangeHandler} className={styles.checkbox_list}>
          {checkboxNames.map((checkboxName) => (
            <li
              className={styles.checkbox_container}
              id={checkboxName}
              key={checkboxName}
            >
              <div className={getCheckboxContainerClassName(checkboxName)}>
                <input type="checkbox" />
                <label htmlFor="checkbox">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="xs"
                    color={
                      activeСheckboxes.includes(checkboxName) ? '#fff' : '#000'
                    }
                  />
                </label>
              </div>

              <span>{checkboxName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
