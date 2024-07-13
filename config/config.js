export default {
    MONGO_IP: process.env.MONGO_IP || "mongo",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD
}
// This was optional. I think I prefer just using the .env file.
// You do not need dotenv since docker makes environment variables available. 