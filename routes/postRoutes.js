import express from "express"
import * as postController from "../controllers/postController.js"


// router object is like a mini application.
// this application will recieve all "/posts" paths and go from there.
export const router = express.Router()

router.route("/")
    .get(postController.getAllPosts)
    .post(postController.createPost)

router.route("/:id")
    .get(postController.getOnePost)
    .patch(postController.updatePost)
    .delete(postController.deletePost)

