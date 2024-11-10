const express=require("express");
const { followUserControler, getFollowingController } = require("../controlers/followControlers");


const followRouter=express.Router();

followRouter.post("/follow-user",followUserControler)
.get("/get-following-list",getFollowingController)



module.exports=followRouter;