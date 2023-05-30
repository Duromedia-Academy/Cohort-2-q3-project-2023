import React from 'react'

import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <nav className=''>

      <div className="flex justify-between items-center">
      <div className="">
        <a href="/b" className='text-4xl pl-10'>teach:able</a>
      </div>



      <div className=" pt-3  flex pr-3">
        <a href="/s" className='pr-3'>Start For Free</a>  
          <FaBars className='text-2xl'/>
      </div>

      </div>




    </nav>
  );
}
 
export default header;