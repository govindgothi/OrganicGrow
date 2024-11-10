import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className={styles.CategoriesBox}>
       <ul>
        <Link to="/ProductCategories" className="link" ><li>Ghee</li></Link>
        <Link to="/ProductCategories" className="link"><li>Oil</li></Link>
        <Link to="/ProductCategories" className="link"><li>VermiCompost</li></Link>
        <Link to="/ProductCategories" className="link"><li>Manure</li></Link>
        <Link to="/ProductCategories" className="link"><li>PeanutButter</li></Link>
        <Link to="/ProductCategories" className="link"><li>Merchendise</li></Link>
       </ul>
    </div>
  )
}

export { Categories}
