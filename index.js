import express from "express"
import mongoose from 'mongoose'

const app = express()

mongoose
    .connect("mongodb://sample_user:sample_pass@learningdocker-mongo-1:27017/?authSource=admin") // mongodb://username:password@host:port/database?options...
    // I think mongodb is the protocol
    // Docker compose sets up a network with a dns  allowing you to connect to each container for a service by their service's name instead of their IP's. 
    // Networked service to service communication uses the container port, not the host port (ex: 3000:27017).
    .then(() => {
        console.log("successfully connected to DB")
    })
    .catch((e) => {
        console.log(e)
    })

app.get('/', (req, res) => {
    res.send("<h2>Hi There!!!</h2>")
})


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))