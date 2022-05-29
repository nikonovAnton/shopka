import React from 'react'
import type { NextPage } from 'next'
import MainContainer from '../components/MainContainer/MainContainer'
import { MenuСategory } from '../components/MenuСategory/MenuСategory'
import { categoriesList } from '../models/categoriesList.models'
import { SideFilter } from '../components/SideFilter/SideFilter'
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
