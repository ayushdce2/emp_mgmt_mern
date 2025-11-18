import React from 'react'

import useSignUp from "../main_components/hook/useSignUp.jsx";

const Signup = () => {

        const {signupFormData,signupSubmit} = useSignUp();

  return (
    <>
        <form onSubmit={signupSubmit}>
            <input type='text' placeholder='name' name="name" onChange={signupFormData}/>
            <input type='text' placeholder='email' name="email" onChange={signupFormData}/>
            <input type='text' placeholder='password' name="password" onChange={signupFormData}/>
            <button>Sign Up</button>
        </form>
        
      

    </>
  )
}

export default Signup