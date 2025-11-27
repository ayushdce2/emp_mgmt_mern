import React from 'react';
import MarkAttandance from './MarkAttandance.jsx';

const Attandance = () => {
  return (
    <>
       <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Attandance</p>
      </div>
      <div className='mt-5 w-[50%] bg-gray-300 rounded p-3'>
          <MarkAttandance/>
        </div>
      <div className='mt-10'>
          <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Attandance Summary</p>

        </div>
        
        <div className='mt-5'>
          <table className=''>
            <thead className='border-y-1 border-y-gray-500 text-gray-500'>
              <tr>
                <th className='w-[4rem] p-2'>S.No.</th>
                <th className='w-[11rem] '>Punch In</th>
                <th className='w-[11rem] '>Punch Out</th>
                <th className='w-[11rem] '>Duration</th>
                <th className='w-[9rem] '>Location</th>                                
              </tr>
            </thead>
            <tbody className='text-center text-gray-700'>
              <tr>
                <td className='p-1'>1</td>
                <td>29 Mov 6:46pm </td>
                <td>29 Mov 6:46pm </td>
                <td>5 Hr</td>
                <td>Delhi</td>
              </tr>
              
              
            </tbody>
          </table>

        </div>
    
    </>
  )
}

export default Attandance