import React from 'react';
import MarkAttandance from './MarkAttandance.jsx';
import useMarkAttandance from "../components/hooks/useMarkAttandance.jsx";

const Attandance = () => {
  const {AttandanceSummarydata, Loading,refetch} = useMarkAttandance();
  
  console.log(AttandanceSummarydata,"Attandance.jsx");
  return (
    <>
       <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Attandance</p>
      </div>
      <div className='mt-5 w-[60%] bg-gray-300 rounded p-3'>
          <MarkAttandance refetch={refetch}/>
        </div>
      <div className='mt-10'>
          <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Attandance Summary</p>

        </div>
        
        <div className='mt-5'>
          <table className=''>
            <thead className='border-y-1 border-y-gray-500 text-gray-500'>
              <tr>
                <th className='w-[4rem] p-2'>S.No.</th>
                <th className='w-[14rem] '>Punch In</th>
                <th className='w-[14rem] '>Punch Out</th>
                <th className='w-[11rem] '>Duration</th>                             
              </tr>
            </thead>
            <tbody className='text-center text-gray-700'>
              
              {
                Loading ? (<><tr><td colSpan={4}><p>No Data Found</p></td></tr></>) : AttandanceSummarydata?.map((data,index)=>{
                  return (
              
                      <tr key={data._id}>
                <td className='p-1'>{index+1}</td>
                <td>{data.punchInValue && new Date(data.punchInValue).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })} </td>
                <td>{data.punchOutValue && new Date(data.punchOutValue).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })} </td>
                <td>{data.Workinghours && data.Workinghours} Hr & {data.Workingminutes && data.Workingminutes} mins</td>
              </tr>
             
                  ) 
                  
                })
              }
              
              
              
            </tbody>
          </table>

        </div>
    
    </>
  )
}

export default Attandance