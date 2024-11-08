const blogModel = require("../models/blogModel");
const blogdatavalidation = require("../utils/blogutils");

const createBlogControler=async (req,res)=>{
const {title,textbody}=req.body;
const userId=req.session.User.userId;
try {
    await blogdatavalidation({title,textbody,userId})


} catch (error) {
    return res.send({
        status:400,
        error:error,
    })
}
// store blogs
try {
    const blogdb=await blogModel({title,textbody,userId})
    return res.send({
        status:201,
        message:'blog created sucessfully ',
        data:blogdb,
    })
} catch (error) {
    return res.send({
        status:500,
        message:"internal server error",
        error:error,
    })
}

}








module.exports={createBlogControler}