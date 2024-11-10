import React from 'react'
import { ProductDetailCart } from '../components/ProductItem/ProductDetailCart'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

const ProductDetail = () => {
  return (<>
     <Header></Header>
    <ProductDetailCart></ProductDetailCart>
    <Footer></Footer>
    </> )
}

export { ProductDetail}
