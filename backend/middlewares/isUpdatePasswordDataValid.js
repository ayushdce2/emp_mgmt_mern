const Joi = require('joi');

const isUpdatePasswordDataValid = (req,res,next)=>{
    // console.log(req.body,"req.body")
    const {new_password} = req.body;
    const schema = Joi.object({
        new_password:Joi.string().min(3).required()
        // email:Joi.string().email().required()
    });

    const {error} = schema.validate({new_password});

    if(error){
        
        return res.status(400).json({message:"BAD request", error})
    }
// console.log("working in validation")
    next();
}


module.exports = {
    isUpdatePasswordDataValid
}