import { Product } from "../models/product.models.js";
import { User } from "../models/user.models.js";

const addProduct = async(req,res)=>{
    try{
        const {productOwner,  productName,  productImageUrl,  productMultipleImage,  productPackageSize,  productDescription,  productPrice,  discountedPercentage,  deliveryTpe,  isFreeDelivery,  InStock} = req.body
        // if(productOwner || productName || productImageUrl || productMultipleImage || productPackageSize || productDescription || productPrice || discountedPercentage || deliveryTpe || isFreeDelivery || InStock){  
            // return res.json("product detail is require")
        // }
        const product = await Product.create({
            productOwner :"672ce8d7948c587fdbd7978b",
            productName,
            productImageUrl,
            productMultipleImage,
            productPackageSize,
            productDescription,
            productPrice,
            discountedPercentage,
            deliveryTpe,
            isFreeDelivery,
            InStock,
        })
        console.log(product)
        if(!product){
            return res.json("something is wrong in adding product")
        }
        const addproduct = await User.findByIdAndUpdate("672ce8d7948c587fdbd7978b",
            { $push: { ourProduct: product._id } },
            { new: true })
     return res.json(product)

    }catch{
        return res.json("something is missing via adding product deatil")
    }
}
const ShowProduct = async(req,res)=>{
    try{
        // const {productCategory}=req.body
        //console.log(productCategory)672ce8d7948c587fdbd7978b
       
        const products = await User.findById("672ce8d7948c587fdbd7978b").populate({
            path: "ourProduct", // The field in the Product model referencing User
            populate:{
                  path:"reviews"
            } // The Product model
          });
        
        console.log(products)
        if(!products){
            return res.json("product is not find")
        }
        // console.log(products)
        return res.json(products);
    }catch{
        return res.json("somethng is wrong with searching of product")
    }
}
const deletProduct = async(req,res)=>{
    try{
    const {_id} = req.body
    if(!_id){
        return res.json("Id is not found of this product")
    }
    const result = await collection.deleteOne({_id});
    if(!result){
        return res.json("something is error in product deletion")
    }
}catch{
    return res.json("something is wrong in product deletion")
}
}

const updateProduct = async(req,res)=>{
    try{
        const {_id,productName,productCategory,productPrice,productImage,productDetail} = req.body
        // const result = await Product.find({_id})
         //return res.json(result)
         const result = await Product.updateOne({_id}, { $set: { productPrice:productPrice} } );
         console.log(result) 
         if(!result.modifiedCount===1) {
            return res.json("poduct not update")
          }
          return res.json("product update")
    }catch{
        return res.json("something is wrong in product updatation")
    }
}

export {addProduct,ShowProduct,deletProduct,updateProduct}