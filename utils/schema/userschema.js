import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        requried:true,
        enum:['male','female']
    },
    companyname:{
        type:String,
    },
    description:{
        type:String
    }

},{timestamps:true})
const usermodel=mongoose.model("companyuser",userschema);
export default usermodel;