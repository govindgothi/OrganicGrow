import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
 
  
const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}
  

  const registerUser = async(req,res,next)=>{
    try{
        const {username,email,password} = req.body
        if(!username || !email || !password){
            return next(new ApiError(400, "All fields (username, email, and password) are required.")); 
        }
        const existedUser = await User.findOne({email})
        // console.log(existedUser)
        if(existedUser){
            return next(new ApiError(301, "user is already register.")); 
        }
        const user = await User.create({
            username:username.toLowerCase(),
            email, 
            password,
        });
        const userset = await User.findById(user._id)
        if(!userset){
            return next(new ApiError(401, "error in registration.")); 
        }
        return res.json(userset)
    }catch{}
  }


 const loginUser = async (req,res,next)=>{
    try {
        const {email,password} =req.body
        if(!email || !password){
            return next(new ApiError(401, "credentials are missing.")); 
        }
        const existedUser = await User.findOne({email})
        if(!existedUser){
            return next(new ApiError(401, "user is not register.")); 
        }
        const isPasswordValid = await existedUser.isPasswordCorrect(password)
         console.log(isPasswordValid)
       if(isPasswordValid) return res.json("true");

       const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(existedUser._id)

       const loggedInUser = await User.findById(existedUser._id).select("-password -refreshToken")
       
       const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )


       
    } catch{
        
    }
 }

export { registerUser,loginUser}