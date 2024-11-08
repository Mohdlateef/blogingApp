const express=require("express");

const auth=require("../middlewares/authMiddleware")
const { registerControler, loginControler, logoutController, loginpageController, logOutAllController } = require("../controlers/authControlers");


const authRouter=express.Router();

authRouter
.get("/login",loginpageController)
.post("/register",registerControler)
.post("/login",loginControler)
.post("/logout",auth,logoutController)
.post("/logoutAll",auth,logOutAllController);

module.exports=authRouter;