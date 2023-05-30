import React from 'react'

import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <nav className=''>

      <div className="flex justify-between items-center px-5 py-4 border-b border-black ">
      <div className="">
        <a href="/b" className='text-3xl '>teach:able</a>

        <div>
            {/* <ul>
              <li>
                <Link>
                Home
                </Link>
              </li>
            </ul> */}
        </div>
      </div>



      <div className=" pt-3  flex pr-3">
        <a href="/s" className='pr-3 underline'>Start For Free</a>  
          <FaBars className='text-2xl'/>
      </div>

      </div>




    </nav>
  );
}
 
export default header;