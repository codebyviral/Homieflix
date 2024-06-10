import express from "express"
import { router } from './router/auth-router.js'
import cors from "cors"
const app = express();

app.use(express.json())

app.use(cors())

app.use("/", router)

app.use("/api/auth", router)


const PORT = process.env.port || 4000;

app.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}`);
})