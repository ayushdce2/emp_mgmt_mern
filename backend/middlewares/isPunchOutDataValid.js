const Joi = require('joi');

const isPunchOutDataValid = (req,res,next)=>{
// console.log(req.body,"req.query");
    // const {punchOutValue} = req.body;
    //     const schema = Joi.object({
            
    //         punchOutValue: Joi.date().iso().required()
    //     });
    
    //     const {error} = schema.validate({punchOutValue});
    
    //     if(error){
            
    //         return res.status(400).json({message:"BAD request", error})
    //     }
    // console.log("working in validation")
        next();
    }

module.exports = {isPunchOutDataValid};