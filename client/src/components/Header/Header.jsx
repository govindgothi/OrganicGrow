import React from 'react'
import {useState} from "react"
import styles from "./Header.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import LogoVarradhiFarm from "../../assets/LogoVarradhiFarm.png";
import Menu from '../PopupCard/Menu';
import LoginForm from '../Forms/LoginForm';
import SignInForm from '../Forms/SignInForm';



const Header = () => {
    const [login,setLogin] =  useState(false)
    const [input,setInput] = useState(true)
    const [isOpen,setIsOpen]=useState(false)
    const [loginOpen, setLoginOpen]=useState(false)
    // const overlay = document.getElementById('overlay');
    const handleOpen = () =>{
        if(isOpen===true){
          
          setIsOpen(false)
          
        }
        if(isOpen===false){
          setIsOpen(true)
        }
    }
  

    const handleLogin = ()=>{
        if(loginOpen===true){
            setLoginOpen(false)
           
            
          }
          if(loginOpen===false){
            setLoginOpen(true)
          }
    }

  return (<>
    <header className={styles.HeaderBox}>
        <div onClick={handleOpen} className={styles.HambergMenu}><MdMenu className={styles.HambergMenuIcon}/> </div>
        <div className={styles.Logo}><img src={LogoVarradhiFarm} alt="" width={"100%"} height={"100%"}/></div>
        <div className={styles.MenuDiv}>
            {input ? <div className={styles.SearchIconDiv}><IoSearch className={styles.SearchIcon} /></div>: <div className={styles.InputDiv}><input type="text" placeholder='' className={styles.Input} /></div>}
            <Link className='custom-link' to='/Cart'><div className={styles.ShoppingCartDiv}><FaShoppingCart className={styles.ShoppingCartIcon}/></div></Link>
            {login ? <div className={styles.userName}>Ghanshyam</div> : <div onClick={handleLogin} className={styles.userName}>Login</div>}   
        </div>
    </header>
    {isOpen && <div className="overlay" ></div>}
    {loginOpen && <div className="overlay" ></div>}
    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    <LoginForm loginOpen={loginOpen} setLoginOpen={setLoginOpen}/>
    </> )
}

export default Header