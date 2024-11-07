import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { SignUpForm } from '../components/RegistrationForm/SignUpForm'
import { LoginForm } from '../components/RegistrationForm/LoginForm'
import { ProductItem } from '../components/ProductItem/ProductItem'
import ProductItemSingalPage from '../components/ProductItem/ProductItemSingalPage'
import { DisplaySingleProduct } from '../../Products/DisplaySingleProduct'

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <SignUpForm></SignUpForm> */} 
      {/* <LoginForm></LoginForm> */}
      {/* <ProductItem></ProductItem> */}
      {/* <ProductItemSingalPage></ProductItemSingalPage> */}
      {/* <DisplaySingleProduct></DisplaySingleProduct> */}
      <Footer></Footer>
    </div>
  )
}

export {Home}
