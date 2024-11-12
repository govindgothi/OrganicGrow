import { Router } from "express";
import { addReview, showReview } from "../controllers/review.controllers.js";

const router = Router()

router.route("/add").post(addReview)
router.route("/show").post(showReview)
export default router