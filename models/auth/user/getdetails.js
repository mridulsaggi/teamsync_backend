import userdetailsmodel from "../../../utils/schema/userdetails.js";
export const Getdetails=async(req,res)=>{
    try{
        const {email}=req.body;
        const user=await userdetailsmodel.findOne({email});
        // if(!user) return res.json({message:`No user with ${email} email id exists`})

        const details=user.agents;
        console.log(details);
        res.status(200).json({message:details});
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:"internal server error :("})
    }
}