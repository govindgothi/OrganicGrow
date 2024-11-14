import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const About = () => {
  return (
    <>
    <Header></Header>
    <div className='AboutBox'>
        <h1 className='AboutHeading'>About me</h1>
        <div className='myImageDiv'><img src="https://cdn.shopify.com/s/files/1/0748/0089/0143/files/IMG_6920_1_e6a364e0-449f-4f3d-b5c5-ec56df32cffd_480x480.heic?v=1717165608" alt="" /></div>
    </div>
    <Footer></Footer>
    </>)
}

export default About
