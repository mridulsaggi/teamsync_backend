import usermodel from "../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../utils/generatejwt.js";
export const signup=async(req,res)=>{
    try{
        const {name,password,confirmpassword,description,companyname,email,gender}=req.body;
        if(password!==confirmpassword){
            res.json({message:"password do not match"});
            return;
        } 

        const user=await usermodel.findOne({email});
        if(user){
            res.json({message:"user with this emailid already exists"})
            return;
        }

        const boyprofilepic=`https://avatar.iran.liara.run/public/boy?username=${name}/`
        const girlprofilepic=`https://avatar.iran.liara.run/public/girl?username=${name}/`

        // hash pasword
        const hashedpassword=await bcryptjs.hash(password,10);


        const newuser=usermodel({
            name,
            password:hashedpassword,
            gender,
            description,
            companyname,
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