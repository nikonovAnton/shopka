import React from 'react'
import type { NextPage } from 'next'
import MainContainer from '../components/MainContainer/MainContainer'
import { MenuСategory } from '../components/MenuСategory/MenuСategory'
import { categoriesList } from '../models/categoriesList'
import { SideFilter } from '../components/SideFilter/SideFilter'

const Home: NextPage = () => {
  return (
    <MainContainer>
      <MenuСategory categoriesList={categoriesList} />
      <SideFilter />
    </MainContainer>
  )
}

export default Home
