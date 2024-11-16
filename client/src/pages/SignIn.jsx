import React from 'react'
import SignInForm from '../components/Forms/SignInForm'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const SignIn = () => {
  return (
    <>
    {/* <Header></Header> */}
    <SignInForm top={"50px"} right={"30rem"}></SignInForm>
    <div style={{width:"100%", height:'100vh'}}></div>
    {/* <Footer></Footer> */}
    </>
  )
}

export default SignIn
