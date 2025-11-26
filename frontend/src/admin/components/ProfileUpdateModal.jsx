const ProfileUpdateModal = (props)=>{
    // console.log(props.data,"props")
    const {setIsOpen,formData, FillFormData, UpdatePersonalDetailsModalFunction} = props.data;
    const {name,email,phoneno,jobprofile,officelocation, createdAt,  userRole, _id} = formData;
    const CloseModal = ()=>{
        setIsOpen(prev=>!prev)
    }

    return(
        <>
            <div className="absolute z-1 top-0 right-0 left-0 bottom-0  flex items-center justify-center " onClick={CloseModal}>
                <div className=" p-3 w-[50%] h-[70%] rounded bg-white" onClick={(event)=>{event.stopPropagation()}}>
                    
                    <div className='flex bg-gray-400 p-2 rounded'>
        <p className='font-[heading2] text-xl   text-shadow-sm'>Update Personal Details</p>
        <div onClick={CloseModal} className="rounded-full w-8 h-8 flex items-center justify-center ml-auto">
                        <img src="/images/mdi--cross-circle-outline.svg" className="w-[90%] h-[90%] cursor-pointer"/>
                    </div>
      </div>
                    <div className="flex items-center justify-center h-[90%]">
                        <form onSubmit={UpdatePersonalDetailsModalFunction} className="flex flex-col gap-2 w-[50%]">
                            <div className="flex items-center mb-2">
                            <p className="w-[4rem]">Name : </p>
                            <input type="text" className="p-1 border-b-1 border-b-gray-500 text-gray-500 focus:outline-0" value={name} name="name" onChange={FillFormData}/>
                            </div>
                            <div className="flex items-center mb-2">
                            <p className="w-[4rem]">Email : </p>
                            <input type="text" className="p-1 border-b-1 border-b-gray-500 text-gray-500 focus:outline-0" value={email} name="email" onChange={FillFormData}/>
                            </div>
                            <div className="flex items-center mb-2">
                            <p className="w-[6rem]">Phone No. : </p>
                            <input type="text" className="p-1 border-b-1 border-b-gray-500 text-gray-500 focus:outline-0" value={phoneno} name="phoneno" onChange={FillFormData}/>
                            </div>
                            <div className="flex items-center mb-2">
                            <p className="w-[6rem]">Job Profile : </p>
                            <input type="text" className="p-1 border-b-1 border-b-gray-500 text-gray-500 focus:outline-0" value={jobprofile} name="jobprofile" onChange={FillFormData}/>
                            </div>
                            <div className="flex items-center mb-7">
                            <p className="w-[8rem]">Office Location : </p>
                            <input type="text" className="p-1 border-b-1 border-b-gray-500 text-gray-500 focus:outline-0" value={officelocation} name="officelocation" onChange={FillFormData}/>
                            </div>
                            {/* <div className="flex items-center mb-4">
                            <p className="w-[4rem]">Role : </p>    
                            <select value={userRole} className="p-1 border-b-1 border-b-gray-500 text-gray-500 focus:outline-0">
                                <option value="hr">Hr</option>
                                <option value="employee">Employee</option>
                                <option value="admin">Admin</option>
                            </select>
                            
                            </div> */}
                            <button type="submit" className="p-2 bg-gray-400 rounded cursor-pointer" >Update</button>
                        </form>

                    </div>
                </div>
                

            </div>
        
        </>
    )

}

export default ProfileUpdateModal;