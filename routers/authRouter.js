const express=require("express");
const { registerControler } = require("../controlers/authControlers");


const authRouter=express.Router();

authRouter.post("/register",registerControler)


module.exports=authRouter;