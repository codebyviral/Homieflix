import express from "express"
import { router } from './router/auth-router.js'
import { connectDb } from "./db.js";
import cors from "cors"
import { errorMiddleWare } from "./middleware/error-middleware.js";
import contactRoute from "./router/contact-router.js"
import Razorpay from "razorpay"
import crypto from "crypto"

const app = express();

// handling CORS policy use
const corsOptions = {
    origin: "https://homieflix.vercel.app",
    method: "GET, POST, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
app.use(errorMiddleWare)

app.use("/", router)

app.use("/api/auth", router)
app.use("/api/form", contactRoute)

const PORT = 4000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Homieflix is live at  http://localhost:${PORT} 🎉`);
    })
})

