import React from 'react'

const Login = () => {
  return (
    <>
        <div className='bg-[url("./images/main-background.jpg")] h-screen bg-cover'>

        <div className='h-[45vw] md:h-[15vw]'></div>

        <div className='ml-[1vw] md:ml-[20vw] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex flex-col w-[95%] md:w-[30%] p-7 rounded'>
            <p className='text-4xl text-[#71b1e5] leading-9 font-bold mb-8'>Sign In</p>
            <input type='text' placeholder='Email' className='text-lg mb-5 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
            <input type='text' placeholder='Password' className='text-lg mb-10 h-10 p-2 outline-0 border-b-2 text-[#71b1e5] border-b-[#71b1e5]'/>
            <button className='rounded self-start p-2 bg-[#71b1e5] text-white'>Sign In</button>

        </div>

        </div>
    
    </>
  )
}

export default Login