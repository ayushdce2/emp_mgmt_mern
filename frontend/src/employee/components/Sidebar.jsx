import React from 'react'
import { Link, useLocation } from "react-router-dom";
import dashboard from '../assets/mdi--view-dashboard-outline.svg';
import leave from "../assets/fluent-mdl2--vacation.svg";
import salary from "../assets/mdi--rupee.svg";
import task from "../assets/mdi--calendar-task-outline.svg";
import announcement from "../assets/mdi--announcement-outline.svg";
import profile from "../assets/mdi--account-edit-outline.svg";
import setting from "../assets/mdi--settings-outline.svg";
import attendance from "../assets/mdi--clock-outline.svg";
import {useUserDetails} from "./hooks/EmpDetailsContext.jsx"; 

const Sidebar = () => {
    const { pathname } = useLocation();
    // console.log(pathname)
const { userProfileDetails, Loading, error } = useUserDetails();

 if (Loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;
// console.log(userProfileDetails, Loading, error)
    return (
        <>

            <div className=' p-3 h-[3.56rem]'>
                <p className='font-(family-name:--heading1)  text-2xl'>Hi, <span className='font-bold'>{userProfileDetails[0].name}</span> </p>
            </div>
            <div className=' h-[calc(100vh-3.56rem)]  border-r-gray-950 p-3'>
                <ul className='font-[heading2] tracking-wide '>
                    <li><Link to={"/employee"} className={`flex gap-2 items-center p-2 mb-1  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee" && "bg-gray-400 hover:bg-gray-400"} `}><img src={dashboard} className='w-5 h-5' /><p>Dashboard</p></Link></li>
                    <li><Link to={"/employee/leave"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee/leave" && "bg-gray-400 hover:bg-gray-400"  } `}><img src={leave} className='w-5 h-5' /><p>Leave</p></Link></li>
                    <li><Link to={"/employee/attendance"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee/attendance" && "bg-gray-400 hover:bg-gray-400"  }`}><img src={attendance} className='w-5 h-5' /><p>Attendance</p></Link></li>
                    <li><Link to={"/employee/ticket"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee/ticket" && "bg-gray-400 hover:bg-gray-400"  }`}><img src={task} className='w-5 h-5' /><p>Ticket</p></Link></li>
                    {/* <li><Link to={"/"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded '><img src={task} className='w-5 h-5' /><p>Assigned tasks</p></Link></li> */}
                    <li><Link to={"/employee/announcement"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee/announcement" && "bg-gray-400 hover:bg-gray-400"  }`}><img src={announcement} className='w-5 h-5' /><p>Announcements</p></Link></li>
                    <li><Link to={"/employee/profile"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee/profile" && "bg-gray-400 hover:bg-gray-400"  }`}><img src={profile} className='w-5 h-5' /><p>Profile</p></Link></li>
                    <li><Link to={"/employee/settings"} className={`flex gap-2 items-center p-2 hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/employee/settings" && "bg-gray-400 hover:bg-gray-400"  }`}><img src={setting} className='w-5 h-5' /><p>Settings</p></Link></li>
                </ul>
            </div>

        </>
    )
}

export default Sidebar