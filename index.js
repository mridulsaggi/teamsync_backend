import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import usermodel from "./utils/schema/userschema.js"
import cors from "cors"
import route from "./routes/route.js"
import connection from "./utils/connection.js";
import cookieParser from "cookie-parser"
import userroute from "./routes/userroute.js"
const app=express();
dotenv.config();
// implementing cors
const corsoptions={
    origin:"http://localhost:5173",
    methods:"*",
    credentials:true
}
app.use(cors(corsoptions))
app.use(cookieParser())
app.use(express.json());
// app.use((express.urlencoded({extended:true})))

// routes
app.use("/api/auth",route);
app.use("/api/user",userroute);

// listening the server.
app.listen(8000,()=>{
    connection();
    console.log(`server is running on port 8000`);
})