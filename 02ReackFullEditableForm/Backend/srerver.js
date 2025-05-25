import express from "express";
import 'dotenv/config';
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import connectDb from "./config/db.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter)


const PORT = 5000
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`)
    })
})
