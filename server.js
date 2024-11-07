const express=require("express");
require("dotenv").config();
const clc=require("cli-color");
const app=express();

// constants
const PORT=process.env.PORT 

// globalmiddlewarea
app.use(express.json());


// fileImports
const dbConnection=require("./dbConection");
const authRouter = require("./routers/authRouter");

app.use("/auth",authRouter)


app.listen(PORT,()=>{
    console.log(clc.yellowBright.bold(`server is running on PORT${PORT}`))
})