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

module.exports={followUser}