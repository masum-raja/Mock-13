const mongoose=require("mongoose")

const applySchema=mongoose.Schema({
    name:String,
    position:String,
    contract:String,
    location:String
})

const applyModel=mongoose.model("apply",applySchema)

module.exports={applyModel}