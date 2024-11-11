const express=require("express");
const { followUserControler, getFollowingController, getFollowerController } = require("../controlers/followControlers");


const followRouter=express.Router();

followRouter.post("/follow-user",followUserControler)
.get("/get-following-list",getFollowingController)
.get("/get-follower-list",getFollowerController)



module.exports=followRouter;