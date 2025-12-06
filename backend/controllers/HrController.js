const UserModel = require("../models/User.js");
const LeaveModel = require("../models/Leave.js");

const UserListFunction = async (req,res)=>{
    // console.log(req.user,"userlistfunction");
    try{
        const UsersList = await UserModel.find({ userRole: { $in: ["employee", "admin"] }});
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

const Getallusersleave = async (req,res)=>{
try {
        // console.log(req.body,"req.body");
        // const { email } = req.user;
        // const { punchInValue, } = req.body;
        // const punchInValue = new Date(Date.now());
        
        const AllUsersLeaveDetails = await LeaveModel.find().sort({_id:-1});
        // console.log(AllLeaveDetails,"AllLeaveDetails")
       
        res.status(201).json({ success: true, message: "all users leave details ",AllUsersLeaveDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

const ManageLeaveFunc = async (req,res)=>{

        console.log(req.body,"req.body == req.user",req.user);
        const {UserLeaveStatus, id} = req.body;
        // const {email} = req.user;

    

    try{
        const UpdateUserLeaveData = await LeaveModel.findByIdAndUpdate(id,{leave_status:UserLeaveStatus},{new:true});
// console.log(UpdateUserData,"UpdateUserData")
        res.status(200).json({message:"Update Success",UpdateUserLeaveData})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Update Failed",error})
    }
}
module.exports = {UpdateUserData, UserToUpdateData, UserListFunction, Getallusersleave, ManageLeaveFunc};