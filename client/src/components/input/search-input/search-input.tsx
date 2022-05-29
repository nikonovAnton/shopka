import React, { ChangeEvent, useState } from 'react'
import style from './search.module.scss'
import Image from 'next/image'
import classNames from 'classnames'
import { SearchInputProps } from './search-input.interface'

export const SearchInput = ({
  placeholder = 'Search',
  searchIconSetup = { width: 17, height: 17 },
  closeIconSetup = { width: 14, height: 14 },
  className,
}: SearchInputProps) => {
  const [value, setValue] = useState<string>('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const clearInput = () => {
    setValue('')
  }
  return (
    <div className={style.search_wrapper}>
      <div className={style.search_icon}>
        <Image {...searchIconSetup} src="/svg/search-icon.svg" alt="search" />
      </div>

      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={classNames(style.search_input, { className })}
      />

      {value ? (
        <button className={style.close_icon} onClick={clearInput}>
          <Image
            {...closeIconSetup}
            src="/svg/close-button.svg"
            alt="close search input"
          />
        </button>
      ) : null}
    </div>
  )
}
