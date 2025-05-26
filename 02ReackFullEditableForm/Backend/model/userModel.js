import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, unique:true},
    password:{type:String, required:true},
    photo:{type:String, default:""}
})

const userModel = mongoose.model("User", userSchema)

export default userModel;