import usermodel from "../../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../../utils/generatejwt.js";
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await usermodel.findOne({email});
        if(!user) return res.json({message:`No user with ${email} emailid exists`})

        // compare password
        const matched=await bcryptjs.compare(password,user?.password || "");
        if(matched){
            // generate jwt token.
            generatejwt(user._id,res);
            res.status(200).json({message:"User logedin successfully"})
            console.log(user);
        }
        else{
            res.json({message:"Invalid Password"})
        }
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:"internal server error :("})
    }
}