import express from "express"
import { Getdetails } from "../models/auth/user/getdetails.js";
import { Postdetails } from "../models/auth/user/postdetails.js";
const userroute=express.Router();
userroute.post("/postdetails",Postdetails)
userroute.get("/getdetails",Getdetails)
export default userroute;