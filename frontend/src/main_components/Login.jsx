import React from 'react'

import useLogin from './hook/useLogin.jsx';

const Login = () => {

    const {loginFormData,loginSubmit} = useLogin();

  return (
    <>
        <form onSubmit={loginSubmit}>
            <input type='text' placeholder='email' name="email" onChange={loginFormData}/>
            <input type='text' placeholder='password' name="password" onChange={loginFormData}/>
            <button>Sign In</button>
        </form>

   
    </>
  )
}

export default Login