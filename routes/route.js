import express from "express"
import { login } from "../models/auth/login.js";
import { logout } from "../models/auth/logout.js";
import { signup } from "../models/auth/signup.js";
const route=express.Router();
route.post("/login",login)
route.post("/logout",logout)
route.post("/signup",signup)
export default route;