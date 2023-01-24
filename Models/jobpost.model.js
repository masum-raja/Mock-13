const mongoose=require("mongoose")

const jobSchema=mongoose.Schema({
    name:String,
    position:String,
    contract:String,
    location:String
})

const jobModel=mongoose.model("job",jobSchema)

module.exports={jobModel}