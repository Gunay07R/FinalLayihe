import React from 'react'

import Image from './Image'
import Category from './Category'
import Products from './Products'
import Sunset from './Sunset'
import Gear from './Gear'
import { Leave } from './Leave'
import Carousel from "./Carousel"
import Snow from './Snow'
import Help from './Help'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Links from './Links'


const HomeRouter = () => {
  return (
    <div>
    <Image/>
    <Category/>
    <Products/>
    <Sunset/>
    <Gear/>
    <Leave/>
    <Carousel/>
    <Snow/>
    <Help/>
    <Footer/>
    <Subscribe/>
    <Links/>
    </div>
  )
}

export default HomeRouter