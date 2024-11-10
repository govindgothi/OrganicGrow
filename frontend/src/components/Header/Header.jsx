import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo1 from "../../assets/logo1.png";
import fistlogo from "../../assets/fistlogo.jpg";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignUpForm } from "../RegistrationForm/SignUpForm";
const Header = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpen = () =>{
    if(openSignUp===true){
      setOpenSignUp(false)
    }
    if(openSignUp===false){
      setOpenSignUp(true)
    }
  };
  const handleClose = () => setOpenSignUp(false);

//   return (
//     <div>
//       <button onClick={handleOpen}>Open Sign Up Form</button>
//       <SignUpForm openSignUp={openSignUp} handleClose={handleClose} />
//     </div>
//   );
// };




   
      return (
        <>
          {/* Header content */}
          <header className={styles.Header}>
            <div className={styles.LogoBox}>
              <img src={fistlogo} alt="Logo" width="100%" height="100%" />
            </div>
            <nav className={styles.Navbar}>
              <ul>
                <Link to={"/Home"} className="link"><li >Home</li></Link>
                <li>About</li>
                <li>Services</li>
                <li >Contact</li>
              </ul>
            </nav>
            <div className={styles.InputBox}>
              <input type="text" placeholder="Search" />
            </div>
            <div className={styles.CartArea}>
              <h3 onClick={handleOpen} className={styles.UserName}>ghanshyam</h3>
              <Link to="/Cart" className={styles.customlink}>
                <h2 className={styles.CartIcon}>
                  <div>
                    <BsCartFill className={styles.icon} />
                  </div>
                  <h5 className={styles.ItemNumber}>5</h5>
                </h2>
              </Link>
            </div>
          </header>
    
          {/* Place SignUpForm outside of header, to avoid layout issues */}
          <SignUpForm openSignUp={openSignUp} handleClose={handleClose} />
        </>
  );
};

export { Header }
