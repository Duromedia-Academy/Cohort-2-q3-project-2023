import React from 'react'

import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex gap-10 items-center">

      <nav>
          <h1 className='font-semibold text-3xl pl-8'>teach:able</h1>

            <ul className='flex gap-10'>
                <li className='font-normal hover:text-[#21cd9c]'>
                   <Link to={"/"}>
                    Features
                   </Link>
                </li>
                <li  className='font-normal hover:text-[#21cd9c]'>
                   <Link to={"/about"}>
                    Pricing
                   </Link>
                </li>
                <li className='font-normal hover:text-[#21cd9c]'>
                   <Link to={"/"}>
                    Blog
                   </Link>
                </li>
                <li className='font-normal hover:text-[#21cd9c]'>
                   <Link to={"/"}>
                    Examples
                   </Link>
                </li>
                <li className='font-normal hover:text-[#21cd9c]'>
                   <Link to={"/"}>
                    Resources
                   </Link>
                </li>
            </ul>
        </nav>
        </div>
        <div className="flex gap-6 items-center pr-3">
          <Link className='underline'>Log in</Link>
          <button className=' bg-[#1b4942] rounded-md p-4 text-white hover:bg-black'><Link>Start for free</Link></button>
        </div>

        <div>
          <FaBars/>
        </div>
    </div>
  )
}

export default Header