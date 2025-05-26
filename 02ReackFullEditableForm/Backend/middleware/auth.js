import jwt from "jsonwebtoken"

const authUser = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("::",token);

    if(!token){
        return res.status(401).json({success:false, message:"Not Authorized Login"})
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decode::",decode);
         req.user = { id: decode._id };
        next();
    } catch (error) {
        res.status(400).json({success:false, message:error.message || "Invalid token !"})
    }
}

export default authUser;