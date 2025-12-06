import React from 'react';
import useLeaveApply from './hooks/useLeaveApply';
import useLeaveSummary from './hooks/useLeaveSummary';

const Leave = () => {
    const {leaveSummary, loading, error,refetch} = useLeaveSummary();
    
  const {formData, fetchFormData, submitFormData} = useLeaveApply({refetch});
if(loading){
  return "Loading"
}

// console.log(leaveSummary[0],"leaveSummary")


  
  return (
    <>
         <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Leave</p>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-start'>

        <div className='w-full md:w-[49%] py-3'>
          <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Apply Leave</p>
          
                  </div>
                  <div>
                    <form className='flex flex-col gap-3' onSubmit={submitFormData}>
                      <div className='flex items-center gap-3 mt-3'>
                      <label className=' text-gray-700 tracking-wider w-[7rem]  text-nowrap'>Leave Type</label>
                      <select onChange={fetchFormData} name='leave_type' className='w-[70%] outline-0 border-b-2 text-gray-700 tracking-wider border-b-gray-400 p-2'>
                        <option>Leave Type</option>
                        <option value={"sick"}>Sick</option>
                        <option value={"casual"}>Casual</option>
                        <option value={"workfromhome"}>Work From Home</option>
                      </select>
                      </div>
<div className='flex items-center gap-3'>
  <label className=' text-gray-700 tracking-wider w-[7rem] text-nowrap'>Date From</label>
  <input type='date' name="date_from" onChange={fetchFormData} className='outline-0 p-2 border-b-2 text-gray-700 tracking-wider border-b-gray-400 w-[70%]'/>
</div>
<div className='flex items-center gap-3'>
  <label className=' text-gray-700 tracking-wider w-[7rem]'>Date To</label>
  <input type='date' name='date_to' onChange={fetchFormData} className='w-[70%] outline-0 p-2 border-b-2 text-gray-700 tracking-wider border-b-gray-400'/>
</div>
<div className='flex items-center gap-3'>
  <label className=' text-gray-700 tracking-wider w-[7rem]  text-nowrap'>Leave Reason</label>
  <input type='text' name="leave_reason" onChange={fetchFormData}  placeholder='Leave Reason' className='w-[70%] mb-1 h-10 p-2 outline-0 border-b-2 text-gray-700 tracking-wider border-b-gray-400'/>
</div>                      
                      
            
            <div className='flex justify-center mt-3'>
            <button type='submit' className='p-2 bg-gray-500 rounded text-gray-300 cursor-pointer'>Submit Leave Request</button>
          </div>
          </form>
                  </div>
        </div>
      <div className='w-full md:w-[49%] py-3'>
        <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Leave Balance</p>
          
                  </div>
<div className='flex flex-wrap gap-2 justify-center py-3'>
        
        <div className='border-1 border-gray-400  rounded w-[80%] md:w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Casual Leave</p>
          </div>
          <div className='p-2 text-gray-600'>
            {leaveSummary[0] ? leaveSummary[0]?.total_casual_leaves : 3}/3 Days Available
          </div>
        </div>

        <div className='border-1 border-gray-400  rounded w-[80%] md:w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Sick Leave</p>
          </div>
          <div className='p-2 text-gray-600'>
            {leaveSummary[0] ? leaveSummary[0]?.total_sick_leaves : 3}/3 Days Available
          </div>
        </div>

        <div className='border-1 border-gray-400  rounded  w-[80%] md:w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Absentee</p>
          </div>
          <div className='p-2 text-gray-600'>
            {leaveSummary[0] ? leaveSummary[0]?.total_absent : 0} Days 
          </div>
        </div>

        <div className='border-1 border-gray-400  rounded  w-[80%] md:w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Work From Home</p>
          </div>
          <div className='p-2 text-gray-600'>
            {leaveSummary[0] ? leaveSummary[0]?.total_workfromhome_leaves : 3}/3 Days Available
          </div>
        </div>

      </div>
      </div>
        

      </div>
      <div className='py-3'>
          <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Leave Summary</p>
          
                  </div>
                  <div className='py-3 overflow-auto w-full'>
                    {
                      loading ? "Loading . . . ." : (
                        <>
                        <table className='text-nowrap'>
                      <thead className='border-y-1 border-y-gray-500 text-gray-500'>
                        <tr>
                          <th className='w-[3rem] p-2'>S.No.</th>
                          <th className='w-[10rem] p-2'>Leave Type</th>
                          <th className='w-[10rem] p-2'>Date From</th>
                          <th className='w-[10rem] p-2'>Date To</th>
                          <th className='w-[10rem] p-2'>Applied On</th>
                          <th className='w-[10rem] p-2'>Total Leave Days</th>
                          <th className='w-[10rem] p-2'>Status</th>
                          <th className='p-2'>Reason</th>
                        </tr>
                      </thead>
                      <tbody className='text-center text-gray-700'>
                        {
                          leaveSummary ? (leaveSummary?.map((data,index)=>{
                            return(
                            <tr key={data._id}>
                          <td className='p-1'>{index+1}</td>
                          <td className='p-1'>{ data.leave_type}</td>
                          <td className='p-1'>{ new Date(data.date_from).toLocaleString("en-US", { dateStyle: "medium" })}</td>
                          <td className='p-1'>{ new Date(data.date_to).toLocaleString("en-US", { dateStyle: "medium"})}</td>
                          <td className='p-1'>{ new Date(data.createdAt).toLocaleString("en-US", { dateStyle: "medium" })}</td>
                          <td className='p-1'>{ data.total_leave_days}</td>
                          <td className={`p-1 font-bold ${(data.leave_status=="approve") ? "text-green-700" : (data.leave_status=="waiting")? "text-yellow-600" : "text-red-700"}`}>{(data.leave_status).charAt(0).toUpperCase() + (data.leave_status).slice(1)}</td>
                          <td className='p-1'>{data.leave_reason}</td>
                        </tr>
                            )
                          })) : (<tr><td>No Data Found</td></tr>)
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

export default Leave