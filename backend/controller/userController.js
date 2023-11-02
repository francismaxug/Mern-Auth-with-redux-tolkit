import appError from "../utils/appError.js"
import User from "../model/userModel.js"
import { generateToken } from "../utils/token.js"
export const authUser = async (req, res, next) => {
  const { email, password } = req.body
  const userExist = await User.findOne({ email })
  try {
    if (!userExist) {
      throw new appError("user not found", 404)
    }
    const isPassword = await userExist.comparePasswords(password)
    if (!isPassword) {
      throw new appError("invalid credentials", 400)
    }
    const payload = {
      user: userExist._id,
    }
    generateToken(res, payload)
    res.status(200).json({ status: { id: userExist._id, name: userExist.name, email: userExist.email }, message: "wellcome" })
  } catch (error) {
    next(error)
  }
}

export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  try {
    if (user) {
      throw new appError("User already exist", 404)
    }

    const newUser = new User({
      name,
      email,
      password,
    })
    const payload = {
      user: newUser._id,
    }

    generateToken(res, payload)
    const results = await newUser.save()
    console.log(results);
    res.status(200).json({
      status: {
        id: results._id,
        email: results.email,
        name: results.name
      },
      message: "welcome"
    })
  } catch (error) {
    next(error)
  }

}

export const logOutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({ message: "user logged out" })

}

export const getUserProfile = async (req, res, next) => {
  try {
    const user = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    }
    if (!user) {
      throw new appError("User not found", 404)
    }
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }


}

export const updateUserProfile = async (req, res, next) => {
  const { name, email, password } = req.body
  try {
    const user = await User.findById(req.user._id)
    if (!user) {
      throw new appError("User not found", 404)
    }
    user.name = name || user.name
    user.email = email || user.email
    if (password) {
      user.password = password
    }
    const userSave = await user.save()
    console.log(userSave)
    res.status(200).json({
      status:
      {
        id: userSave._id,
        name: userSave.name,
        email: userSave.email
      },
      message: "user details updated"
    })
  } catch (error) {
    next(error)
  }


}