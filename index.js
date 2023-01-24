const express = require("express");
require("dotenv").config();
const cors = require("cors")

const {connection} =require("./Config/db")
const{signupRoute}=require("./Routes/signup.route")
const{loginRoute}=require("./Routes/login.route")
const{ jobRoute} = require("./Routes/jobPost.route")
const{ applyRoute} = require("./Routes/appliedJobs.route")

const app=express();

app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("Welcome to home")
})
app.use("/signup",signupRoute)
app.use("/login",loginRoute)
app.use("/jobs",jobRoute)
applyRoute("/apply",applyRoute)




app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log({"mssg":"Connected successfully to DB"})
    }
    catch(err){
        console.log(err)
        console.log(({"mssg":"Connection fail to DB"}))
    }

    console.log(`listening on port ${process.env.port}`)
})