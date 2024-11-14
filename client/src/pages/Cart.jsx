import React from 'react'
import Menu from '../components/PopupCard/Menu'
import Header from '../components/Header/Header'
import CartProduct from '../components/CartComponent/CartProduct'
import Footer from "../components/Footer/Footer"
const Cart = () => {


  return (
    <>
      <Header></Header>
      <div className='CartPageBox'>
         <h1 className='HeadingCartName'> Cart</h1>
      </div>
      <div className='LineBlack'></div>
      <div className='Container'>
        <div className='ProductDisplay'>
            <div className='ProductDisplayHeading'>
              <h3>Product</h3>
              <h3>quantity</h3>
              <h3>price</h3>
            </div>
            <div className='ProductDisplayHeadingLineGrey'></div>
            <div className='productShow'><CartProduct /> <CartProduct /><CartProduct /><CartProduct /><CartProduct /></div>
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
