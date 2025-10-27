import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getPosts, getPost, createPost, updatePost, deletePost } from "../controllers/postController.js";
const router = express.Router();

router.route("/").get(getPosts).post(protect, createPost);
router.route("/:id").get(getPost).put(protect, updatePost).delete(protect, deletePost);

export default router;
