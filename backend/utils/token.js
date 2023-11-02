import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken"
export const generateToken = (res, payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" })
  console.log(token)
  res.cookie("jwt", token,
    {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
}