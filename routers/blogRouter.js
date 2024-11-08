const express=require("express");

//file imports;
const auth = require("../middlewares/authMiddleware");
const { createBlogControler } = require("../controlers/blogControlers");


const blogRouter=express.Router();


blogRouter.post("/createblog",auth,createBlogControler)



module.exports=blogRouter;