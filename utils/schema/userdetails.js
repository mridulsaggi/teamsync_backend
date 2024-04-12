import mongoose from "mongoose";
const userdetailschema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    agents:[{
        type:String,
    }]

},{timestamps:true})
const userdetailsmodel=mongoose.model("userdetail",userdetailschema);
export default userdetailsmodel;