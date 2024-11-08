const blogSchema=require("../schemas/blogSchema")

const blogModel=({title,textbody,userId})=>{
    return new Promise(async(resolve,reject)=>{
           
        const blogdb=new blogSchema({
            title,
            textbody,
            creationDateTime:Date.now(),
            userId:userId,
        })
        try {
            await blogdb.save();
            resolve(blogdb);
        } catch (error) {
            reject(error)
        }
    })
}
module.exports=blogModel