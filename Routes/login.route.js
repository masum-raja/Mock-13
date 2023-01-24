const {Router}=require("express");
require("dotenv").config()
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");

const {signupModel}=require("../Models/signup.model");

const loginRoute=Router();

loginRoute.post("/",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await signupModel.find({email})
        if(user.length>0){
            const hash=user[0].password;
            bcrypt.compare(password,hash,(err,result)=>{
                if(result){
                    const token=jwt.sign({"UserID":user[0]._id},process.env.private_key)
                    res.status(200).send({message:"Login Successful",token})
                }else{
                    res.status(400).send({message:"wrong credentials"})
                }
            })
        }else{
            res.status(400).send({message:"wrong credentials"})
        }

    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong! please try again"})
    }
})

module.exports={loginRoute}