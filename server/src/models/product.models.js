import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  productUser:{
      type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
  },
  productName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    maxlength: 50,
  },
  productCategory: {
    type: String,
     enum: ['Ghee', 'Merchendise', 'Manure', 'Oil', 'VermiCompost'],
  },
  productPrice: {
    type: Number,
    required: true,
    min: 0,
    trim: true,
  },

  productThumbNailImage:{
      type: String,
      required: true,
    },
  productDetail:{
    type: String,
      required: true,
  },
  ProductStock:{
    type:Number,
    required:true
  },
  reviews: [
    { 
      type: mongoose.Schema.Types.ObjectId,
       ref: 'Review'
       }
  ]
},{ timestamps: true });

const Product = mongoose.model("Product", productSchema);
export {Product}

/*
#JioTv #streams #IndvsSa #fullstackwebdeveloper  

Recently I watched India vs South Africa match, you also watched. I noticed when the matches are played outside India in Australia, England then the quality of live match is very clear but in India its quality is very poor.



India is the hub of IT (software)

But the performance of our live streaming platform is very low.

We need to solve this type of problem.

We cannot afford at a time when India's economy is emerging

And when we are in the pillar sector of IT
*/ 