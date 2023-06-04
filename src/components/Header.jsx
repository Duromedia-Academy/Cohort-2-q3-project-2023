import React from 'react'

import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <nav className='border-b border-black pb-3'>
      <div className='flex pl-6 md:pl-12'>
        <div className='pt-3'>
         <a href="/" className='text-2xl md:text-4xl'>teach:able</a>
        </div>
       <div className='hidden md:flex md:pl-4 lg:pl-16 md:space-x-6 lg:space-x-12 pt-6 text-mag'>
          <h2 className='hover:text-goal'>Features</h2>
           <a href="/"  className='hover:text-goal'>Pricing</a>
           <a href="/" className='hover:text-goal'>Blog</a>
           <a href="/" className='hover:text-goal'>Examples</a>
           <h2 className='hover:text-goal'>Resources</h2>
        </div>
        <div className='flex ml-auto pr-4 space-x-6  pt-3 md:pt-2'>
          <a href="/" className='hidden md:flex hover:text-goal underline text-mag pt-3'>Log in</a>
          <a href="/" className='underline md:no-underline py-1 md:py-4 md:px-5 md:bg-gap md:rounded hover:bg-black md:text-white'>Start for free</a>
          <FaBars  className='md:hidden text-2xl'/>
        </div>
      </div>



    </nav>
  );
}
 
export default header;