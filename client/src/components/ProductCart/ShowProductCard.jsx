import React from 'react'
import styles from "./ShowProductCard.module.css"
import { Link } from 'react-router-dom'
const ShowProductCard = ({id,imageUrl,price,productName}) => {
  // console.log(price, id)
  return (<>
      <Link className='custom-link' to={`/ProductFeature/${id}`}>
      <div className={styles.ShowProductCardBox}>
        <div className={styles.ImageDiv}><img src={imageUrl} alt="" width={"100%"} height={"100%"} className={styles.Image}/></div>
        <div className={styles.DetailDiv}>
           <h3>{productName}</h3>
           <p className={styles.ReviewCount}> ⭐⭐⭐⭐⭐ 1886 reviews</p>
           <p>Price : Rs.{price} </p>
        </div>
      </div>
      </Link>
  </>)
}

export default ShowProductCard
