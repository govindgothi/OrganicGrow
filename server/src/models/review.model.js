import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }, // Reference to the Product
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, 
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 }, // Rating out of 5
    comment: { 
        type: String, 
        required: true },
  },
  { 
    timestamps: true 
}
);

const Review = mongoose.model("Review", reviewSchema);

export {Review}