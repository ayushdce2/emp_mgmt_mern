import React from 'react';
import useUpdatePassword from "../components/hooks/useUpdatePassword.jsx";

const Settings = () => {

  const {fetchFormData,SubmitChangePassword} = useUpdatePassword();
  
  return (
    <>
    <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Settings</p>
      </div>
      <div className='w-[40%]'>
       <div className='mt-5'>
          <p className='font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'>Change Password</p>

        </div>
      <div className='mt-5'>
        <div>
          <form className='flex flex-col gap-3' onSubmit={SubmitChangePassword}>
            <input type='text' name='old_password' onChange={fetchFormData} placeholder='Enter Old Password' className='mb-1 h-10 p-2 outline-0 border-b-2 text-gray-700 tracking-wider border-b-gray-400'/>
            <input type='text' name='new_password' onChange={fetchFormData} placeholder='Enter New Password' className='mb-1 h-10 p-2 outline-0 border-b-2 text-gray-700 tracking-wider border-b-gray-400'/>
            <button type='submit' className='p-2 bg-gray-500 rounded text-gray-300 cursor-pointer '>Change Password</button>
          </form>
        </div>

      </div>
      </div>
    </>
  )
}

export default Settings