import usermodel from "../../schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../utils/generatejwt.js";
export const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await usermodel.findOne({username});
        if(!user) return res.status(400).json({error:`No user with ${username} username exists`})

        // compare password
        const matched=await bcryptjs.compare(password,user?.password || "");
        if(matched){
            // generate jwt token.
            generatejwt(user._id,res);
            res.status(200).json({message:"User logedin successfully"})
            console.log(user);
        }
        else{
            res.status(400).json({error:"Invalid Password"})
        }
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({error:"internal server error :("})
    }
}