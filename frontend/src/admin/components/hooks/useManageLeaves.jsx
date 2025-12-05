import React, { useEffect, useState } from 'react'
import API from '../../../utility/axios';

const useManageLeaves = () => {
    const [loading,setLoading]=useState();
    const [error,setError] = useState();
    const [allLeaveData,setAllLeaveData] = useState();
    // const [leaveStatus,setLeaveStatus] = useState();

    const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }

    const getUserLeaveStatus = async (e)=>{
        
        const leaveStatus = {[e.target.name]:e.target.value,id:e.target.id};
        // setLeaveStatus(leaveStatus);
        // console.log(leaveStatus,"leaveStatus");

        try{
            const response = await API.put("/admin/leave/manage/",leaveStatus,headers);
            const data = response.data;
            console.log(data,"data");
            await fetchallLeaveData();

        }catch(error){
            console.log(error,"error");
        }
    }
 const fetchallLeaveData = async ()=>{
        try{
            const response =  await API.get("/admin/leave/getallusersleave",headers);
            const data = await response.data;
            console.log(data.AllUsersLeaveDetails,"data");
            setAllLeaveData(data.AllUsersLeaveDetails)
            setLoading(false)
        }catch(error){
            console.log(error);
            setError(error)
        }
    }
    useEffect(()=>{
fetchallLeaveData();
    },[])
  return {loading,error,allLeaveData,getUserLeaveStatus}
}

export default useManageLeaves