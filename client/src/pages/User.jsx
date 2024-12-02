import React from 'react'
import { UserAccount } from '../components/UserAcoount/UserAccount'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
     <Header></Header>
     <UserAccount></UserAccount>
     {/* <Outlet></Outlet> */}
     <Footer></Footer>
    </>
  )
}

export default User
