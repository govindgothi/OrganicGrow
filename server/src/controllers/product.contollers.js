import { Product } from "../models/product.models.js";
import { User } from "../models/user.models.js";

const addProduct = async(req,res)=>{
    try{
        const {productUser, productName,productCategory,productPrice, productDiscountedPrice, productThumbNailImage, productDetail, ProductStock,} =req.body
        if(!productUser  || !productName || !productCategory || !productPrice || !productDiscountedPrice || !productThumbNailImage || !productDetail || !ProductStock){
            return res.json("product detail is require")
        }
        const product = await Product.create({
            productUser,
            productName,
            productCategory,
            productPrice,
            productDiscountedPrice,
            productThumbNailImage,
            productDetail,
            ProductStock,
        })
        if(!product){
            return res.json("something is wrong in adding product")
        }
     return res.json(product)

    }catch{
        return res.json("something is missing via adding product deatil")
    }
}
const ShowProduct = async(req,res)=>{
    try{
        // const {productCategory}=req.body
        //console.log(productCategory)
        const product = await Product.find({ productUser: "672ce8d7948c587fdbd7978b"}).populate()
        if(!product){
            return res.json("product is not find")
        }
        return res.json(product);
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