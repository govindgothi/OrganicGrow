import React,{useEffect} from 'react'
import styles from "./Menu.module.css"
import { createPortal } from 'react-dom'
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation} from 'react-router-dom';

const Menu = ({isOpen, setIsOpen}) => {
      if(!isOpen) {
    console.log(isOpen)
        return null
     }
    //  const handleClick = (event) => {
    //                    // Stops the event from bubbling up
    //     event.preventDefault();  // Prevents the default action (optional)
    //     event.stopPropagation(); 
    //     console.log("Clicked without bubbling up!");
    //   };
    // some issue in this methode might be some change 
    //     const location = useLocation(); 
    //   console.log(location)
    //  useEffect(() => {
    //    setIsOpen(false); // Close popup whenever the route changes
    //  }, [location.key])

  return createPortal(<>
    {isOpen && (<div className={styles.MenuBox}>
      <div onClick={()=>setIsOpen(false)} className={styles.CloseButton} ><RxCross1 /></div>
      <div className={styles.MenuDiv} >
        <Link  to="/Home"  className='custom-link' ><h3 >Home</h3></Link>
       <Link to="/ProductFeature" className='custom-link' ><h3  >Shop Products</h3></Link>
        <h3 >FAQ</h3>
        <h3 >Contact</h3>
        <h3 >About Us</h3>
        <h3 >Track Your Order</h3>
      </div>
      <div>
      
      </div>
    </div>)}
    </>,
    document.getElementById('portal')
  )
}

export default Menu
