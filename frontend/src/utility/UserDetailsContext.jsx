import React,{createContext, useContext, useEffect, useState} from 'react';
import API from "./axios.jsx";

const UserDetailsContext = createContext();

const UserDetailsProvider  = ({children}) => {
  
      const [userProfileDetails,setUserProfileDetails]=useState(null);
      const [Loading,setLoading] = useState(true);
        const [error, setError] = useState(null);

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
    setError(error)
  }
  }
  useEffect(()=>{
    fetchUserProfileDetails();
  },[])
  
    return (
      <UserDetailsContext.Provider value={{Loading,error, userProfileDetails}}>
        {children}
      </UserDetailsContext.Provider>
    )
}

const useUserDetails = () => {
  const context = useContext(UserDetailsContext);

  if (!context) {
    throw new Error(
      "useUserDetails must be used inside a <UserDetailsProvider> "
    );
  }

  return context;
}

export default UserDetailsContext;
export {UserDetailsProvider, useUserDetails}