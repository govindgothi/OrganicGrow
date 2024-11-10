import React from 'react'
import { Header } from '../components/Header/Header'
import { Categories } from '../components/Header/Categories'
import { ProductItem } from '../components/ProductItem/ProductItem'
import { Footer } from '../components/Footer/Footer'

const ProductCategories = () => {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <ProductItem></ProductItem>
      <Footer></Footer>
    </div>
  )
}

export { ProductCategories}
