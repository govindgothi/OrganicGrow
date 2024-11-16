import React,{useEffect} from 'react'
import styles from "./Menu.module.css"
import { createPortal } from 'react-dom'
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation} from 'react-router-dom';

const Menu = ({isOpen, setIsOpen}) => {

  // document.body.style.overflow = "";
      if(!isOpen) {
    console.log(isOpen)
        return null
     }
    //  document.body.style.overflow = "hidden";

  return createPortal(<>
    {isOpen && (<div className={styles.MenuBox}>
      <div onClick={()=>setIsOpen(false)} className={styles.CloseButton} ><RxCross1 /></div>
      <div className={styles.MenuDiv} >
        <Link  to="/Home"  className='custom-link' ><h3 >Home</h3></Link>
       <Link to="/ProductFeature" className='custom-link' ><h3  >Shop Products</h3></Link>
        <h3 >FAQ</h3>
        <Link to='/Contact' className='custom-link'><h3 >Contact</h3></Link>
        <Link className='custom-link' to='/About'><h3 >About Us</h3></Link>
        <Link className='custom-link' to='/UserDetail'><h3 >Your Account</h3></Link>
      </div>
      <div>
      
      </div>
    </div>)}
    </>,
    document.getElementById('portal')
  )
}

export default Menu
