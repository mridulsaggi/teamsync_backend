import usermodel from "../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../utils/generatejwt.js";
export const signup=async(req,res)=>{
    try{
        const {name,username,password,confirmpassword,gender}=req.body;
        if(password!==confirmpassword){
            res.json({message:"password do not match"});
            return;
        } 

        const user=await usermodel.findOne({username});
        if(user){
            res.json({message:"user with this usernamee already exists"})
            return;
        }

        const boyprofilepic=`https://avatar.iran.liara.run/public/boy?username=${username}/`
        const girlprofilepic=`https://avatar.iran.liara.run/public/girl?username=${username}/`

        // hash pasword
        const hashedpassword=await bcryptjs.hash(password,10);


        const newuser=usermodel({
            name,
            username,
            password:hashedpassword,
            gender,
            profilepic:gender=="male"?boyprofilepic:girlprofilepic
        })
        if(newuser){
            await newuser.save();
            generatejwt(newuser._id,res);
            res.status(201).json({message:"user registered successfully"});
        }
        else{
            console.log(error.message);
            res.json({message:"Invalid user details."})
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:"internal server error :("})
    }
    
    
}