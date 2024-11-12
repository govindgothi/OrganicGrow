import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const custm = [
    "FAQ",
    "Shipping Policy",
    "Refund Policy",
    "Cancellation Policy",
    "Privacy Policy",
    "Terms of Service",
    "Contact Information",
    "Wild forest honey certificate",
    "Dark Forest Honey Certificate",
  ];
  return (
    <footer className={styles.FooterBox}>
      <div className={styles.BlogsDiv}><h2>Sign up to our newsletter</h2></div>
      <div className={styles.CustomerCareDiv}>
        <h2 className={styles.Customer}>Customer Care</h2>
        {custm.map((item, index) => (
          <li key={index} className={styles.li}>{item}</li>
        ))}
      </div>
      <div className={styles.ContactInfoDiv}>
        <h2 className={styles.Customer}>Customer Care</h2>
        {custm.map((item, index) => (
          <li key={index} className={styles.li}>{item}</li>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
