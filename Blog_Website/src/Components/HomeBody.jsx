import React,{useState} from 'react'
import {Link} from "react-router-dom"
const HomeBody = () => {
      
  return (
   <>
    <div className="backgroundImage    relative">
        <img src="https://th.bing.com/th/id/OIP.YYEEyRAyn7Rj5Y64yOVmMQHaEo?rs=1&pid=ImgDetMain" className='bg-photo sm:w-full sm:bg-cover sm:bg-no-repeat absolute' alt="Image" />
        <button className=' sm:absolute sm:left-[40%] sm:top-60  sm:border sm:border-4 border-black  sm:text-2xl sm:uppercase sm:p-2 sm:font-extrabold sm:hover:border-teal-400 sm:hover:text-red-700'><Link to="/blogs">Visit Blogs</Link></button>
        </div>
   </>
  )
}

export default HomeBody