import React from 'react'
import styles from "./Footer.module.css"
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <FaInstagram className={styles.Icon} />
    </footer>
  )
}

export { Footer}
