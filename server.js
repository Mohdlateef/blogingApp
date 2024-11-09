const express=require("express");
require("dotenv").config();
const session=require("express-session");
const mongodbsession=require("connect-mongodb-session")(session);
const ejs=require("ejs")
const clc=require("cli-color");
const app=express();
app.set("view engine" ,"ejs")
// globalmiddlewarea
app.use(express.json());
app.use(express.urlencoded({extended:true}))
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

// fileImports
const auth=require("./middlewares/authMiddleware")
const dbConnection=require("./dbConection");
const authRouter = require("./routers/authRouter");
const blogRouter = require("./routers/blogRouter");
const followRouter = require("./routers/followrouter");


app.use("/auth",authRouter)
app.use("/blog",auth,blogRouter)
app.use("/follow",auth,followRouter)



app.listen(PORT,()=>{
    console.log(clc.yellowBright.bold(`server is running on PORT${PORT}`))
})