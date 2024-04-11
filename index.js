import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import usermodel from "./schema/userschema.js"
import route from "./routes/route.js"
import connection from "./utils/connection.js";
import cookieParser from "cookie-parser"
const app=express();
dotenv.config();
// implementing cors
const corsoptions={
    origin:"https://localhost/3000",
    methods:"*",
    credentials:true
}
app.use(cors(corsoptions))
app.use(cookieParser())
app.use(express.json());
// app.use((express.urlencoded({extended:true})))

// routes
app.use("/api/auth",route);

// listening the server.
app.listen(3000,()=>{
    connection();
    console.log(`server is running on port ${process.env.port}`);
})