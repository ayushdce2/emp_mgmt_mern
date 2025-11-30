const UserModel = require("../models/User.js");
const AttandanceModel = require("../models/Attandance.js");
const bcrypt = require("bcrypt");

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
// console.log(req.body)
    const {_id,name,email, phoneno, jobprofile, officelocation} = req.body;
    try{
        const UpdateUserData = await UserModel.findByIdAndUpdate(_id,{name,email,phoneno, jobprofile, officelocation},{new:true});
// console.log(UpdateUserData,"UpdateUserData")
        res.status(200).json({message:"Update Success",UpdateUserData})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Update Failed",error})
    }
}


const UpdatePassword = async (req,res)=>{
    try{
        // console.log(req.body);
    const {old_password,new_password} = req.body;
    const {email,_id} = req.user;
// console.log(password,"<=======password",req.user);
const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(403).json({ message: 'User Not Found', success: false });
        }
 const isPassEqual = await bcrypt.compare(old_password,existingUser.password);
        if(!isPassEqual){
            return res.status(403).json({ message: 'Wrong Old Password', success: false });
        }

      const newGenerated_password = await bcrypt.hash(new_password, 10);
           
            await UserModel.findByIdAndUpdate(_id,{password:newGenerated_password},{new:true});

        res.status(200).json({success: true, message: "Password Updated Successfully" });

} catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

const PunchInFunction = async (req,res)=>{
    // console.log(req.body,"PunchInFunction",req.user);
    try {
        // console.log(req.body,"req.body");
        const { email } = req.user;
        // const { punchInValue, } = req.body;
        const punchInValue = new Date(Date.now());
        
        const SubmitAttandance = new AttandanceModel({ email, punchInValue });
       
        const AttandanceData = await SubmitAttandance.save();
        res.status(201).json({ success: true, message: "PunchIn Success",AttandanceData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
    
}

const PunchOutFunction = async (req,res)=>{
    // console.log(req.body,"PunchOutFunction",req.user);
    try {
        // console.log(req.body,"req.body");
        const { email } = req.user;
        const { _id } = req.body;

        const punchInData = await AttandanceModel.find({_id});
    //    console.log(punchInData,"<======punchInData")
       const {punchInValue} = punchInData[0];
        const recentPunchInValue = punchInValue;
        //  console.log(punchInValue,"<======punchInValue")
        
        const punchOutValue = new Date(Date.now());
        // const SubmitAttandance = new AttandanceModel({ email, punchOutValue });
            const punchInDate = new Date(recentPunchInValue);
            const punchOutDate = new Date(punchOutValue); // use new punch out value now

            const diffMs = punchOutDate - punchInDate;
            const diffMinutes = Math.floor(diffMs / 1000 / 60);
            const Workinghours = Math.floor(diffMinutes / 60);
            const Workingminutes = diffMinutes % 60;
       console.log("Workingminutes",Workingminutes,"Workinghours",Workinghours);

        const AttandanceData = await AttandanceModel.findByIdAndUpdate(_id,{punchOutValue:punchOutDate,Workingminutes:Workingminutes,Workinghours:Workinghours},{new:true});
        res.status(201).json({ success: true, message: "PunchOut Success",AttandanceData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
    
}

const getattandancedetails = async (req,res)=>{
try {
        // console.log(req.body,"req.body");
        const { email } = req.user;
        // const { punchInValue, } = req.body;
        // const punchInValue = new Date(Date.now());
        
        const AllAttandanceDetails = await AttandanceModel.find({ email }).sort({_id:-1});
       
        // const AttandanceData = await SubmitAttandance.save();
        res.status(201).json({ success: true, message: "all details ",AllAttandanceDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

module.exports = {ProfileFunction, UpdatePersonalDetails, UpdatePassword, PunchInFunction, PunchOutFunction, getattandancedetails};