import mongoose from "mongoose";

const connectDb = async() => {
    try {
        const URI = process.env.MONGO_URI

        await mongoose.connect(URI)
        console.log("Database Connected ");
    } catch (error) {
        console.log("Connection failed !!");
    }
}

export default connectDb;