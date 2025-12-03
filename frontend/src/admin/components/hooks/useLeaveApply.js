import React, { useState } from 'react';
import API from '../../../utility/axios';
import { handleSuccess, handleError } from '../../../utility/ToastCustom.jsx';

const useLeaveApply = ({refetch}) => {
    const finalRefetch = refetch ? refetch : (() => {});
    const [formData,setFormData]=useState(null);

    const fetchFormData = (e)=>{
        setFormData(prev=>{
        switch(e.target.name){
            case "leave_type":
                return {...prev, [e.target.name]:e.target.value}
            case "date_from":
                return {...prev, [e.target.name]:e.target.value}
            case "date_to":
                return {...prev, [e.target.name]:e.target.value}
            case "leave_reason":
                return {...prev, [e.target.name]:e.target.value}
            default:
                return {...prev}
        }
        })

    }

    const submitFormData =(e)=>{
        e.preventDefault();
        console.log(formData)
SendFormData();
    }
    const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }
    const SendFormData = async ()=>{
        try {
                const response = await API.post("/user/leave/apply", formData , headers);
                const data = response.data;
                handleSuccess(data.message);
                await finalRefetch();

   
                console.log(response,"response");
            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                error.status=="400" && handleError(error.response.data.error.details[0].message);
                error.status=="422" && handleError(error.response.data.message);
                error.status=="409" && handleError(error.response.data.message)
            }
    }
  return {formData, fetchFormData, submitFormData}
}

export default useLeaveApply