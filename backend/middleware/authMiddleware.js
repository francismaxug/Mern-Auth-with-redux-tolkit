import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
import appError from "../utils/appError.js";

const protect = async (req, res, next) => {
  let token
  try {
    token = req.cookies.jwt
    console.log(token)
    if (!token) {
      throw new appError("Invalid authorization", 404)
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.user).select("-password")

    if (!user) {
      throw new appError("no user found, token invalid", 404)
    }
    req.user = user
    next()

  } catch (error) {
    res.status(404).json({ status: "failed", message: "no token provided" })
  }
}
export { protect }
