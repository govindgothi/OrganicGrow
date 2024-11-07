import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
      required: [true, "Password is required"],
    },
    contact: {
      type: Number,
      trim: true,
      maxlength: 10,
    },
    address: [
      {
        type: String,
        maxlength: 100,
      },
    ],
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      // default: 'Other',
    }
},
  {
    timestamps: true,
  }
)


userSchema.pre("save", async function (next) {
    console.log(this.isModified("password"))
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    console.log(this.password)
    console.log(password)
    return await bcrypt.compare(password, this.password)
};
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User", userSchema);
export { User };
