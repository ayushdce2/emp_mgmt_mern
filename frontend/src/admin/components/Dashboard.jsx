import React from 'react';
import LeaveChart from "./LeaveChart.jsx";
import phone_icon from "../assets/line-md--phone.svg";
import message_icon from "../assets/tabler--message.svg";
import chat_icon from "../assets/mdi--chat-outline.svg";
import AttendanceChart from './AttendanceChart.jsx';
import {useUserDetails} from "../../utility/UserDetailsContext.jsx"; 


const Dashboard = () => {
  const { userProfileDetails, Loading, error } = useUserDetails();
       if(Loading){
        return (<div className=' h-screen bg-gray-300 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="./images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-2xl'>Loading</p></div>)
    }
    if (error) return <p>Error loading profile</p>;
    
  return (
    <>
      <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Employee Dashboard</p>
        
      </div>

      <div className='mb-5'></div>
<div className=' flex flex-col md:flex-row gap-2 justify-around'>
      <div className='bg-white rounded-lg w-full md:w-[30rem]'>
          <div className='bg-gray-700 flex items-center p-3 gap-2 rounded-t-lg'>
            <div className='w-15 h-15 border border-white rounded-full flex items-center justify-center'>
              <img src='./images/employee.png' className='w-[80%] h-[80%]' />
            </div>
            <div className='text-white'>
              <p>{userProfileDetails[0].name}</p>
              <p>Senior Graphic Designer</p>
            </div>

          </div>
          <div className='p-3 rounded-lg'>
            <div className='flex gap-3 mb-3'>
              <p className='text-gray-500'>Phone Number</p>
              <p>+91 9999999999</p>
            </div>
            <div className='flex gap-3 mb-3'>
              <p className='text-gray-500'>Email Address</p>
              <p>{userProfileDetails[0].email}</p>
            </div>
            <div className='flex gap-3 mb-3'>
              <p className='text-gray-500'>Office Location</p>
              <p>India</p>
            </div>
            <div className='flex gap-3'>
              <p className='text-gray-500'>Joining</p>
              <p>8 Aug 2024</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg w-full md:w-[35rem]'>
       <div className='flex justify-between p-3'>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-[heading2] text-2xl'>Mark Today's Attendance</p>
          <p className='text-lg text-gray-600'>Punch In at 10:00AM</p>
          <button className='bg-gray-700 text-white rounded p-2'>Punch Out</button>
        </div>
        <div>
          <AttendanceChart/>
        </div>
       </div>
  
        </div>
        </div>

        <div className='mb-10'></div>
        <div>
          <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Leave Details</p>

        </div>
        <div className='mb-3'></div>
      
      <div className='grid grid-cols-[1fr_2fr] gap-5'>

        <div className='bg-white rounded-lg'>
          <div className='p-3 border-b-2 border-gray-300'>
            <p className='font-[heading2] text-lg'>Leave Report - 2025</p>
          </div>
          <div className='flex justify-around p-3'>
            <div className='w-[30%]'>
              <p className='text-gray-500'>Total Leaves</p>
              <p className='font-bold'>24</p>
            </div>
            <div className='w-[50%]'>
              <p className='text-gray-500'>Leaves Taken</p>
              <p className='font-bold'>10</p>
            </div>

          </div>
          <div className='flex  justify-around p-3'>
            <div className='w-[30%]'>
              <p className='text-gray-500'>Absent</p>
              <p className='font-bold'>24</p>
            </div>
            <div className='w-[50%]'>
              <p className='text-gray-500'>Request Pending</p>
              <p className='font-bold'>10</p>
            </div>

          </div>
          <div className='flex  justify-around p-3'>
            <div className='w-[30%]'>
              <p className='text-gray-500'>Working Days</p>
              <p className='font-bold'>24</p>
            </div>
            <div className='w-[50%]'>
              <p className='text-gray-500'>Days of Deduction</p>
              <p className='font-bold'>10</p>
            </div>

          </div>
        </div>

        <div className='bg-white rounded-xl'>
          {/* chart */}
          <LeaveChart/>
        </div>

        

      </div>
              {/* <div className='mb-10'></div>
        <div>
          <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Team Members</p>

        </div>
        <div className='mb-3'></div>
        <div className='bg-white w-[40%] p-3 rounded'>

          <div className='flex justify-between mb-5'>
          <div className='flex  items-center gap-2'>
            <div className='w-12 h-12 border-2 rounded-full flex items-center justify-center'>
              <img src='./images/employee.png' className='w-[80%] h-[80%]' />
            </div>
            <div>
              <p className='font-[heading1]'>Alexander</p>
              <p className='text-gray-600'>UI/UX Designer</p>
            </div>
          </div>
          <div className='flex gap-2  items-center'>
            <img src={phone_icon} className='w-7 h-7' />
            <img src={message_icon} className='w-7 h-7' />
            <img src={chat_icon} className='w-7 h-7' />
          </div>
          </div>

          <div className='flex justify-between mb-5'>
          <div className='flex  items-center gap-2'>
            <div className='w-12 h-12 border-2 rounded-full flex items-center justify-center'>
              <img src='./images/employee.png' className='w-[80%] h-[80%]' />
            </div>
            <div>
              <p className='font-[heading1]'>Alexander</p>
              <p className='text-gray-600'>UI/UX Designer</p>
            </div>
          </div>
          <div className='flex gap-2  items-center'>
            <img src={phone_icon} className='w-7 h-7' />
            <img src={message_icon} className='w-7 h-7' />
            <img src={chat_icon} className='w-7 h-7' />
          </div>
          </div>

          <div className='flex justify-between mb-5'>
          <div className='flex  items-center gap-2'>
            <div className='w-12 h-12 border-2 rounded-full flex items-center justify-center'>
              <img src='./images/employee.png' className='w-[80%] h-[80%]' />
            </div>
            <div>
              <p className='font-[heading1]'>Alexander</p>
              <p className='text-gray-600'>UI/UX Designer</p>
            </div>
          </div>
          <div className='flex gap-2  items-center'>
            <img src={phone_icon} className='w-7 h-7' />
            <img src={message_icon} className='w-7 h-7' />
            <img src={chat_icon} className='w-7 h-7' />
          </div>
          </div>

          <div className='flex justify-between mb-5'>
          <div className='flex  items-center gap-2'>
            <div className='w-12 h-12 border-2 rounded-full flex items-center justify-center'>
              <img src='./images/employee.png' className='w-[80%] h-[80%]' />
            </div>
            <div>
              <p className='font-[heading1]'>Alexander</p>
              <p className='text-gray-600'>UI/UX Designer</p>
            </div>
          </div>
          <div className='flex gap-2  items-center'>
            <img src={phone_icon} className='w-7 h-7' />
            <img src={message_icon} className='w-7 h-7' />
            <img src={chat_icon} className='w-7 h-7' />
          </div>
          </div>

          <div className='flex justify-between'>
          <div className='flex  items-center gap-2'>
            <div className='w-12 h-12 border-2 rounded-full flex items-center justify-center'>
              <img src='./images/employee.png' className='w-[80%] h-[80%]' />
            </div>
            <div>
              <p className='font-[heading1]'>Alexander</p>
              <p className='text-gray-600'>UI/UX Designer</p>
            </div>
          </div>
          <div className='flex gap-2  items-center'>
            <img src={phone_icon} className='w-7 h-7' />
            <img src={message_icon} className='w-7 h-7' />
            <img src={chat_icon} className='w-7 h-7' />
          </div>
          </div>

          

        </div> */}


    </>
  )
}



export default Dashboard