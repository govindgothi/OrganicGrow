import React from 'react'
import styles from "./ShowProductCard.module.css"
const ShowProductCard = () => {
  return (
    <div className={styles.ShowProductCardBox}>
      <div className={styles.ImageDiv}><img src="https://vaaradhifarms.com/cdn/shop/files/Ghee_HighRes.jpg?v=1698928244&width=300" alt="" width={"100%"} height={"100%"} className={styles.Image}/></div>
      <div className={styles.DetailDiv}>
         <h3>A2 Cow Ghee</h3>
         <p className={styles.ReviewCount}> ⭐⭐⭐⭐⭐ 1886 reviews</p>
         <p>Price : Rs. 900.00 </p>
      </div>
    </div>
  )
}

export default ShowProductCard
