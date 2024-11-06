import React, { useState } from "react";
import styles from "./Header.module.css";
import logo1 from "../../assets/logo1.png";
import fistlogo from "../../assets/fistlogo.jpg";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
    const [login , setLogin]=useState(true)
  return (
    <header className={styles.Header}>
      <div className={styles.LogoBox}>
        <img src={fistlogo} alt="" width={"100%"} height={"100%"} />
      </div>
      <nav className={styles.Navbar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={styles.InputBox}><input type="text" placeholder="search"/></div>
      <div className={styles.CartArea}>
        <h3 className={styles.UserName}>ghanshyam</h3>
       <Link  to="/Cart" className={styles.customlink}><h2 className={styles.CartIcon}><div><BsCartFill className={styles.icon}/></div><h5 className={styles.ItemNumber}>5</h5></h2></Link>
      </div>
    </header>
  );
};

export { Header };
