import express from "express"
import mongoose from 'mongoose'
import config from "./config/config.js"
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = config
import { router as postRouter } from "./routes/postRoutes.js"
import { router as userRouter } from "./routes/userRoutes.js"
import RedisStore from "connect-redis"
import session from "express-session"
import { createClient } from "redis"

let redisClient = createClient()
redisClient.connect().catch(console.error)

let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:"
})

app.use(
    session({
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        secret: "keyboard cat",
    })
)


const app = express()

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
// mongodb://username:password@host:port/database?options...
// I think mongodb is the protocol
// Docker compose sets up a network with a dns  allowing you to connect to each container for a service by their service's name instead of their IP's. 
// Networked service to service communication uses the container port, not the host port (ex: 3000:27017).

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL)
        .then(() => {
            console.log("successfully connected to DB")
        })
        .catch((e) => {
            console.log(e)
            setTimeout(connectWithRetry, 5000) // in case we try to connect to the database before it is ready.
        })
}

connectWithRetry()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h2>Hi There!!!</h2>")
})

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))