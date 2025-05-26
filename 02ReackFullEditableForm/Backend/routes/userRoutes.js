import express from "express"
import { getProfile, loginUser, registerUser, updateProfile } from "../controller/userController.js";
import { upload } from "../middleware/upload.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.post("/update-profile",authUser, upload.single('photo'), updateProfile)
userRouter.get("/get-profile", authUser, getProfile)

export default userRouter;