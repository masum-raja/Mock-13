const {Router}=require("express");

const {jobModel}=require("../Models/jobpost.model")

const jobRoute=Router();

jobRoute.get("/",async(req,res)=>{
    try{
        const jobs=await jobModel.find()
        res.status(200).send({jobs})
    }catch(err){
        console.log(err);
    }

})


jobRoute.post("/create",async(req,res)=>{
    const {name,position,contract,location}=req.body
    try{
        const jobs=jobModel({name,position,contract,location})
        await jobs.save()
        res.status(200).send({message:"Job posted successfully"})
    }catch(err){
        console.log(err);
        res.status(200).send({message:"Something went wrong"})
    }

})

module.exports={jobRoute}