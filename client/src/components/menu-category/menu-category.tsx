import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './menu-category.module.scss'
import { MenuСategoryProps } from './menu-category.interface'

export const MenuСategory: FC<MenuСategoryProps> = ({ categoriesList }) => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const pathName = categoriesList[activeCategory].search
    router.push(pathName)
  }, [categoriesList, activeCategory])

  const changeCategory = (indx: number) => {
    setActiveCategory(indx)
  }

  return (
    <div className={styles.categories_list}>
      {categoriesList.map((category, indx) => {
        const categoryColor = activeCategory === indx ? color.blue : color.grey

        return (
          <div
            key={category.name}
            className={styles.category}
            onClick={() => changeCategory(indx)}
          >
            <div>{category.icon(categoryColor)}</div>
            <p
              style={{ color: categoryColor }}
              className={styles.category_name}
            >
              {category.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const color = {
  blue: '#2979FF',
  grey: '#9696A0',
}
