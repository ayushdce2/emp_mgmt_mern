const Joi = require('joi');

const userDataValidation = (req,res,next)=>{
    // console.log(req.body,"req.body")
    const {name,email,userRole} = req.body;
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        email:Joi.string().email().required(),
        userRole:Joi.string().required(),
    });

    const {error} = schema.validate({name,email,userRole});

    if(error){
        
        return res.status(400).json({message:"BAD request", error})
    }
// console.log("working in validation")
    next();
}


module.exports = {
    userDataValidation
}