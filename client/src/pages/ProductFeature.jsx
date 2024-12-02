import React, { useEffect, useState } from 'react';
import OfferHead from '../components/Header/OfferHead';
import Header from '../components/Header/Header';
import ProductDetail from '../components/ProductCart/ProductDetail';
import CommentCard from '../components/CommentCards/CommentCard';
import Footer from '../components/Footer/Footer';
import { useGetProductByIdMutation } from '../store/Slices/ApiSlice';
import { useParams } from 'react-router-dom';

const ProductFeature = () => {
  const { id } = useParams();  // Destructure _id from useParams
  const [product, setProduct] = useState(null); // State to store product data
  // console.log(id)
 
  const [getProductById] = useGetProductByIdMutation();  // Hook for the mutation

  // Use useEffect to make the API call when the component mounts or _id changes
  useEffect(() => {
    if (id) {
      getProductById(id) // Fetch product by ID
        .then(response => {
          setProduct(response);  // Set the fetched product in state
        })
        .catch(err => {
          console.error('Error fetching product:', err);
        });
    }
  }, [id, getProductById]); // Dependency array: re-run the effect when _id or getProductById changes

  if (!product) {
    return <div>Loading...</div>;  // Show a loading message while the product is being fetched
  }
//  console.log(product.productName)

  return (
    <>
      <OfferHead />
      <Header />
      <ProductDetail product={product} />  {/* Pass product as a prop */}
      <CommentCard />
      <Footer />
    </>
  );
}

export default ProductFeature;
