const UserModel = require("../models/User.js");

const UserListFunction = async (req,res)=>{
    // console.log(req.user,"userlistfunction");
    try{
        const UsersList = await UserModel.find({ userRole: { $in: ["employee", "hr"] }});
        // console.log(AllUserDetails)
        res.status(200).json(UsersList);

        }catch(error){
            res.status(500).json({message:error});
        }

}

const UserToUpdateData = async (req,res)=>{
    // console.log(req.query.email,"adminfunction");
    const email = req.query.email;


    try{
        const editUserData = await UserModel.find({email });
        // console.log(AllUserDetails)
        res.status(200).json(editUserData);

        }catch(error){
            res.status(500).json({message:error});
        }

}

const UpdateUserData = async (req,res)=>{
    // console.log(req.body)
    const {_id,name,email,userRole} = req.body;
    try{
        const UpdateUserData = await UserModel.findByIdAndUpdate(_id,{name,email,userRole},{new:true});
// console.log(UpdateUserData,"UpdateUserData")
        res.status(200).json({message:"Update Success",UpdateUserData})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Update Failed",error})
    }
}


module.exports = {UpdateUserData, UserToUpdateData, UserListFunction};