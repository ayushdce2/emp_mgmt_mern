import React from 'react';
import {Link} from "react-router-dom";

import useLogin from './hook/useLogin.jsx';

const Login = () => {

    const {loginFormData,loginSubmit,openServerinnewtabtostartserver} = useLogin();
    openServerinnewtabtostartserver();

  return (
    <>
        

        <div className='bg-[url("/images/main-background.jpg")] h-screen bg-cover'>

        <div className='h-[45vw] md:h-[15vw]  flex items-center font-bold text-[#71b1e5] text-shadow-gray-900 tracking-wider'>
          <p className='font-[heading2] text-4xl ml-[1vw] md:ml-[14vw]'>Human Resource Management System</p>
        </div>

        <div className='ml-[1vw] md:ml-[20vw] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex flex-col w-[95%] md:w-[30%] p-7 rounded'>
            <p className='text-4xl text-[#71b1e5] leading-9 font-bold mb-8'>Sign In</p>
            <form onSubmit={loginSubmit} className='flex flex-col'>
              <input type='text' placeholder='email' name="email" onChange={loginFormData} className='text-lg mb-5 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
              <input type='text' placeholder='password' name="password" onChange={loginFormData} className='text-lg mb-5 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
              
              <button className='cursor-pointer rounded self-start p-2 bg-[#71b1e5] text-white'>Sign In</button>
            </form>
            <p className='text-right text-[#71b1e5]'>Don't have account? <Link to="/signup" className='font-bold'>SignUp </Link> Now.</p>
        </div>

        </div>

   
    </>
  )
}

export default Login