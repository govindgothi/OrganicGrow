import { Router } from "express";

import { loginUser, registerUser } from "../controllers/users.controllers.js";
const router = Router()
// console.log(router)

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

export default router;