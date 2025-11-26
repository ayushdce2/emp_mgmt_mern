const Joi = require('joi');

const isUpdatePersonalDataValid = (req,res,next)=>{
    // console.log(req.body,"req.body")
    const {name,email,phoneno,jobprofile,officelocation} = req.body;
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        email:Joi.string().email().required(),
        phoneno:Joi.string().pattern(/^[0-9]{10}$/).messages({"string.pattern.base": "Phone number must be exactly 10 digits"}),
        jobprofile:Joi.string(),
        officelocation:Joi.string(),
    });

    const {error} = schema.validate({name,email,phoneno,jobprofile,officelocation});

    if(error){
        
        return res.status(400).json({message:"BAD request", error})
    }
// console.log("working in validation")
    next();
}


module.exports = {
    isUpdatePersonalDataValid
}