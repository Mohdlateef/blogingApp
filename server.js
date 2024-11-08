const express=require("express");
require("dotenv").config();
const session=require("express-session");
const mongodbsession=require("connect-mongodb-session")(session);

const clc=require("cli-color");
const app=express();


// sessionconnection
const store=new mongodbsession({
    uri:process.env.MONGO_URI,
    collection:"sessions"
});
app.use(session({
    secret:process.env.SECRET,
    store:store,
    resave:false,
    saveUninitialized:false,
}))

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