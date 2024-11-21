import { Router } from "express";

import { addProduct,deletProduct,ShowProduct,updateProduct } from "../controllers/product.contollers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router()
// console.log(router)

router.route("/add").post(addProduct)
router.route("/delet").post(deletProduct)
router.route("/Show").get(ShowProduct)
router.route("/update").patch(updateProduct)

export default router;