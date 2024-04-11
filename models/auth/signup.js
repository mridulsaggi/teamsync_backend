import usermodel from "../../schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../utils/generatejwt.js";
export const signup=async(req,res)=>{
    try{
        const {name,username,password,confirmpassword,gender}=req.body;
        if(password!==confirmpassword){
            res.status(400).json({error:"passowrd do not match"});
            return;
        } 

        const user=await usermodel.findOne({username});
        if(user){
            res.status(400).json({error:"user with this usernamee already exists"})
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
            res.status(201).json({newuser});
        }
        else{
            console.log(error.message);
            res.status(400).json({error:"Invalid user details."})
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error:"internal server error :("})
    }
    
    
}