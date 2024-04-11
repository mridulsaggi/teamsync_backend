import mongoose from "mongoose";
const connection=()=>{
    mongoose.connect("mongodb+srv://auth_user:auth_user@cluster0.vtkziqm.mongodb.net/",{
        dbName:"authentication"
    }).then(()=>{
        console.log("connected to database successfully");
    }).catch((err)=>{
        console.log("connection failed",err);
    })
}
export default connection;