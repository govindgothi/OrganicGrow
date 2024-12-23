import React from "react";
import styles from "./ProductDetail.module.css";
import correct from "../../assets/correct.png";
import WieghtButton from "../Buttons/WieghtButton";
// import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Slices/cartSlice";
import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const { productImageUrl, productName, _id } = product.data;
  // console.log(data)
  return (
    <main className={styles.ProductDetailBox}>
      <div className={styles.ProductImageArea}>
        <div className={styles.ImageDiv}>
          <img src={productImageUrl} alt="" width={"100%"} height={"100%"} />
        </div>
      </div>
      <div className={styles.ProductDetailArea}>
        <p className={styles.CompanyName}>Vaaradhi Farms</p>
        <h2 className={styles.ProductName}>{productName}</h2>
        <p className={styles.stockCheck}>
          <p>
            <img src={correct} alt="" width={"20px"} height={"20px"} />
          </p>{" "}
          <p>In stock</p>
        </p>
        <div className={styles.Price}>Rs. 900.00</div>
        <p className={styles.ReviewCount}> ⭐⭐⭐⭐⭐ 1886 reviews</p>
        <p className={styles.Rating}> ⭐ 4.5</p>
        <div className={styles.greyLine}></div>
        <div className={styles.wieghtButtonBox}>
          {" "}
          <WieghtButton />
          <WieghtButton />
        </div>
        <div className={styles.Quantity_Box}>
          <p className={styles.Quantity_Text}>Quantity</p>
          <div className={styles.Math_Button}><HiMiniMinus className={styles.MinusIcon}/><p className={styles.QuantityCount}>2</p><GoPlus className={styles.PlusIcon}/></div>
        </div>
        {/* {_id,imageUrl,productName,price} */}
        <div
          className={styles.CartButton}
          onClick={() =>
            dispatch(
              addToCart({ _id, productImageUrl, productName, productPrice })
            )
          }
        >
          Add to cart
        </div>
        <p className={styles.Description}>
          {
            "Introducing Vaaradhi Farms Natural Honey! Experience the pure goodness of unfiltered and unpasteurized honey, that retains its rich flavor and nutritional benefits. Packed with vitamins, minerals, and antioxidants, our honey is a natural powerhouse.Whether enjoyed on toast, drizzled over yogurt, or used as a natural sweetener in your favorite recipes, our honey adds a touch of wholesome goodness to every bite.Taste the difference that comes from nature's own creation and experience the delight of this golden treasure today.Note : The thickness, color and taste will vary depending on season and flowering source available"
          }
        </p>
      </div>
    </main>
  );
};

export default ProductDetail;
