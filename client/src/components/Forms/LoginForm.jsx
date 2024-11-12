import React from 'react'
import styles from "./Form.module.css"
import LogoVarradhiFarm from "../../assets/LogoVarradhiFarm.png"
import { createPortal } from 'react-dom'
const LoginForm = ({setLoginOpen , loginOpen}) => {
  if(!loginOpen) return null

  return createPortal(
    <div className={styles.LoginFormBox}>
      <div className={styles.ImageDiv}><img src={LogoVarradhiFarm} alt="" width={"100%"} height={"100%"} /></div>
    </div>,
    document.getElementById('login')
  )
}

export default LoginForm
