import express from "express";
import { createPost, getPosts, getPostById, getPostForUser, deletePostById, updatePostById } from "../controllers/postController.js";
const router = express.Router();

router.use( express.json());

router.get('/', getPosts);

router.get('/:userId', getPostForUser);

router.get('/:id', getPostById);

router.post('/', createPost);

router.put('/:id', updatePostById);

router.delete('/:userId/:postId', deletePostById);

export default router;