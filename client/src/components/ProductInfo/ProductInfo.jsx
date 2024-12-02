import React from 'react'
import styles from "./ProductInfo.module.css"
const ProductInfo = () => {
  return (
    <div className={styles.ProductInfoBox}>
      <div className={styles.ImageDiv}><img src="https://vaaradhifarms.com/cdn/shop/files/Untitled_design_8.png?v=1685516776&width=64" alt="" /></div>
      <h3 className={styles.head}>Farm-to-Table Freshness</h3>
      <p className={styles.InfoPara}>Enjoy the vibrant flavors and superior quality of food that has been carefully harvested and brought straight to your doorstep</p>
    </div>
  )
}

export default ProductInfo
