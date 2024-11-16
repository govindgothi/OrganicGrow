import React, { useState } from 'react'
import styles from "./Form.module.css"
import LogoVarradhiFarm from "../../assets/LogoVarradhiFarm.png"
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import SignInForm from './SignInForm'
import { RxCross1 } from "react-icons/rx";
// import { setIsSignOpen } from '../Header/Header'
const LoginForm = ({setLoginOpen , loginOpen}) => {
  // const [isSignOpen,setIsSignOpen] = useState(false)
  // document.body.style.overflow = "";
  if(!loginOpen) return null
  // document.body.style.overflow = "hidden";
  const handleopen =(e)=>{
    // setIsSignOpen(true)
    setLoginOpen(false)
   
  }

  return createPortal(<>
    <div className={styles.LoginFormBox}>
    <div onClick={()=>setLoginOpen(false)} className={styles.CloseButton} ><RxCross1 /></div>
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
        <Link to='/Home' className='custom-link'> <button onClick={()=>setLoginOpen(false)}>Login</button></Link>
        <Link to='/SignIn'><h3 className={styles.SignInButton}  onClick={()=>setLoginOpen(false)}>signIn</h3></Link>
      </div>
    </div>
     </> ,
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