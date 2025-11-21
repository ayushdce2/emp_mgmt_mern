import React, { useState } from 'react'
import API from "../../utility/axios.jsx";
import { useNavigate } from 'react-router-dom';
import {handleSuccess,handleError } from "../../utility/ToastCustom.jsx";

const useLogin = () => {

    const navigate = useNavigate();

    const [loginAllData, setLoginAllData]=useState({email:"",password:""});

    const loginFormData = (e)=>{
        setLoginAllData((prev)=>({...prev,[e.target.name]:e.target.value}));
        // console.log(formData)
    }

    const loginSubmit = async (e)=>{
        e.preventDefault();
        if(loginAllData.email===""||loginAllData.password===""){
        return handleError("All fields required")
    }
        // console.log(loginAllData);

        try{
            const res = await API.post("/auth/login",loginAllData);
            const resJson = await res.data;
            // console.log(resJson,"<----------------resposne LOCAL");
            const {message,success,error,jwtToken,name} =resJson;
            // console.log(message,success,error,jwtToken,name)

            if(success){
                handleSuccess(message);
                localStorage.setItem("token",jwtToken);
                localStorage.setItem("loggedinuser",name);
                
                setTimeout(() => {
                    navigate("/employee");
                }, 1000);
            }


        }catch(error){
            console.log(error);
            error.status == "400" && handleError(error.response.data.error.details[0].message);
            error.status == "403" && handleError(error.response.data.message)
        }
        
    }

    return {loginFormData,loginSubmit}
}

export default useLogin