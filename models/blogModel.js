const blogSchema=require("../schemas/blogSchema")

const createBlogModel=({title,textbody,userId})=>{
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

const readBlogModel=({userId})=>{
    return new Promise(async(resolve,reject)=>{
    try {
        const blogs=await blogSchema.find({userId})
        resolve(blogs);
    } catch (error) {
        reject(error)
    }
    })
}
module.exports={createBlogModel,readBlogModel}