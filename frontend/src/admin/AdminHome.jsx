import React from 'react';
import { Routes, Route,Link } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Sidebar from "./components/Sidebar.jsx";
import Profile from "./components/Profile.jsx";
import ManageUsers from './components/ManageUsers.jsx';
import Settings from "./components/Settings.jsx";
import Attandance from "./components/Attandance.jsx";
import Leave from "./components/Leave.jsx";
import Messaging from "./components/Messaging.jsx";
import Announcement from "./components/Announcement.jsx";
import useLogout from '../main_components/useLogout.jsx';
import useMobToggleSidebar from "./components/hooks/useMobToggleSidebar.jsx";
// import useFetchUserDetails from "./components/hooks/useFetchUserDetails.jsx";
// import {useUserDetails} from "./components/hooks/EmpDetailsContext.jsx";
import {useUserDetails} from "../utility/UserDetailsContext.jsx" ;
import EditUser from './components/EditUser.jsx';

const AdminHome = () => {

  const {  handleLogout,checkingSessionLogout } = useLogout();
    checkingSessionLogout();   
const {mobSidebar,MobSidebarTogglerFunc } = useMobToggleSidebar();
  const { userProfileDetails, Loading, error,loginAgain } = useUserDetails();

//   if(userProfileDetails==null) return handleLogout();
if(loginAgain) return (<div className=' h-screen bg-gray-300 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-2xl'>Login Again</p></div>)
  if (error) return <p>Error loading profile<Link to="/">Login</Link></p>;    
  if(Loading){
        return (<div className=' h-screen bg-gray-300 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="/images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-2xl'>Loading</p></div>)
    }
    
    // const { userProfileDetails,Loading } = useFetchUserDetails();
    // const { Loading, userProfileDetails } = useContext(UserDetailsContext);
    // console.log(Loading, userProfileDetails,"<==========")

// console.log(userProfileDetails.length,"home mobSidebar")

    return (
        <>
            <div className='flex h-screen'>
                <div className={`absolute z-1 md:relative overflow-auto bg-white md:w-[18vw] ${mobSidebar ? "w-[50%]" : "w-0"} h-screen ease-in delay-100 `}>
                    <Sidebar MobSidebarTogglerFunc={MobSidebarTogglerFunc}/>
                </div>
                <div className={` h-full w-full `}>
                    {/* Main */}
                    <div className=''>
                        <div className='flex ml-auto p-3 justify-between md:justify-end gap-4 items-center'>
                            <div className='md:hidden  '>
                              
                                <img src="/images/mdi--menu.svg" onClick={MobSidebarTogglerFunc}/>

                            </div>
                            <div className='md:hidden font-(family-name:--heading1)  text-2xl font-bold'>
                                <p>Hi, {userProfileDetails[0].name}</p>

                            </div>
                            <Link to={"/admin/announcement"} className=' hidden w-6 h-6 md:flex items-center justify-center  overflow-hidden'>
                          

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                              

                            </Link>
                            <Link to={"/admin/messaging"} className=' hidden w-6 h-6 md:flex items-center justify-center overflow-hidden'>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                             

                            </Link>

                            {/* <div className='border-1 rounded-[100%] w-6 h-6 flex items-center justify-center overflow-hidden'>
                                <img src='./images/employee.png' className='w-[80%] h-[80%]' />
                            </div> */}

                            <div>
                                <p className='bg-gray-200 p-1 px-2 font-[heading2] rounded'>Admin</p>
                            </div>

                            <div >
                                <button onClick={handleLogout} className='flex gap-2 items-center font-[heading2] outline-2 outline-gray-400 px-3 py-1 rounded cursor-pointer hover:bg-gray-200 ease-in duration-300'>
                                    <img src='./images/mdi-light--logout.svg' className='' /> Logout
                                </button>
                            </div>





                        </div>
                    </div>
                    <div className={`bg-gray-200 h-[calc(100vh-3.6rem)] overflow-auto p-2 md:p-5 ${mobSidebar ? "pointer-events-none blur-sm" : "pointer-events-auto blur-none"} md:pointer-events-auto md:blur-none`}>
                        <Routes>
                            <Route path={"/"} element={<Dashboard />}></Route>
                            <Route path={"/profile"} element={<Profile />}></Route>
                            <Route path={"/settings"} element={<Settings />}></Route>
                            <Route path={"/manageusers"} element={<ManageUsers />}></Route>
                            <Route path={"/edituser/:email"} element={<EditUser />}></Route>
                            <Route path={"/attandance"} element={<Attandance/>}></Route>
                            <Route path={"/leave"} element={<Leave/>}></Route>
                            <Route path={"/messaging"} element={<Messaging/>}></Route>
                            <Route path={"/announcement"} element={<Announcement/>}></Route>


                            
                            
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome