import React from 'react'
import styles from "./Form.module.css"
import LogoVarradhiFarm from "../../assets/LogoVarradhiFarm.png"
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
const LoginForm = ({setLoginOpen , loginOpen}) => {
  // document.body.style.overflow = "";
  if(!loginOpen) return null
  // document.body.style.overflow = "hidden";
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
        <button>Login</button>
        <Link><h3 className={styles.SignInButton} onClick={()=>setLoginOpen(false)}>signIn</h3></Link>
      </div>
    </div>,
    document.getElementById('login')
  )
}

export default LoginForm

/*
 <div className={styles.ImageDiv}>
        <div className={styles.Image}><img src={LogoVarradhiFarm} alt="" width={"100%"} height={"100%"} /></div>
      </div>
      <div className={styles.InputDiv}>
        <div className={styles.login}>
          <h3>Login</h3>
          <h4>enter your email or password for login</h4>
        </div>
         <div className={styles.EmailDiv}>
          <input type="text" placeholder=' search product ' className={styles.InputEmail}/>
         </div>
        <div className={styles.PasswordDiv}>
          <input type="password"  placeholder='password' className={styles.InputPassword}/>
        </div>
         <button>Login</button>
      </div>
*/ 