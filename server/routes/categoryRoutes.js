import express from "express";
import { getCategories, createCategory } from "../controllers/categoryController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getCategories).post(protect, createCategory);

export default router;
