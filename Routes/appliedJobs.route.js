const {Router}=require("express");

const {applyModel}=require("../Models/applied.model")

const applyRoute=Router();

applyRoute.get("/",async(req,res)=>{
    try{
        const jobs=await applyModel.find()
        res.status(200).send({jobs})
    }catch(err){
        console.log(err);
    }

})


applyRoute.post("/create",async(req,res)=>{
    const {name,position,contract,location}=req.body
    try{
        const jobs=applyModel({name,position,contract,location})
        await jobs.save()
        res.status(200).send({message:"Job posted successfully"})
    }catch(err){
        console.log(err);
        res.status(200).send({message:"Something went wrong"})
    }

})

module.exports={applyRoute}