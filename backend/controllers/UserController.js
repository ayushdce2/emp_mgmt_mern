const UserModel = require("../models/User.js");
const AttandanceModel = require("../models/Attandance.js");
const LeaveModel = require("../models/Leave.js")
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

const applyleavefunction = async (req,res)=>{
try {
        // console.log(req.body,"req.body");

        const {email} = req.user;
        let {leave_type, date_from, date_to, leave_reason} = req.body;
        let leave_status = "Waiting";

        //limit setup
        const sick_leaves_limit = 3;
        const casual_leaves_limit = 3;
        const workfromhome_leaves_limit = 3;

        //initialised leaves count
        let total_sick_leaves_count =null
        let total_casual_leaves_count=null
        let total_workfromhome_leaves_count=null
        let total_absent_count=null

        //leave count find
        const all_leaves_db_data = await LeaveModel.findOne({ email}).sort({ createdAt: -1 }).select("total_sick_leaves total_casual_leaves total_workfromhome_leaves total_absent");
        console.log(all_leaves_db_data,"<=====all_leaves_db_data");
        
        if(!all_leaves_db_data){
                total_sick_leaves_count = null
                total_casual_leaves_count= null
                total_workfromhome_leaves_count= null
                total_absent_count= null
        }else{    
            ( {
                    total_sick_leaves: total_sick_leaves_count=null ,
                    total_casual_leaves: total_casual_leaves_count=null,
                    total_workfromhome_leaves: total_workfromhome_leaves_count=null,
                    total_absent: total_absent_count=null
                } = all_leaves_db_data)
    }
            console.log("total_sick_leaves_count==>",total_sick_leaves_count,"total_sick_leaves_count==>", total_casual_leaves_count,"total_sick_leaves_count==>",total_workfromhome_leaves_count,"total_sick_leaves_count==>", total_absent_count )
        // Calculate difference in milliseconds
const diffTime = new Date(date_to) - new Date(date_from); // milliseconds

// Convert to days (+1 to include both start and end date)
let total_leave_days = diffTime / (1000 * 60 * 60 * 24) + 1;
console.log(total_leave_days,"<==total_leave_days")

    const from = new Date(date_from);
    const today = new Date();
    from.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (from < today) {
        return res.status(422).json({ message: "from date is not valid, beyond today" });
    }

    if(date_from > date_to){
        return res.status(422).json({ message: "date_to is beyond date_from" });
    }

        
const existingLeave = await LeaveModel.findOne({ email, 
    // $or: [
    //     { date_from },
    //     { date_to }
    // ],
date_from: { $lte: date_to },   // existing start <= new end
    date_to: { $gte: date_from } 
 });

if (existingLeave) {
    return res.status(409).json({message: "A leave with the same date range already exists"});
}
console.log(total_sick_leaves_count,"<==total_sick_leaves_count",sick_leaves_limit,"<==sick_leaves_limit");

let total_sick_leaves = total_sick_leaves_count==null ? sick_leaves_limit : total_sick_leaves_count;
let total_casual_leaves = total_casual_leaves_count==null ? casual_leaves_limit : total_casual_leaves_count;
let total_workfromhome_leaves = total_workfromhome_leaves_count==null ? workfromhome_leaves_limit : total_workfromhome_leaves_count;
let total_absent =  total_absent_count==null ? 0 : total_absent_count;

if(leave_type=="sick"){
    
    if(total_leave_days == 1){
        if(total_sick_leaves_count==null){
        total_sick_leaves = sick_leaves_limit - 1
    }else{
        total_sick_leaves = total_sick_leaves_count - 1
    }
    
    if(total_sick_leaves_count !=null && total_sick_leaves_count <= 0){
        total_sick_leaves=0;
        total_absent = Number(total_absent_count) + 1 ;
        leave_status = "absent"
    }
    }
    
console.log("total_leave_days",total_leave_days,"total_sick_leaves",total_sick_leaves)
    if(total_leave_days > 1){
        if((total_sick_leaves - total_leave_days) <= 0 ){
             total_absent = Number(total_leave_days - total_sick_leaves) + Number(total_absent) ;
             total_sick_leaves != 0 && (total_leave_days=total_leave_days +" (Absent= "+(Number(total_absent) - Number(total_absent_count))+")")
             console.log("total_sick_leaves=>",total_sick_leaves,"total_absent=>",total_absent)
             total_sick_leaves != 0 && (total_sick_leaves = (Number(total_absent) - Number(total_absent_count)) - total_sick_leaves);
             total_sick_leaves < 0 && (total_sick_leaves = 0);
             leave_status = "absent";
             
            }else{
                total_sick_leaves = total_sick_leaves - total_leave_days
            } 
    }

    
}

if(leave_type=="casual"){
    
    
    if(total_leave_days == 1){
        if(total_casual_leaves_count==null){
        total_casual_leaves = casual_leaves_limit - 1
    }else{
        total_casual_leaves = total_casual_leaves_count - 1
    }
    
    if(total_casual_leaves_count !=null && total_casual_leaves_count <= 0){
        total_casual_leaves=0;
        total_absent = Number(total_absent_count) + 1 ;
        leave_status = "absent"
    }
    }
    
    if(total_leave_days > 1){
        if((total_casual_leaves - total_leave_days) <= 0 ){
             total_absent = Number(total_leave_days - total_casual_leaves) + Number(total_absent) ;
             total_casual_leaves != 0 && (total_leave_days=total_leave_days +" (Absent= "+(Number(total_absent) - Number(total_absent_count))+")")
             total_casual_leaves != 0 && (total_casual_leaves = (Number(total_absent) - Number(total_absent_count)) - total_casual_leaves);

            total_casual_leaves < 0 && (total_casual_leaves = 0);

            leave_status = "absent";
             
            }else{
                total_casual_leaves = total_casual_leaves - total_leave_days
            } 
    }
}
if(leave_type=="workfromhome"){
    
    
    if(total_leave_days == 1){
        if(total_workfromhome_leaves_count==null){
        total_workfromhome_leaves = workfromhome_leaves_limit - 1
    }else{
        total_workfromhome_leaves = total_workfromhome_leaves_count - 1
    }
    
    if(total_workfromhome_leaves_count !=null && total_workfromhome_leaves_count <= 0){
        total_workfromhome_leaves=0;
        total_absent = Number(total_absent_count) + 1 ;
        leave_status = "absent"
    }
    }
    
    if(total_leave_days > 1){
        if((total_workfromhome_leaves - total_leave_days) <= 0 ){
             total_absent = Number(total_leave_days - total_workfromhome_leaves) + Number(total_absent) ;
             total_workfromhome_leaves != 0 && (total_leave_days=total_leave_days +" (Absent= "+(Number(total_absent) - Number(total_absent_count))+")")
             total_workfromhome_leaves != 0 && (total_workfromhome_leaves = (Number(total_absent) - Number(total_absent_count)) - total_workfromhome_leaves);

 total_workfromhome_leaves < 0 && (total_workfromhome_leaves = 0);

 leave_status = "absent";
             
            }else{
                total_workfromhome_leaves = total_workfromhome_leaves - total_leave_days
            } 
    }
}





                const sendleaveApplyData = new LeaveModel({  email,leave_type,date_from,date_to,leave_reason,leave_status, total_sick_leaves,total_casual_leaves,total_workfromhome_leaves,total_absent,total_leave_days });
       
        const leaveApplyData = await sendleaveApplyData.save();

        res.status(201).json({ success: true, message: "Leave Applied",leaveApplyData,workfromhome_leaves_limit:workfromhome_leaves_limit,casual_leaves_limit:casual_leaves_limit,sick_leaves_limit:sick_leaves_limit });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}
const getLeaveSummary = async (req,res)=>{
try {
        // console.log(req.body,"req.body");
        const { email } = req.user;
        // const { punchInValue, } = req.body;
        // const punchInValue = new Date(Date.now());
        
        const AllLeaveDetails = await LeaveModel.find({ email }).sort({_id:-1});
        // console.log(AllLeaveDetails,"AllLeaveDetails")
       
        res.status(201).json({ success: true, message: "all leave details ",AllLeaveDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}
module.exports = {getLeaveSummary, applyleavefunction, ProfileFunction, UpdatePersonalDetails, UpdatePassword, PunchInFunction, PunchOutFunction, getattandancedetails};