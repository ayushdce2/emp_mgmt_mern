import React from 'react'
import { Link, useLocation } from "react-router-dom";
import dashboard from '../assets/mdi--view-dashboard-outline.svg';
import leave from "../assets/fluent-mdl2--vacation.svg";
import salary from "../assets/mdi--rupee.svg";
import task from "../assets/mdi--calendar-task-outline.svg";
import announcement from "../assets/mdi--announcement-outline.svg";
import profile from "../assets/mdi--account-edit-outline.svg";
import setting from "../assets/mdi--settings-outline.svg";

const Sidebar = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <>

            <div className=' p-3 h-[3.56rem]'>
                <p className='font-(family-name:--heading1)  text-2xl'>Hi, <span className='font-bold'>Mr. John</span> </p>
            </div>
            <div className=' h-[calc(100vh-3.56rem)]  border-r-gray-950 p-3'>
                <ul className='font-[heading2] tracking-wide '>
                    <li><Link to={"/"} className={`flex gap-2 items-center p-2 mb-1  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/" && "bg-gray-400"} `}><img src={dashboard} className='w-5 h-5' /><p>Dashboard</p></Link></li>
                    <li><Link to={"/leave"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/leave" && "bg-gray-400"  } `}><img src={leave} className='w-5 h-5' /><p>Leave</p></Link></li>
                    <li><Link to={"/"} className='flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded '><img src={salary} className='w-5 h-5' /><p>Salary</p></Link></li>
                    <li><Link to={"/"} className='flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded '><img src={task} className='w-5 h-5' /><p>Assigned tasks</p></Link></li>
                    <li><Link to={"/"} className='flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded '><img src={announcement} className='w-5 h-5' /><p>Announcements</p></Link></li>
                    <li><Link to={"/"} className='flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded '><img src={profile} className='w-5 h-5' /><p>Profile</p></Link></li>
                    <li><Link to={"/"} className='flex gap-2 items-center p-2 hover:bg-gray-200 ease-in duration-300 rounded '><img src={setting} className='w-5 h-5' /><p>Settings</p></Link></li>
                </ul>
            </div>

        </>
    )
}

export default Sidebar