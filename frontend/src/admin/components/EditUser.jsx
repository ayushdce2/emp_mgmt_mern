import React from 'react';
import { useParams } from "react-router-dom";
import useUpdateUser from './hooks/useUpdateUser.jsx';

const EditUser = () => {
    const { email } = useParams();
    const {loading,error, fetchUserData, updatedFormData, updateUserData} = useUpdateUser(email);
    console.log(fetchUserData,"fetchUserData");
    if(loading){
        return "Loading here"
    }
    if(error){ return "Error Occured"}
  return (<>
    <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Update User Details</p>
      </div>
    <form onSubmit={updateUserData} className='flex flex-col gap-2 w-[20rem] border-1 border-gray-400 mt-3 p-3 rounded'>
        <div className='flex gap-3 items-center my-5'>
            <label className='text-lg text-gray-500'>Name : </label>
            <input type='text' value={fetchUserData.name} onChange={updatedFormData} name='name' className='text-lg  h-10 p-2 outline-0 border-b-2 border-b-gray-500  '/>
        </div>
        <div className='flex gap-3 items-center mb-5'>
            <label className='text-lg'>Email : </label>
            <input type='text' value={fetchUserData.email} onChange={updatedFormData} name='email' className='text-lg mb-5 h-10 p-2 outline-0 border-b-2  '/>
        </div>
        
        <div className='flex gap-3 items-center mb-5'>
            <label className='text-lg'>Role : </label>
            <select value={fetchUserData.userRole} onChange={updatedFormData} name='userRole' className='border border-gray-600'>
                <option value="employee">Employee</option>
                <option value="hr">Hr</option>
            </select>
            </div>
        <button type='submit' className='cursor-pointer rounded self-start p-2 bg-gray-500 text-white'>Update Details</button>
    </form>
    </>
  )
}

export default EditUser