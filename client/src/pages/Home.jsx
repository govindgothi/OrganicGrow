import React from 'react'
import Header from '../components/Header/Header.jsx'
import OfferHead from '../components/Header/OfferHead'
import ShowProductCard from '../components/ProductCart/ShowProductCard.jsx'
import FrontDisplayProduct from '../components/ProductCart/FrontDisplayProduct.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ProductInfo from '../components/ProductInfo/ProductInfo.jsx'
import Pure from '../components/ProductInfo/Pure.jsx'
import { useSelector } from 'react-redux'
import { useGetProductQuery } from '../store/Slices/ApiSlice.js'
import { CiCircleChevRight } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  //  const data = useSelector((state)=>(state.product))
   const {data,isLoading,isError} = useGetProductQuery()
    console.log(data)
  return (
    
    <div>
      <OfferHead></OfferHead>
      <Header></Header>
      <div> 
        <FrontDisplayProduct></FrontDisplayProduct>
        <div className='Loved-product-div'><h1 className='Loved-product-heading'>Most Loved Product</h1> <div className='View-product-box'><p className='View-text'>View All</p> <MdOutlineKeyboardArrowRight className='View-icon'/></div></div>
       <div className='HomePageBox'>   {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : isError ? (
            <p className="text-center">
              {"Something went wrong"}
            </p>
          ) : (
            data.map((product) => (
              <ShowProductCard
                id={product._id}
                key={product._id}
                productName={product.productName}
                price={product.productPrice}
                imageUrl={product.productImageUrl}
              />
            ))
          )}</div>
       <div className='info'><ProductInfo /><ProductInfo /><ProductInfo /></div>
       <div className='CowImageDiv'><img src="https://vaaradhifarms.com/cdn/shop/files/midjourneyexpert_white_indian_desi_cow_standing_next_to_a_small_26e9dd34-2704-41bc-8611-96d3fc2fd338.png?v=1690866620&width=1400" alt="" width={"100%"} height={"100%"}/></div>
       </div>
       <Pure></Pure>
       <Footer />
    </div>
    
  )
}

export default Home

/*

                        _id={item._id}
                        imageUrl={item.imageUrl}
                        productName={item.productName}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                        freeDelivery={freeDelivery}
                        InStock={item.InStock} 

*/ 
    // <ShowProductCard  id={_id}
        //                   imageUrl={productImageUrl}
        //                   price={productPrice}
        //                   productName={productName}
        //                   />