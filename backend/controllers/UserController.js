const UserModel = require("../models/User.js");

const ProfileFunction = async (req, res) => {
    
// console.log(req.query.email,"req.body");

const {email,_id}= req.user;
    try{
       
        const AllUserDetails = await UserModel.find({email});
        // console.log(AllUserDetails)
        res.status(200).json(AllUserDetails);

        }catch(error){
            res.status(500).json({message:error});
        }

}

const UpdatePersonalDetails = async (req,res)=>{
console.log(req.body)
    const {_id,name,email} = req.body;
    try{
        const UpdateUserData = await UserModel.findByIdAndUpdate(_id,{name,email},{new:true});
// console.log(UpdateUserData,"UpdateUserData")
        res.status(200).json({message:"Update Success",UpdateUserData})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Update Failed",error})
    }
}





module.exports = {ProfileFunction, UpdatePersonalDetails};