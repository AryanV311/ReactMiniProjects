import jwt from "jsonwebtoken"

const authUser = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({success:false, message:"No token provided"})
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode;
        next();
    } catch (error) {
        res.status(400).json({success:false, message:error.message || "Invalid token !"})
    }
}

export default authUser;