import React from 'react'
import styles from "./ProductDetail.module.css"
import correct from "../../assets/correct.png"
import WieghtButton from '../Buttons/WieghtButton'

const ProductDetail = () => {
  return (
    <main className={styles.ProductDetailBox}>
       <div className={styles.ProductImageArea}><div className={styles.ImageDiv}><img src="https://vaaradhifarms.com/cdn/shop/files/Honey1.png?v=1698854743&width=1000" alt="" width={"100%"} height={"100%"} /></div></div>
       <div className={styles.ProductDetailArea}>
        <p className={styles.CompanyName}>Vaaradhi Farms</p>
        <h2 className={styles.ProductName}>Natural Honey</h2>
        <p className={styles.stockCheck}><p><img src={correct} alt="" width={"20px"} height={"20px"}/></p> <p>In stock</p></p>
        <div className={styles.Price}>Rs. 900.00</div>
        <p className={styles.ReviewCount}> ⭐⭐⭐⭐⭐ 1886 reviews</p>
        <p className={styles.Rating}> ⭐ 4.5</p>
        <div className={styles.greyLine}></div>
        <div className={styles.wieghtButtonBox}> <WieghtButton /><WieghtButton /></div>
        <div className={styles.CartButton}>Add to cart</div>
        <p className={styles.Description}>{"Introducing Vaaradhi Farms Natural Honey! Experience the pure goodness of unfiltered and unpasteurized honey, that retains its rich flavor and nutritional benefits. Packed with vitamins, minerals, and antioxidants, our honey is a natural powerhouse.Whether enjoyed on toast, drizzled over yogurt, or used as a natural sweetener in your favorite recipes, our honey adds a touch of wholesome goodness to every bite.Taste the difference that comes from nature's own creation and experience the delight of this golden treasure today.Note : The thickness, color and taste will vary depending on season and flowering source available"}</p>
       </div>
    </main>
  ) 
}

export default ProductDetail
