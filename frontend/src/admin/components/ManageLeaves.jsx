import React from 'react';
import useLeaveSummary from './hooks/useLeaveSummary';

const ManageLeaves = () => {
    const {leaveSummary, loading, error,refetch} = useLeaveSummary();
    if(loading){
  return "Loading"
}
  return (
    <>
        <div className='py-3'>
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
                          <th className='w-[3rem] p-2'>S.No.</th>
                          <th className='w-[10rem] p-2'>Employee Name</th>
                          <th className='w-[10rem] p-2'>Leave Type</th>
                          <th className='w-[10rem] p-2'>Date From</th>
                          <th className='w-[10rem] p-2'>Date To</th>
                          <th className='w-[10rem] p-2'>Applied On</th>
                          <th className='w-[10rem] p-2'>Status</th>
                          <th className='p-2'>Reason</th>
                        </tr>
                      </thead>
                      <tbody className='text-center text-gray-700'>
                        {
                          leaveSummary ? (leaveSummary?.map((data,index)=>{
                            return(
                            <tr>
                          <td className='p-1'>{index+1}</td>
                          <td className='p-1'>{ data.email}</td>
                          <td className='p-1'>{ data.leave_type}</td>
                          <td className='p-1'>{ new Date(data.date_from).toLocaleString("en-US", { dateStyle: "medium" })}</td>
                          <td className='p-1'>{ new Date(data.date_to).toLocaleString("en-US", { dateStyle: "medium"})}</td>
                          <td className='p-1'>{ new Date(data.createdAt).toLocaleString("en-US", { dateStyle: "medium" })}</td>
                          <td className='p-1'>
                            <select >
                                <option>Select Status</option>
                                <option className='text-green-600' value={"approve"}>Approve</option>
                                <option className='text-red-600' value={"reject"}>Reject</option>
                            </select>
                          </td>
                          <td className='p-1'>{data.leave_reason}</td>
                        </tr>
                            )
                          })) : "No Data Found"
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