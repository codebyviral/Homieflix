import express from "express"
import { router } from './router/auth-router.js'
import { connectDb } from "./db.js";
import cors from "cors"
import { errorMiddleWare } from "./middleware/error-middleware.js";
import contactRoute from "./router/contact-router.js"
const app = express();

// handling CORS policy use
const corsOptions = {
    origin: "https://homieflix.onrender.com",
    method: "GET, POST, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(cors())
app.use(errorMiddleWare)

app.use("/", router)

app.use("/api/auth", router)
app.use("/api/form", contactRoute)

const PORT = 4000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server at http://localhost:${PORT}`);
    })
})

