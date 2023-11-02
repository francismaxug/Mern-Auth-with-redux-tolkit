import express from "express";
import { customError } from "./middleware/customError.js"
export const app = express();
import cookieParser from "cookie-parser";
import { connectdb } from "./config/db.js";
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
import user from "./routes/userRoutes.js"
connectdb()
app.use(cookieParser())
app.use("/api/users", user)
app.use(customError)
