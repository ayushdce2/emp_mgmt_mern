import { useState } from "react";
import API from "../../../utility/axios.jsx";
import { handleSuccess, handleError } from '../../../utility/ToastCustom.jsx';
// import { useNavigate } from 'react-router-dom';

const UserProfileUpdate = (props,refetch)=>{
    // const navigate = useNavigate();
    console.log(props,"<----------UserProfileUpdate")
    const {email, createdAt, name, userRole, _id} = props;

     const [isOpen,setIsOpen] = useState(false);
     const [formData, setFormData] = useState({
        "email":email, "createdAt":createdAt, "name":name, "userRole":userRole, "_id":_id
     });


     
    
     const UpdateUserProfileFunction =()=>{
        setIsOpen(true);        
     }

     const FillFormData = (e)=>{
        console.log(e.target,"fillformdata")
        setFormData(prev => {
            switch(e.target.name){
                case "name" : 
                    return {...prev,name:e.target.value}
                case "email" : 
                    return {...prev,email:e.target.value}

                default:
                    return prev
            }
        });
     }

     const headers = {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                }
            }


     const UpdatePersonalDetailsModalFunction = async (e)=>{
        e.preventDefault();
        console.log("UpdatePersonalDetailsModalFunction")
        
        try{
            const response = await API.put("/user/updatepersonaldetails",formData,headers);
            const data = response.data;
            handleSuccess(data.message);
            refetch();
            setTimeout(() => {
                // navigate("/admin/profile");
                setIsOpen(false)
            }, 1000);
            
            console.log(response,"response");
        }catch(error){
            console.log(error,"error", error.status);
            error.status=="500" && handleError(error.response.data.error.codeName)
            error.status=="400" && handleError(error.response.data.error.details[0].message)
        }

     }

    return {UpdateUserProfileFunction, isOpen, setIsOpen,formData, UpdatePersonalDetailsModalFunction, FillFormData}
}

export default UserProfileUpdate;