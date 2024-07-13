import { Post } from "../models/postModels";

export async function getAllPosts(req, res, next) {
    try {
        const posts = await Post.find()
        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}

export async function getOnePost(req, res, next) {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}

export async function createPost(req, res, next) {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}

export async function updatePost(req, res, next) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}

export async function deletePost(req, res, next) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success"
        })
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}
