export const logout=(req,res)=>{
    try{
        res.cookie("token","",{
            maxAge:0
        })
        res.json({message:"User loggedout successfully :)"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error :("});
    }
}