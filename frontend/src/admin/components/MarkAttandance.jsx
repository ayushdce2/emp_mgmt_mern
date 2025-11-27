import React from 'react';
import AttendanceChart from './AttendanceChart.jsx';
import useMarkAttandance from './hooks/useMarkAttandance.jsx';

const MarkAttandance = () => {
    const { MarkTodaysAttandance, buttontext, punchInValue,punchOutValue,totalWorkingHours} = useMarkAttandance();
    console.log(buttontext,"buttonText")
  return (
    <>
     <div className='flex justify-between p-3'>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-[heading2] text-2xl'>Mark Today's Attandance</p>
          <p className='text-lg text-gray-600'>Punch In at <span className='text-sm'>{punchInValue}</span></p>
          <p className='text-lg text-gray-600'>Punch Out at <span className='text-sm'>{punchOutValue}</span></p>
          <button className='bg-gray-700 text-white rounded p-2' onClick={MarkTodaysAttandance}>{buttontext}</button>
        </div>
        <div>
          <AttendanceChart totalWorkingHours={totalWorkingHours}/>
        </div>
       </div>
    </>
  )
}

export default MarkAttandance