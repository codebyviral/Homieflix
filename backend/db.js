import mongoose from "mongoose";

import {} from "dotenv/config"


const mongo_uri = process.env.MONGODB_URI

const connectDb = async () => {
    try {
        await mongoose.connect(mongo_uri)
        console.log(`DB connection successful`)
    } catch (error) {
        console.log(`DB connection failed ${error}`)
        process.exit(0)
    }
}

export { connectDb }