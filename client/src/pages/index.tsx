import React from 'react'
import type { NextPage } from 'next'
import MainContainer from '../components/main-container/main-container'
import { MenuСategory } from '../components/menu-category/menu-category'
import { categoriesList } from '../models/categories-list.model'
import { SideFilter } from '../components/side-filter/side-filter'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <MenuСategory categoriesList={categoriesList} />
        <SideFilter />
      </MainContainer>
    </Provider>
  )
}

export default Home
