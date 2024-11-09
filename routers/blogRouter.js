const express=require("express");

//file imports;
const auth = require("../middlewares/authMiddleware");

const { createBlogControler,
     readBlogsController ,
     readMyBlogsController,
     editBlogsController,
     deleteBlogController
    } = require("../controlers/blogControlers");


const blogRouter=express.Router();


blogRouter
.post("/createblog",auth,createBlogControler)
.get("/readblogs",auth,readBlogsController)
.get("/read_my_blogs",auth,readMyBlogsController)
.post("/editblog",auth,editBlogsController)
.post("/deleteblog",auth,deleteBlogController)






module.exports=blogRouter;