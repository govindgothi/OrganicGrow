import React from 'react'
import styles from "./CartProduct.module.css"
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../../store/Slices/cartSlice'

const CartProduct = ({cartItem}) => {
  const dispatch = useDispatch()
  console.log(cartItem)
  return (
    <>
    {
      cartItem.map((item)=>(   
     <div key={item._id} className={styles.CartProductDiv}>
     <div className={styles.productNameImage}>
       <div  className={styles.ImageDiv}><img src={item.imageUrl} alt="" className={styles.img}/></div>
       <div className={styles.NameDiv}>
         <h3>{item.productName}</h3>
         <h4>Rs.{item.price}</h4>
         <h4>250g</h4>
       </div>
     </div>
     <div className={styles.QuantityBox} >
       <p onClick={()=>dispatch(decreaseQuantity(item._id))}>-</p>
       <p >{item.quantity}</p>
       <p onClick={()=>dispatch(increaseQuantity(item._id))}>+</p>
     </div>
     <div className={styles.PriceBox}>Rs.909.00</div>
   </div>))
    }
    </>
  )
}

export default CartProduct
