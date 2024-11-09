const express=require("express");

//file imports;
const auth = require("../middlewares/authMiddleware");
const { createBlogControler, readBlogController } = require("../controlers/blogControlers");


const blogRouter=express.Router();


blogRouter
.post("/createblog",auth,createBlogControler)
.get("/readblog",auth,readBlogController);





module.exports=blogRouter;