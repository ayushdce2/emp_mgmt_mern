import React from 'react';
import {Link} from "react-router-dom";

import useSignUp from "../main_components/hook/useSignUp.jsx";

const Signup = () => {

        const {signupFormData,signupSubmit} = useSignUp();

  return (
    <>
       
        

        <div className='bg-[url("/images/main-background.jpg")] h-screen bg-cover'>

        <div className='h-[45vw] md:h-[10vw]'></div>

        <div className='ml-[1vw] md:ml-[20vw] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex flex-col w-[95%] md:w-[30%] p-7 rounded'>
            <p className='text-4xl text-[#71b1e5] leading-9 font-bold mb-8'>Sign Up</p>
            <form onSubmit={signupSubmit} className='flex flex-col'>
              <input type='text' placeholder='name' name="name" onChange={signupFormData} className='text-lg mb-5 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
            <input type='text' placeholder='email' name="email" onChange={signupFormData} className='text-lg mb-5 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
            <input type='text' placeholder='password' name="password" onChange={signupFormData} className='text-lg mb-5 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
            <select className='text-lg mb-10 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]' onChange={signupFormData} name='userRole'>
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="hr">Hr</option>
              <option value="admin">Admin</option>
            </select>
        

              <button className='cursor-pointer rounded self-start p-2 bg-[#71b1e5] text-white'>Sign Up</button>
            </form>
            <p className='text-right text-[#71b1e5]'>Already have account? <Link to="/" className='font-bold'>Sign In </Link> Now.</p>
        </div>

        </div>
      

    </>
  )
}

export default Signup