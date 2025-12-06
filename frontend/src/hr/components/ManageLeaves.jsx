import React from 'react';
import useManageLeaves from "./hooks/useManageLeaves.jsx";

const ManageLeaves = () => {
    const {loading,error,allLeaveData, getUserLeaveStatus} = useManageLeaves();
    if(loading){
  return "Loading"
}
console.log(allLeaveData,"<===allLeaveData")
  return (
    <>
        <div>
          <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Manage Leaves</p>
          
                  </div>
                  <div className='py-3 overflow-auto w-full'>
                    {
                      loading ? "Loading . . . ." : (
                        <>
                        <table className='text-nowrap'>
                      <thead className='border-y-1 border-y-gray-500 text-gray-500'>
                        <tr>
                          <th className=' p-2'>S.No.</th>
                          <th className='w-[4rem] p-2'>Role</th>
                          <th className='w-[10rem] p-2'>Email</th>
                          <th className='w-[6rem] p-2'>Leave Type</th>
                          <th className='w-[10rem] p-2'>Date From</th>
                          <th className='w-[10rem] p-2'>Date To</th>
                          <th className='w-[10rem] p-2'>Applied On</th>
                          <th className='w-[5rem] p-2'>Total Leave Days</th>
                          <th className='w-[10rem] p-2'>Status</th>
                          <th className='p-2'>Reason</th>
                        </tr>
                      </thead>
                      <tbody className='text-center text-gray-700'>
                        {
                          (allLeaveData?.length != 0) ? (allLeaveData?.map((data,index)=>{
                            return(
                            <tr key={data._id}>
                          <td className='p-1'>{index+1}</td>
                          <td className='p-1'>{data.userRole}</td>
                          <td className='p-1'>{ data.email}</td>
                          <td className='p-1'>{ data.leave_type}</td>
                          <td className='p-1'>{ new Date(data.date_from).toLocaleString("en-US", { dateStyle: "medium" })}</td>
                          <td className='p-1'>{ new Date(data.date_to).toLocaleString("en-US", { dateStyle: "medium"})}</td>
                          <td className='p-1'>{ new Date(data.createdAt).toLocaleString("en-US", { dateStyle: "medium" })}</td>
                          <td className='p-1'>{ data.total_leave_days}</td>
                          <td className='p-1'>
                            <select id={data._id} name="UserLeaveStatus" onChange={getUserLeaveStatus} value={data.leave_status} className={`outline-0 bg-[#ddd] rounded p-1 font-bold ${(data.leave_status=="approve") ? "text-green-700" : "text-red-700"}`}>
                                {
                                  data.leave_status=="absent" ? (<option>Absent</option>) :(<>
                                <option>Select Status</option>
                                <option className='text-green-600' value={"approve"}>Approve</option>
                                <option className='text-red-600' value={"reject"}>Reject</option>
                                </>
                                  )
                                }
                                
                            </select>
                          </td>
                          <td className='p-1'>{data.leave_reason}</td>
                        </tr>
                            )
                          })) : (<tr><td colSpan={10} className='p-3'>No Data Found</td></tr>)
                        }
                        
                       
                      </tbody>
                    </table>
                        
                        </>
                      )
                    }
                    
                  </div>
        </div>
    </>
  )
}

export default ManageLeaves