import { User } from "../models/userModel.js"
import bcrypt from "bcryptjs"

export async function signUP(req, res) {
    const { username, password } = req.body
    try {
        const hashpassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({
            username,
            password: hashpassword
        })
        res.status(201).json({
            status: "success",
            data: {
                newUser
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}

export async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'user not found'
            })
        }

        const isCorrect = await bcrypt.compare(password, user.password)

        if (isCorrect) {
            res.status(200).json({
                status: 'success'
            })
        } else {
            res.status(400).json({
                status: 'fail',
                message: 'incorrect username or password'
            })
        }
    } catch (e) {
        res.status(400).json({
            status: "fail"
        })
    }
}