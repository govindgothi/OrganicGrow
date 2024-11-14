import React from 'react'
import { createPortal } from 'react-dom'
import styles from "./Form.module.css"
const SignInForm = () => {
  return createPortal(
    <div className={styles.LoginFormBox}>
      <div className={styles.ImageDiv}><img src={LogoVarradhiFarm} alt="" className={styles.Image} /></div>
      <div className={styles.LoginWordBox}>
        <h3>Login</h3>
        <h4>Enter your email and password for login in varradhi farm to access features</h4>
      </div>
      <div className={styles.InputDiv}>
        <div className={styles.EmailBox}>
          <input type="text" placeholder="email" className={styles.EmailInput}/>
          <p className={styles.err}>Error</p>
        </div>
        <div className={styles.PasswordBox}>
          <input type="text" placeholder=" password" className={styles.PasswordInput}/>
          <p className={styles.err}>Error</p>
        </div>
        <div className={styles.PasswordBox}>
          <input type="text" placeholder=" password" className={styles.PasswordInput}/>
          <p className={styles.err}>Error</p>
        </div>
        <button>SignIn</button>
        <Link><h3 className={styles.SignInButton} onClick={()=>setLoginOpen(false)}>Login</h3></Link>
      </div>
    </div>,
    document.getElementById('login')
  )
}

export default SignInForm
