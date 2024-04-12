import userdetailsmodel from "../../../utils/schema/userdetails.js";
export const Postdetails=async(req,res)=>{
    try{
        const {name,email,agents}=req.body;

        const user=await userdetailsmodel.findOne({email});
        // if(!user){
        //     res.json({message:"No user with this emailid exists. Please register first"})
        //     return;
        // }
        const newuser=userdetailsmodel({
            name,
            email,
            agents,    
        })
        if(newuser){
            await newuser.save();
            res.status(201).json({message:"Agents added successfully"});
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