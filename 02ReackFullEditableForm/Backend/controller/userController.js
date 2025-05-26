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
    res.json({ ...user._doc, token,success:true });
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
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      return res.json({ ...user._doc, token, success:true });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const getProfile = async(req,res) =>{
    try {
       const userId = req.user?.id; 
        if (!userId) throw new Error("User ID not found from token");

        const userData = await userModel.findById(userId).select('-password');
        console.log("userData::::", userData);

        res.json({ success: true, userData });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { email, name } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;

    console.log("req.file", req.file)

    
    if (req.file) {
      updateData.photo = `/uploads/${req.file.filename}`;
    }

    await userModel.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');

    console.log(updateData);

    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    console.error("Profile update error:", error.message);
    res.status(500).json({ message: 'Profile update failed', error: error.message });
  }
};



