const express=require("express");
const { registerControler, loginControler, logoutController } = require("../controlers/authControlers");


const authRouter=express.Router();

authRouter
.post("/register",registerControler)
.post("/login",loginControler)
.get("/logout",logoutController)

module.exports=authRouter;