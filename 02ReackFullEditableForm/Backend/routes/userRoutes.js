import express from "express"
import { loginUser, registerUser, updateProfile } from "../controller/userController.js";
import { upload } from "../middleware/upload.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.post("/profile", upload.single("photo"), updateProfile)

export default userRouter;