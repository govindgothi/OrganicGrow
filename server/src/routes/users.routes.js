import { Router } from "express";

import { loginUser, logoutUser, registerUser } from "../controllers/users.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router()
// console.log(router)

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser)

export default router;