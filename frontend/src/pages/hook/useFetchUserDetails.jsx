import React,{useState,useEffect} from 'react';
import API from "../../utility/axios.jsx";

const useFetchUserDetails = () => {
  
      const [userProfileDetails,setUserProfileDetails]=useState([]);

      const fetchUserProfileDetails = async ()=>{
    try{
      const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }
    // const token = localStorage.getItem("token");
    const response = await API.get("/user/profile",headers);
    const data = response.data;
    setUserProfileDetails(data);
    // console.log(data,"useFetchUserDetails");
  }catch(error){
    console.log(error);
  }
  }
  useEffect(()=>{
    fetchUserProfileDetails();
  },[])
  
    return {userProfileDetails}
}

export default useFetchUserDetails