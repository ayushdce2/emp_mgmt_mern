import React, { useEffect, useState } from 'react';
import API from '../../../utility/axios';
import { handleSuccess, handleError } from '../../../utility/ToastCustom.jsx';

const useLeaveSummary = () => {
    const [leaveSummary,setLeaveSummary]=useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError]=useState();

     const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }

    const fetchLeaveSummary = async ()=>{
        try{
            const response =  await API.get("/user/leave/summary",headers);
            const data = await response.data;
            console.log(data.AllLeaveDetails,"data");
            setLeaveSummary(data.AllLeaveDetails)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchLeaveSummary();
    },[])

  return {leaveSummary, loading, error,refetch:fetchLeaveSummary}
}

export default useLeaveSummary