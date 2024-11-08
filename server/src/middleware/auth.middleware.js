import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js";

export const verifyJWT = async(req, res, next) => {
    try {
        const token = req.body.cookies //?.accessToken // take token from web to saved cookie 
        
         console.log(token);
        if (!token) {
            return res.json(new ApiError(401, "Unauthorized request"))
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) // verify and match the token from .env
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
         // select means send user detail without  saved  "-password -refreshToken"
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
          
         req.user = user;
         //  console.log(req.user) 
        next() // and calling for next to execute 
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
}