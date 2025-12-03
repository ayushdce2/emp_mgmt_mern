import React from 'react';
import { useUserDetails } from "../../utility/UserDetailsContext.jsx";
import edit_button from "../assets/mdi--edit-outline.svg";
import UserProfileUpdate from "./hooks/useUserProfileUpdate.jsx";
import ProfileUpdateModal from "../components/ProfileUpdateModal.jsx";

const Profile = () => {

  const { userProfileDetails,Loading,error,refetch } = useUserDetails();
  const {UpdateUserProfileFunction, isOpen, setIsOpen,formData, UpdatePersonalDetailsModalFunction, FillFormData} = UserProfileUpdate(userProfileDetails[0],refetch);
  
  if(error) return "Error";
  if(Loading) return "Loading";

  const { name,email, phoneno,jobprofile,officelocation,createdAt, userRole,loginedOn } = userProfileDetails[0];
  // console.log(typeof(refetch),"refetch")

  return (
    <>
      <div className=''>
        <p className='font-[heading2] text-xl bg-gray-400 p-2 rounded text-shadow-sm'>Profile</p>
      </div>
      <div className='my-5 flex flex-col items-center gap-5 justify-center'>
        <div className='w-[10rem] h-[10rem] border rounded-full flex justify-center items-center'>
          <img src='/images/employee.png' className='w-[80%] h-[80%]' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-[98%] md:w-auto '>

          <div className='p-2'>
            <div className=''>
              <p className='flex items-center  justify-between font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'><span>Personal</span> <img src={edit_button} className='w-6 h-6 p-0.5 cursor-pointer hover:bg-gray-400 rounded' onClick={()=>{UpdateUserProfileFunction()}} /></p>


            </div>

            <div className='m-1'>


              <div className='flex gap-2' >
                <p className='text-gray-500'>Name : </p>
                <p>{name}</p>
              </div>
              <div className='flex gap-2' >
                <p className='text-gray-500'>Email : </p>
                <p>{email}</p>
              </div>
              <div className='flex gap-2' >
                <p className='text-gray-500'>phoneno : </p>
                <p>{phoneno}</p>
              </div>
              <div className='flex gap-2' >
                <p className='text-gray-500'>jobprofile : </p>
                <p>{jobprofile}</p>
              </div>
              <div className='flex gap-2' >
                <p className='text-gray-500'>officelocation : </p>
                <p>{officelocation}</p>
              </div>






            </div>
          </div>
          <div className='p-2'>
            <div>
              <p className='flex items-center  justify-between font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'><span>Account</span> </p>

            </div>


            <div className='m-1'>



              <div className='flex gap-2' >
                <p className='text-gray-500'>Role : </p>
                <p>{userRole}</p>
              </div>
              <div className='flex gap-2' >
                <p className='text-gray-500'>Joined On : </p>
                <p>{new Date(createdAt).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}</p>
              </div>




            </div>
          </div>
          <div className='p-2'>
            <div>

              <p className='flex items-center  justify-between font-[heading2] bg-gray-300 p-1 px-2 rounded text-xl'><span>Security</span> </p>


            </div>


            <div className='m-1'>


              {/* <div className='flex gap-2' >
                <p className='text-gray-500'>Last Profile Updated On : </p>
                <p>{new Date(updatedAt).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}</p>
              </div> */}
              <div className='flex gap-2' >
                <p className='text-gray-500'>Last Login On: </p>
                <p>{new Date(loginedOn).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}</p>
              </div>





            </div>
          </div>

        </div>
      </div>

{isOpen && <ProfileUpdateModal data={{ setIsOpen,formData, FillFormData, UpdatePersonalDetailsModalFunction}}/>}

    </>
  )
}

export default Profile