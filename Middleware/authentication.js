const jwt = require('jsonwebtoken');
require("dotenv").config();

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        const decoded=jwt.verify(token,process.env.private_key)
        if(decoded){
            const UserId=decoded.UserID
            req.body.UserId=UserId
            next()
        }else{
            res.send({message:"unauthorized! please login"})
        }
    }else{
        res.send({message:"unauthorized! please login"})
    }
}

module.exports={auth}