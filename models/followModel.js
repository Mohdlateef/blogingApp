const followSchema=require("../schemas/followSchema")
// store the follower and following in database
const followUser=({followerUserId,followingUserId})=>{
    return new Promise(async(resolve,reject)=>{

        try {
            const followObj=new followSchema({
                followerUserId,
                followingUserId,
            })
            await followObj.save();
            resolve(followObj)
        } catch (error) {
            reject(error)
        }
    })
}

const followingUser=({followerUserId})=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const followingList=await followSchema.find({followerUserId:followerUserId}
            ).populate("followingUserId");
            console.log(followingList)
            resolve(followingList)
        } catch (error) {
            reject(error);
        }
    })
}

module.exports={followUser,followingUser}