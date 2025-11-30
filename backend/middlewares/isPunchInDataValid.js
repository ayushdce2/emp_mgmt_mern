const Joi = require('joi');

const isPunchInDataValid = (req,res,next)=>{
// console.log(req.body,"req.query");
    // const {punchInValue} = req.body;
    //     const schema = Joi.object({
            
    //         punchInValue: Joi.date().iso().required()
    //     });
    
    //     const {error} = schema.validate({punchInValue});
    
    //     if(error){
            
    //         return res.status(400).json({message:"BAD request", error})
    //     }
    // console.log("working in validation")
        next();
    }

module.exports = {isPunchInDataValid};