const express=require("express");
const { followUserControler, getFollowingController, getFollowerController, unFollowController } = require("../controlers/followControlers");


const followRouter=express.Router();

followRouter.post("/follow-user",followUserControler)
.get("/get-following-list",getFollowingController)
.get("/get-follower-list",getFollowerController)
.post("/unFollow",unFollowController)



module.exports=followRouter;