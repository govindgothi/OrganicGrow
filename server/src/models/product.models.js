import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productName: {
      type: String,
      // required: true,
    },
    productImageUrl: {
      type: String,
      // required: true,
    },
    productMultipleImage: [
      {
        type: String,
      },
    ],
    productPackageSize: [
      {
        type: String,
      },
    ],
    productDescription: [
      {
        type: String,
      },
    ],
    productPrice: {
      type: Number,
    },
    discountedPercentage: {
      type: Number,
    },
    deliveryTpe: [
      {
        type: String,
      },
    ],
    isFreeDelivery: {
      type: Boolean,
      // required: true,
    },
    InStock: {
      type: Number,
    },
    reviews:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      }
    ]
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export { Product };


