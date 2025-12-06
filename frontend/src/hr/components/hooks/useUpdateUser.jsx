import React, { useState, useEffect } from 'react'
import API from '../../../utility/axios';
import { handleSuccess, handleError } from '../../../utility/ToastCustom.jsx';
import { useNavigate } from 'react-router-dom';

const useUpdateUser = (email) => {

    const navigate = useNavigate(); 
    const [fetchUserData, setfetchUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(email, "use edit user");

const headers = {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                },
                params: {
                    email: email
                },
            }
    const fetchtoBeUpdatedUser = async () => {
        try {
            

            const response = await API.get(`/hr/updateuser`, headers);
            const data = response.data[0];
            console.log(data);
            setfetchUserData(data);
            setLoading(false)

        } catch (error) {
            setError(error)
        }


    }

    useEffect(() => {
        fetchtoBeUpdatedUser();
    }, []);

    // const [formData,setFormData] = useState(null);

    const updatedFormData = (e)=>{

        setfetchUserData(prev => {
            switch(e.target.name){
                case "name" : 
                    return {...prev,name:e.target.value}
                case "email" : 
                    return {...prev,email:e.target.value}
                case "userRole" : 
                    return {...prev,userRole:e.target.value}
                default:
                    return prev
            }
        });

        // console.log(userEditData,"<====formData")
        


    }

    const updateUserData = async (e)=>{
        e.preventDefault();
        try{
            const response = await API.put("/hr/updateuser",fetchUserData,headers);
            const data = response.data;
            handleSuccess(data.message)
            setTimeout(() => {
                navigate("/hr/manageusers");
            }, 1000);
            
            // console.log(response,"response");
        }catch(error){
            // console.log(error,"error", error.status);
            error.status=="500" && handleError(error.response.data.error.codeName)
            error.status=="400" && handleError(error.response.data.error.details[0].message)
        }

    }
    return { fetchUserData, loading, error, updatedFormData, updateUserData }
}

export default useUpdateUser