import React from 'react'
import { useState } from 'react';
import API from '../../../utility/axios';
import { handleSuccess, handleError } from '../../../utility/ToastCustom.jsx';

const useUpdatePassword = () => {

    const [formData, setFormData] = useState(null);

    const fetchFormData = (e)=>{
        setFormData(prev=>{
            switch(e.target.name){
            case "old_password":
                return {...prev,old_password:e.target.value}
            case "new_password":
                return {...prev,new_password:e.target.value}
            default:
                return prev
            }
        })
        // console.log(formData,"formData")
    }

     const headers = {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                }
            }

    const SubmitChangePassword =async (e)=> {
        e.preventDefault();
        try{
            const response = await API.put("/user/updatepassword",formData,headers);
            const data = response.data;
            handleSuccess(data.message);
         
            // localStorage.removeItem("loggedinuser");
            // localStorage.removeItem("token");
            // localStorage.removeItem("userRole");

            // setTimeout(() => {
            // navigate("/");
            // }, 1000);
            
            // console.log(response,"response");
        }catch(error){
            console.log(error,"error", error.status);
            error.status=="500" && handleError(error.response.data.error.codeName);
            error.status=="400" && handleError(error.response.data.error.details[0].message);
            error.status=="403" && handleError(error.response.data.message)
        }

    }

  return {fetchFormData,SubmitChangePassword}
}

export default useUpdatePassword