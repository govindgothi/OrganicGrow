import React from 'react'
import styles from "./CommentCard.module.css"
import { LuContact2 } from "react-icons/lu";
const CommentCard = () => {
  return (
    <div className={styles.CommentCardBox}>
      <div className={styles.YellowCommentLine}></div>
      <div className={styles.RatingDateDiv}>
        <h3>⭐⭐⭐⭐⭐</h3>
        <p>11/11/2024</p>
      </div>
      <div className={styles.UserDetail}>
        <div className={styles.UserIcon}><LuContact2 className={styles.Icon}/></div>
        <p>govind gothi</p>
      </div>
      <p className={styles.UserComment}>this product is valuable for health</p>
    </div>
  )
}

export default CommentCard
