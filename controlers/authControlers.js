


//models
const userModel = require("../models/userModel");


function registerControler(req,res){
  const {name,username,email,password}=req.body;
userModel({name,username,email,password})
  return res.send("you are in register controller");


}

module.exports = { registerControler };
