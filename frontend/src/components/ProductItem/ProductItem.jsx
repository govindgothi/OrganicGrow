import React from 'react'
import styles from "./ProductItem.module.css"
import { Link } from 'react-router-dom'

const ProductItem = () => {
  return (
  <>
  <Link to={"/ProductDetail"}>  <div className={styles.ProductItemBox}>
      <div className={styles.ImageDiv}><img src="https://images.meesho.com/images/products/220335758/q4pui_1200.jpg" alt="" width={"100%"} height={"100%"} /></div>
      <div className={styles.DetailDiv}>
        <h3>Nutrition khad vermicompost 2kg Pack</h3>
        <h4>₹70</h4>
      </div>
    </div></Link>
  </>
  )
}

export {ProductItem}
