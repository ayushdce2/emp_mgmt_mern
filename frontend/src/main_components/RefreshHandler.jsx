import React,{useEffect} from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';

function RefreshHandler({setisAuthenticated}) {

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname,"location.pathname")

    useEffect(()=>{
        
        const token = localStorage.getItem("token");
        const loggedinuser = localStorage.getItem("loggedinuser");

        if(token && loggedinuser){
            setisAuthenticated(true);
            if(
                location.pathname === "/" ||
                location.pathname === "/signup" 
            ){
                navigate("/employee",{replace:false});
            }
        }else{
            setisAuthenticated(false);
        }   
    },[location,navigate,setisAuthenticated])
  return (
    null
  )
}

export default RefreshHandler