import React from 'react'
import Menu from '../components/PopupCard/Menu'
import Header from '../components/Header/Header'
import CartProduct from '../components/CartComponent/CartProduct'
import Footer from "../components/Footer/Footer"
import { useSelector } from 'react-redux'
const Cart = () => {

  const cartItem = useSelector(state=>state.cartItem)
  // console.log(cartItem)

  return (
    <>
      <Header></Header>
      <div className='CartPageBox'>
         <h1 className='HeadingCartName'>Cart</h1>
      </div>
      <div className='LineBlack'></div>
      <div className='Container'>
        <div className='ProductDisplay'>
            <div className='ProductDisplayHeading'>
              <h3 className='product'>Product</h3>
              <h3 className='quantity'>quantity</h3>
              <h3 className='price'>price</h3>
            </div>
            <div className='ProductDisplayHeadingLineGrey'></div>
            <div className='productShow'><CartProduct cartItem={cartItem}/></div>
        </div>
        <div className='CheckoutBox'>
          <div className='priceContainer subtotal'>
            <h3>subtotal</h3>
            <h3>Rs.250.00</h3>
          </div>
          <div className='priceContainer' >
            <h2>Total</h2>
            <h2>Rs.250.00</h2>
          </div>
          <button>Checkout</button>
        </div>
      </div>
      <Footer ></Footer>

      </> )
}

export default Cart
