const bcrypt=require("bcrypt")

const { registerUser, findUserWithLoginId } = require("../models/userModel");
const { userValidation } = require("../utils/authUtils");

const registerControler = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    //datavalidation
    await userValidation({ username, email, password });

    // registeruser
    await registerUser({ name, username, email, password });
    return res.send({
      status: 201,
      message: "userregister sucessfully",
    });
  } catch (error) {
    return res.send({
      status: 400,
      message: "server error",
      error: error,
    });
  }
};


const loginControler=async(req,res)=>{
  const {loginId,password}=req.body;

  try {
    //find user in Db
    const userDb=await findUserWithLoginId({loginId});

    //compare password
   const ismatch=await bcrypt.compare(password,userDb.password)
    
   if(!ismatch){
          return res.send({
            status:400,
            message:"incrorect password"
          });
        }
        // create_session
      req.session.isAuth=true;
      
      req.session.User={
        userId:userDb._id,
        username:userDb.username,
        email:userDb.email,
      }
  res.send({
    status:200,
    message:"login sucessfully",
    data:userDb
  })
  } catch (error) {
    console.log(error);
    return res.send({
      status:400,
      "message":"backend error",
      "error":error
    })
    
  }

}

//logout
const logoutController=async(req,res)=>{
  req.session.destroy((err)=>{
    if(err){
      return res.send({
        status:400,
        message:"logout unsucessfull",
        err:err,
      })
    }
    return res.send({
      status:200,
      message:"logout sucessfully"
    }
    )
  })
}

module.exports = { registerControler ,loginControler,logoutController};
