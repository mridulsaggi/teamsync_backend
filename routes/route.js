import express from "express"
import { login } from "../models/auth/auth/login.js";
import { logout } from "../models/auth/auth/logout.js";
import { signup } from "../models/auth/auth/signup.js";
const route=express.Router();
route.post("/login",login)
route.post("/logout",logout)
route.post("/signup",signup)
export default route;