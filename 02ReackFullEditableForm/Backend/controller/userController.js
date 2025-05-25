import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing details !" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email!" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be atleast 8 characters",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      res.json({ success: false, message: "User already exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassowrd = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashPassowrd,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ ...user._doc, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist !!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.json({ success: false, message: "Invalid credentials" });
    }

    if (isMatch) {
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      return res.json({ ...user._doc, token });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { email, name } = req.body;

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;

    if (req.file) {
      updateData.photo = `/uploads/${req.file.filename}`;
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      userData,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = req.headers.authorization?.split(" ")[1];

    res.json({ ...updatedUser._doc, token });
  } catch (error) {
    console.error("Profile update error:", error.message);
    res.status(500).json({ message: 'Profile update failed', error: error.message });
  }
};
