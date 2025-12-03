const Joi = require('joi');

const isLeaveDataValid = (req,res,next)=>{
    // console.log(req.body,"req.body")
    const {leave_reason } = req.body;
    const schema = Joi.object({
        leave_reason:Joi.string().min(3).required()
        // email:Joi.string().email().required()
    });

    const {error} = schema.validate({leave_reason});

    if(error){
        
        return res.status(400).json({message:"BAD request", error})
    }
// console.log("working in validation")
    next();
}


module.exports = {
    isLeaveDataValid
}