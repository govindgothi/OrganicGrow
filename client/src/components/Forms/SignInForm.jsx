import React from 'react'
import { createPortal } from 'react-dom'
import styles from "./Form.module.css"
// import styles from "./Form.module.css"
import LogoVarradhiFarm from "../../assets/LogoVarradhiFarm.png"
// import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";

const SignInForm = ({top,right}) => {
  // if(!isSignOpen) return null
  return (
    <div className={`${styles.LoginFormBox}`}  style={{
      position: 'absolute',
      top: top,
      left: right,
      boxShadow:"0px 0px 12px grey",
      // backgroundColor: 'orange',
      // color: 'white',
    }}>
      <Link to='/'> <div className={styles.CloseButton} ><RxCross1 /></div></Link>
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
        <button>signIn</button>
        {/* <Link><h3 className={styles.SignInButton} >Login</h3></Link> */}
      </div>
    </div>
  )
}

export default SignInForm
