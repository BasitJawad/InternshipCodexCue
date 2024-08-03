import React from 'react'
import {Link} from "react-router-dom"
    

const Navbar = () => {

    

  return (
    <>

        <nav className='flex justify-between pt-8 bg-teal-700 h-[15vh] relative  sm:flex sm:justify-between sm:pt-8 bg-teal-700 sm:h-[15vh] sm:relative navbar'>
            <div className="brand sm:pl-8">
                <h1 className='sm:text-2xl text-2xl ml-4 font-extrabold sm:font-extrabold'>Blogs</h1>
            </div>
            <div className="navlist sm:pr-8 pr-8">
                <ul className='sm:flex sm:gap-8  flex gap-8'>
                    <li className='sm:text-2xl sm:font-extrabold text-2xl font-extrabold  hover:text-red-600 hover:underline '><Link to="/">Home</Link></li>
                    <li className='sm:text-2xl sm:font-extrabold text-2xl font-extrabold  hover:text-red-600 hover:underline'><Link to="/Blogs">Blogs </Link></li>
                </ul>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar