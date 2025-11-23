import React, { useEffect, useState } from 'react'
import API from '../../../utility/axios.jsx';

const UsersListFunction = () => {
    const [UsersList, setUsersList]= useState(null);
          const [Loading,setLoading] = useState(true);
            const [error, setError] = useState(null);
    
    const fetchUsersList = async ()=>{
        try{
      const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }
    // const token = localStorage.getItem("token");
    const response = await API.get("/admin/userlist",headers);
    const data = response.data;
    setUsersList(data);
    setLoading(false)
    // console.log(data,"fetchUsersList");
  }catch(error){
    console.log(error);
    setError(error)
  }
    }

    useEffect(()=>{
        fetchUsersList();
    },[])

  return {UsersList, Loading, error}
}

export default UsersListFunction