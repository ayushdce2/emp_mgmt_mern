import React from 'react';
import useFetchUserDetails from "./hooks/useFetchUserDetails.jsx";

const Profile = () => {
          
  const { userProfileDetails } = useFetchUserDetails();

  return (
    <>
    <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Profile</p>
      </div>
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

export default Profile