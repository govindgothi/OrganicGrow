import { User } from "../models/user.models.js";
import { Review } from "../models/review.model.js";
import { Product } from "../models/product.models.js";

// something is mistake in use of populate between route data modeling schema which thing need to be add

const addReview = async (req, res) => {
  try {
    const {productId, userId, rating, comment } = req.body;
      if( !productId || !userId || !rating || !comment ){
        return res.json("err")
      }
    const review = await Review.create({
      productId,
      userId,
      rating,
      comment,
    });
    if(!review){
        return res.json("something is wrong in creating review")
    }
    const addreview = await Product.findByIdAndUpdate(
      productId,
      { $push: { reviews: review._id } },
      { new: true }
    );
    if(!addreview){
      return res.json("something is wrong in adding review")
  }
    return res.json(addreview)

  } catch {
    return res.json("revier err")
  }
};


const showReview = async(req,res)=>{
     const review = await Review.findOne({product:'67315d9cfb20acbca94c3432'}).populate('product').populate({path: 'productUser',   strictPopulate: false , model: 'Product'})
     if(!review) return res.json("not rew")
        return res.json(review)
}
export {addReview,showReview}