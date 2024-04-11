import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        requried:true,
        enum:['male','female']
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true})
const usermodel=mongoose.model("user",userschema);
export default usermodel;