import React,{useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import dashboard from '../assets/mdi--view-dashboard-outline.svg';
import leave from "../assets/fluent-mdl2--vacation.svg";
import salary from "../assets/mdi--rupee.svg";
import task from "../assets/mdi--calendar-task-outline.svg";
import announcement from "../assets/mdi--announcement-outline.svg";
import profile from "../assets/mdi--user-outline.svg";
import setting from "../assets/mdi--settings-outline.svg";
import attendance from "../assets/mdi--clock-outline.svg";
import {useUserDetails} from "../../utility/UserDetailsContext.jsx";
import Messaging_icon from "../assets/mdi--chat-outline.svg"; 

const Sidebar = ({MobSidebarTogglerFunc}) => {
    const { pathname } = useLocation();
    // console.log(pathname)
const { userProfileDetails, Loading, error } = useUserDetails();

     if(Loading){
        return (<div className=' h-screen bg-gray-300 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="./images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-2xl'>Loading</p></div>)
    }
  if (error) return <p>Error loading profile</p>;
  const [openSubmenu,setOpenSubmenu] = useState(null);
// console.log("sidebar")

    return (
        <>

            <div className=' p-3 h-[3.56rem] relative'>
                <p className='font-(family-name:--heading1)  text-2xl'>Hi, <span className='font-bold'>{userProfileDetails[0].name}</span><img src="/images/radix-icons--cross-2.svg" onClick={MobSidebarTogglerFunc} className='md:hidden absolute right-2 top-1 w-6 bg-gray-300 rounded' /> </p>
            </div>
            <div className=' h-[calc(100vh-3.56rem)]  border-r-gray-950 p-3'>
                <ul className='font-[heading2] tracking-wide '>
                    <li><Link to={"/hr"} className={`flex gap-2 items-center p-2 mb-1  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr" && "bg-gray-400 hover:bg-gray-400"} `} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "dashboard" ? null : "dashboard")}}><img src={dashboard} className='w-5 h-5' /><p>Dashboard</p></Link></li>
                    <li><Link to={"/hr/leave"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/leave" && "bg-gray-400 hover:bg-gray-400"  } `} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "leave" ? null : "leave")}}><img src={leave} className='w-5 h-5' /><p>Leave</p></Link></li>
                    <li><Link to={"/hr/attandance"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/attandance" && "bg-gray-400 hover:bg-gray-400"  } `} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "attandance" ? null : "attandance")}}><img src='/images/clarity--employee-line.svg' className='w-5 h-5' /><p>Attandance</p></Link></li>
                    <li><Link to={"/hr/messaging"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/messaging" && "bg-gray-400 hover:bg-gray-400"  } `} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "messaging" ? null : "messaging")}}><img src={Messaging_icon} className='w-5 h-5' /><p>Messaging</p></Link></li>
                    <li><Link to={"/hr/announcement"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/announcement" && "bg-gray-400 hover:bg-gray-400"  } `} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "announcement" ? null : "announcement")}}><img src={announcement} className='w-5 h-5' /><p>Announcement</p></Link></li>
                    
                    <li><Link to={"/hr/manageusers"}className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${(pathname=="/hr/manageusers" || pathname=="/hr/manageusers" || pathname=="/hr/manageleaves") && "bg-gray-400 hover:bg-gray-400"  } `} onClick={()=>{setOpenSubmenu(openSubmenu === "manage" ? null : "manage");MobSidebarTogglerFunc();}}><img src="/images/clarity--employee-group-line.svg" className='w-5 h-5' /><p>Manage</p></Link></li>
                    {openSubmenu === "manage" && (
                        <ul>
                            <li><Link to={"/hr/manageusers"} className={`flex gap-2 items-center p-2 mt-1 text-sm pl-5 hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/manageusers" && "bg-gray-400 hover:bg-gray-400"  } `} onClick={MobSidebarTogglerFunc}><img src="/images/clarity--employee-group-line.svg" className='w-4 h-4' /><p>Manage Users</p></Link></li>
                            <li><Link to={"/hr/manageleaves"} className={`flex gap-2 items-center p-2 mb-1 text-sm pl-5 hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/manageleaves" && "bg-gray-400 hover:bg-gray-400"  } `} onClick={MobSidebarTogglerFunc}><img src="/images/clarity--employee-group-line.svg" className='w-4 h-4' /><p>Manage Leaves</p></Link></li>
                        </ul>
                    )}
                    <li><Link to={"/hr/profile"} className={`flex gap-2 items-center p-2  hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/profile" && "bg-gray-400 hover:bg-gray-400"  }`} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "profile" ? null : "profile")}}><img src={profile} className='w-5 h-5' /><p>Profile</p></Link></li>
                    <li><Link to={"/hr/settings"} className={`flex gap-2 items-center p-2 hover:bg-gray-200 ease-in duration-300 rounded ${pathname=="/hr/settings" && "bg-gray-400 hover:bg-gray-400"  }`} onClick={()=>{MobSidebarTogglerFunc();setOpenSubmenu(openSubmenu === "settings" ? null : "settings")}}><img src={setting} className='w-5 h-5' /><p>Settings</p></Link></li>
                </ul>
            </div>

        </>
    )
}

export default Sidebar