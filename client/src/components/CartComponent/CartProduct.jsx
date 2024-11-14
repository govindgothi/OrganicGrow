import React from 'react'
import styles from "./CartProduct.module.css"

const CartProduct = () => {
  return (
    <div className={styles.CartProductDiv}>
      <div className={styles.productNameImage}>
        <div  className={styles.ImageDiv}><img src="https://vaaradhifarms.com/cdn/shop/files/Honey1.png?v=1698854743&width=1000" alt="" className={styles.img}/></div>
        <div className={styles.NameDiv}>
          <h3>Allam pickle </h3>
          <h4>Rs.909.00</h4>
          <h4>250g</h4>
        </div>
      </div>
      <div className={styles.QuantityBox}>
        remove
      </div>
      <div className={styles.PriceBox}>Rs.909.00</div>
    </div>
  )
}

export default CartProduct
