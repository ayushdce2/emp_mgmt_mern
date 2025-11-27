import React from 'react';
import UsersListFunction from "./hooks/useUsersList.jsx";
import { Link } from "react-router-dom"

const AllUsers = () => {

    const { UsersList, Loading, error } = UsersListFunction();
    // console.log(UsersList, Loading, error);
    if (Loading) {
        return (<div className=' h-screen bg-gray-300 border-r-gray-950 p-3 flex flex-col gap-5 items-center justify-center'><img src="./images/loading.gif" className='w-[5rem]' /> <p className='font-bold text-2xl'>Loading</p></div>)
    }
    if (error) return <p>Error loading profile</p>;

    return (
        <>
            <div className=''>
                <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Manage Users</p>
            </div>

            <div className='mt-3 grid grid-cols-4 gap-3 '>
                {
                    UsersList.map((data, index) => {
                        return (<>
                            <div className='bg-gray-300 rounded p-3 flex flex-col gap-3 hover:bg-gray-400'>
                                <div className='border-1 w-[10rem] h-[10rem] self-center flex items-center justify-center rounded-full overflow-hidden p-1'>
                                    <img src='/images/employee.png' className='w-[90%] h-[90%] object-contain' />
                                </div>
                                <div key={data._id}>
                                    <p>Name:  {data.name}</p>
                                </div>
                                <div>
                                    <p>D.O.J: {new Date(data.createdAt).toLocaleString("en-US", {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                    })}</p>
                                </div>
                                <div>
                                    <p>Email: {data.email}</p>
                                </div>
                                <div>
                                    <p>Role Assigned: {data.userRole}</p>
                                </div>
                                <div className='flex justify-end '>
                                    <Link to={`/admin/edituser/${data.email}`} className='hover:bg-gray-500 p-1 cursor-pointer border-1 rounded'>Edit Details</Link>
                                </div>
                            </div>
                        </>)
                    })
                }

            </div>



        </>
    )
}

export default AllUsers