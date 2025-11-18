import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../../utility/ToastCustom.jsx';

const useLogout = () => {
  
  const [loggedInUser,setloggedInUser]=useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    const storedUser = localStorage.getItem("loggedinuser");
    setloggedInUser(storedUser);
  });

  const handleLogout=()=>{


    localStorage.removeItem("loggedinuser");
    localStorage.removeItem("token");


    handleSuccess("LoggedOut Successfully");
        setTimeout(() => {
        navigate("/login");
    }, 1000);



  }


  
    return {loggedInUser, handleLogout}
}

export default useLogout