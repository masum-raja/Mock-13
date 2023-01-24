const mongoose=require("mongoose")

const signupSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const signupModel=mongoose.model("auth",signupSchema)

module.exports={signupModel}