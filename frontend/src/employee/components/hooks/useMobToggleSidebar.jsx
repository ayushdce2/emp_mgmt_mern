import React, { useState, useEffect } from 'react'

const useMobToggleSidebar = () => {
    const [mobSidebar,setMobSidebar]= useState(false);

    const MobSidebarTogglerFunc = (e)=>{
      
      setMobSidebar(prev=>!prev)
        }

  //   useEffect(() => {
  //   console.log("Updated mobSidebar:", mobSidebar); 
  // }, [mobSidebar]);

  return {mobSidebar,MobSidebarTogglerFunc }
}

export default useMobToggleSidebar