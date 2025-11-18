
const jwt = require("jsonwebtoken");

const isUserAuthenticated = (req,res,next)=>{
    const auth = req.headers["authorization"];
    
    // console.log(req.user,"req.user");
    // console.log(auth,"auth")

    if(!auth){
        return res.status(403).json({message:"Access denied. No JWT token provided."})
    }
    
    try{
        const decoded = jwt.verify(auth, process.env.JWT_Secret);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(403).json({message:"Unauthorized Access or expired"})
    }
}

module.exports = {isUserAuthenticated};