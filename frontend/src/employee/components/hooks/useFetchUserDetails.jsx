import React,{useState,useEffect,createContext} from 'react';
import API from "../../../utility/axios.jsx";

// export const ThemeContext = createContext();

const useFetchUserDetails = () => {
  
      const [userProfileDetails,setUserProfileDetails]=useState([]);
      const [Loading,setLoading] = useState(true);

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
    setLoading(false)
    // console.log(data,"useFetchUserDetails");
  }catch(error){
    console.log(error);
  }
  }
  useEffect(()=>{
    fetchUserProfileDetails();
  },[])
  
    return {Loading,userProfileDetails}
}

export default useFetchUserDetails