import React from 'react';

import useLogout from './hooks/useLogout.jsx';
import useFetchUserDetails from "./hooks/useFetchUserDetails.jsx";

export const Leave = () => {

        const { loggedInUser, handleLogout } = useLogout();
        const { userProfileDetails } = useFetchUserDetails();


  return (
    <>
         <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Employee Dashboard</p>
        
        
      </div>
      <div>{loggedInUser}</div>
      <button onClick={handleLogout}>LOGOUT</button>
      <div>
        <ul>
          {
            userProfileDetails?.map((data, index) => {

              return (
                <>
                  <div key={index}>
                    <p>Name - {data.name} </p>
                    <p>Email - {data.email} </p>
                    <p>
                      Joined On - {new Date(data.joinedOn).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}

                    </p>
                  </div>
                </>
              )

            })
          }
        </ul>
      </div>
      
    </>
  )
}
