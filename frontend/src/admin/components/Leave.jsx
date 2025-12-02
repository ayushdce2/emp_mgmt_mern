import React from 'react'

const Leave = () => {
  return (
    <>
         <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Leave</p>
      </div>
      <div className='flex justify-between items-start'>

        <div className='w-[49%] py-3'>
          <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Apply Leave</p>
          
                  </div>
        </div>
      <div className='w-[49%] py-3'>
        <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Apply Balance</p>
          
                  </div>
<div className='flex flex-wrap gap-2 py-3'>
        
        <div className='border-1 border-gray-400  rounded w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Casual Leave</p>
          </div>
          <div className='p-2 text-gray-600'>
            10 Days Used
          </div>
        </div>

        <div className='border-1 border-gray-400  rounded w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Sick Leave</p>
          </div>
          <div className='p-2 text-gray-600'>
            10 Days Used
          </div>
        </div>

        <div className='border-1 border-gray-400  rounded w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Absentee</p>
          </div>
          <div className='p-2 text-gray-600'>
            10 Days Used
          </div>
        </div>

        <div className='border-1 border-gray-400  rounded w-[12rem]'>
          <div className='rounded bg-[#ddd] p-2'>
            <p className=' font-[heading2] tracking-wide text-gray-800'>Work From Home</p>
          </div>
          <div className='p-2 text-gray-600'>
            10 Days Used
          </div>
        </div>

      </div>
      </div>
        

      </div>
      <div className='py-3'>
          <div>
                    <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Leave Summary</p>
          
                  </div>
                  <div className='py-3'>
                    <table>
                      <thead className='border-y-1 border-y-gray-500 text-gray-500'>
                        <tr>
                          <th className='w-[3rem] p-2'>S.No.</th>
                          <th className='w-[10rem]'>Leave Type</th>
                          <th className='w-[10rem]'>Dates requested</th>
                          <th className='w-[10rem]'>Applied On</th>
                          <th className='w-[10rem]'>Status</th>
                          <th className=''>Reason</th>
                        </tr>
                      </thead>
                      <tbody className='text-center text-gray-700'>
                        <tr>
                          <td>1</td>
                          <td>Sick</td>
                          <td>10 Nov 2025</td>
                          <td>10 NOv 2025</td>
                          <td>Waiting</td>
                          <td>feeling sick . . . . . </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        </div>
      
    </>
  )
}

export default Leave