import React from 'react'
import Header from '../components/Header/Header.jsx'
import OfferHead from '../components/Header/OfferHead'
import ProductDetail from '../components/ProductCart/ProductDetail.jsx'
import ShowProductCard from '../components/ProductCart/ShowProductCard.jsx'
import FrontDisplayProduct from '../components/ProductCart/FrontDisplayProduct.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div>
      <OfferHead></OfferHead>
      <Header></Header>
      <div> 
        <FrontDisplayProduct></FrontDisplayProduct>
       <div className='HomePageBox'><ShowProductCard /><ShowProductCard /> <ShowProductCard /><ShowProductCard /> <ShowProductCard /><ShowProductCard /> <ShowProductCard />  <ShowProductCard /> <ShowProductCard /><ShowProductCard /></div>
       <div className='CowImageDiv'><img src="https://vaaradhifarms.com/cdn/shop/files/midjourneyexpert_white_indian_desi_cow_standing_next_to_a_small_26e9dd34-2704-41bc-8611-96d3fc2fd338.png?v=1690866620&width=1400" alt="" width={"100%"} height={"100%"}/></div>
       </div>
       <Footer />
    </div>
    
  )
}

export default Home
