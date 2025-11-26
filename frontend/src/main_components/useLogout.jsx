import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utility/ToastCustom.jsx';
import { useUserDetails } from "../utility/UserDetailsContext.jsx";
import API from '../utility/axios.jsx';

const useLogout = () => {

  // const [loggedInUser,setloggedInUser]=useState("");

  const navigate = useNavigate();

  // useEffect(()=>{
  //   const storedUser = localStorage.getItem("loggedinuser");
  //   setloggedInUser(storedUser);
  // });
  const { userProfileDetails } = useUserDetails();

  


  const handleLogout = async () => {
    const _id = userProfileDetails[0]._id;
    const email = userProfileDetails[0].email;
    const loginedOn_data = localStorage.getItem("loginedOn_data");
      // console.log(loginedOn_data,"loginedOn_data")


    try {
      // console.log(email, "email")
      const res = await API.post("/auth/logout", {_id,email,loginedOn_data});
      const resJson = await res.data;
      // console.log(resJson,"<----------------resposne LOCAL");
      const { message, success, error, name, userRole } = resJson;
      // console.log(message,success,error,jwtToken,name, userRole)

      if (success) {
        handleSuccess(message);
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }


    } catch (error) {
      console.log(error);
      // error.status == "400" && handleError(error.response.data.error.details[0].message);
      // error.status == "403" && handleError(error.response.data.message)
    }








  }

  const checkingSessionLogout = () => {

    setTimeout(() => {
      navigate("/");
    }, 20 * 60 * 1000);
  }

  // return {loggedInUser, handleLogout}
  return { handleLogout, checkingSessionLogout }
}



export default useLogout