import React from 'react';
import AttendanceChart from './AttendanceChart.jsx';
import useMarkAttandance from './hooks/useMarkAttandance.jsx';

const MarkAttandance = ({refetch}) => {
const finalRefetch = refetch ? refetch : (() => {});
    const { MarkTodaysAttandance, buttontext, punchInValue,punchOutValue,totalWorkingHours} = useMarkAttandance();
    // console.log(buttontext,"<==buttonText",punchInValue,"<==punchInValue",punchOutValue,"<==punchOutValue",totalWorkingHours,"<==totalWorkingHours")

    return (
    <>
     <div className='flex justify-between p-3'>
        <div className='flex flex-col gap-4 md:gap-1 items-center justify-between'>
          <p className='font-[heading2] text-xl'>Mark Today's Attandance</p>
          <p className='text-lg text-gray-600'>Punch In at <span className='text-sm'>{punchInValue && new Date(punchInValue).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}</span></p>
          <p className='text-lg text-gray-600'>Punch Out at <span className='text-sm'>{punchOutValue && (new Date(punchOutValue).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }) )}</span></p>
          <button className='bg-gray-700 text-white rounded p-2' onClick={async ()=>{await MarkTodaysAttandance(); finalRefetch()}}>{buttontext}</button>
        </div>
        <div>
          <AttendanceChart totalWorkingHours={totalWorkingHours}/>
        </div>
       </div>
    </>
  )
}

export default MarkAttandance