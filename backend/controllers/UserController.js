const UserModel = require("../models/User.js");

const ProfileFunction = async (req, res) => {
    
// console.log(req.user,"req.body");

const {email,_id}= req.user;
    try{
        const AllUserDetails = await UserModel.find({email});
        // console.log(AllUserDetails)
        res.status(200).json(AllUserDetails);

        }catch(error){
            res.status(500).json({message:error});
        }

}



module.exports = {ProfileFunction};