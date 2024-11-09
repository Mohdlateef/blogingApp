const { followUser } = require("../models/followModel");
const { findUserWithKey } = require("../models/userModel");

const followUserControler=async(req,res)=>{
    const followerUserId=req.session.User.userId;
    const followingUserId=req.body.followingUserId;
try {
    const follwing=await findUserWithKey({key:followingUserId});
   
} catch (error) {
    return res.send({
        status:400,
        message:'invalid followingUserId',
        error:error
    })
}
try {
    const follower=await findUserWithKey({key:followerUserId});
   
} catch (error) {
    return res.send({
        status:400,
        message:'invalid follweruserId',
        error:error
    })
}

try {
    const followDb=await followUser({followerUserId,followingUserId});
   return res.send({
        status:201,
        message:'follow sucessfull',
        data:followDb
    })
} catch (error) {
    return res.send({
        staus:500,
        message:'internal server error',
        error:error,
    })
}

}

