import express from "express";
import { authUser, registerUser, updateUserProfile, logOutUser, getUserProfile } from "../controller/userController.js";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";
router.route('/auth').post(authUser);
router.route('/logout').post(logOutUser);
router.route('/register').post(registerUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router
