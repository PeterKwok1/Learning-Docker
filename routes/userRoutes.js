import express from "express"
import * as authController from "../controllers/authController.js"

export const router = express.Router()

router.route("/signup")
    .post(authController.signUP)

router.route("/login")
    .post(authController.login)