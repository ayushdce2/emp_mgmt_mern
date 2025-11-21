import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Sidebar from "./components/Sidebar.jsx";
import Leave  from './components/Leave.jsx';
import Attendance from './components/Attendance.jsx';
import Ticket from "./components/Ticket.jsx";
import Announcement from "./components/Announcement.jsx";
import Profile from "./components/Profile.jsx";
import Settings from "./components/Settings.jsx";


const EmployeeHome = () => {




    return (
        <>
            <div className='flex h-screen'>
                <div className='overflow-auto w-[18vw] h-screen '>
                    <Sidebar />
                </div>
                <div className=' h-full w-full '>
                    {/* Main */}
                    <div className=''>
                        <div className='flex ml-auto p-4 justify-end gap-4'>
                            <div className=' w-6 h-6 flex items-center justify-center  overflow-hidden'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>

                            </div>
                            <div className=' w-6 h-6 flex items-center justify-center overflow-hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>

                            </div>

                            <div className='border-1 rounded-[100%] w-6 h-6 flex items-center justify-center overflow-hidden'>
                                <img src='./images/employee.png' className='w-[80%] h-[80%]' />
                            </div>





                        </div>
                    </div>
                    <div className='bg-gray-200 h-[calc(100vh-3.6rem)] overflow-auto p-5'>
                        <Routes>
                            <Route path={"/"} element={<Dashboard />}></Route>
                            <Route path={"/leave"} element={<Leave />}></Route>
                            <Route path={"/attendance"} element={<Attendance />}></Route>
                            <Route path={"/ticket"} element={<Ticket />}></Route>
                            <Route path={"/announcement"} element={<Announcement />}></Route>
                            <Route path={"/profile"} element={<Profile />}></Route>
                            <Route path={"/settings"} element={<Settings />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeHome