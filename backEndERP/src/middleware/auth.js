import  jwt  from 'jsonwebtoken';
import * as userModel from "../DB/model/user/user.model.js";

export const auth = async (req,res,next)=>{
  try {
    const {authorization} = req.headers
    if (!authorization?.startsWith("Bearer")) {
      return res.status(400).json({ message: "In-valid Bearer key" });
    }
    const token = authorization.split(" ")[1]
if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const decoded = jwt.verify(token,"NexusSecretKey")
    const user = await userModel.findUserById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    if (user.is_active == false) {
      return res.status(401).json({ message: "User is deleted or inactive" })
    }
    req.user = decoded
    next()
  } catch (error) {
    return res.status(500).json({ message: "Invalid Token", error: error.message });
  }
}
