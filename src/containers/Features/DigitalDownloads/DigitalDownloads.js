// import '../public/output.css'

import bg from '../../../img/1.avif'
import React from 'react'
import { useState } from "react";

const DigitalDownloads = () => {
   const[dropdown, setDropdown] = useState(false)
  const[dropdown2, setDropdown2] = useState(false)
  const[dropdown3, setDropdown3] = useState(false)
  const[dropdown4, setDropdown4] = useState(false)

  const open = () => {
    setDropdown(true)
 }
   const close = () => {
    setDropdown(false)
 }
  const ope = () => {
    setDropdown2(true)
 }
   const clos = () => {
    setDropdown2(false)
 }
  const opn = () => {
    setDropdown3(true)
 }
   const clse = () => {
    setDropdown3(false)
 }
  const op = () => {
    setDropdown3(true)
 }
   const cls = () => {
    setDropdown3(false)
 }
  return (
    
    <div className="  ">

      <div className="bg-[#20c997] grid grid-cols-1 lg:grid-cols-2 bg-">
        <div className="text-left p-[20px] md:p-[60px] ">
          <h2 className='text-[25px] pb-[20px] lg:text-[35px] md:px[60px] xl:text-[50px] xl:pr-[65px] '>Digital downloads:The simplest way to 
            sell your knowledge
          </h2>
          <p className='text-[12px] lg:text-[16px] pb-[15px] xl:text-[20px] '>
          Start your knowledge business, grow your audience, or add a new revenue stream—all with digital downloads on Teachable.
          </p>
          <button className='bg-[#363636] rounded-lg px-[20px] py-[10px] rounded-lg flex justify-center my-0 mx-auto w-full text-center text-white lg:w-auto lg:justify-start lg:m-0'>join for free</button>
        </div>

        <div className="p-[20px] lg:p-[60px] ">
          <img className="w-[100%] h-[100%] " src = {bg} alt="" />

        </div>
      </div>

      <div className="bg-[#1f1f1f] text-white px-[20px] py-[50px] ">
        <h3 className='text-[30px] px-[20px] lg:text-[40px] pb-[20px] '>Sell just about anything</h3>
        <p className='pt-[20px] pb-[10px] px-[20px] text-[20px] lg:text-[15px] ' > With digital downloads on Teachable, your selling potential is limitless. Create, upload, and sell:</p>
        <ul className='list-disc list-inside'>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >Podcasts</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >Ebooks</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' > How-to guides</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >Customizable templates</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >Newsletters</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >Music and audio</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >Spreadsheets</li>
          <li className='pb-[20px] px-[30px] text-[16px] lg:text-[20px] ' >And so much more</li>
        </ul>
      </div>

    <div className="bg-[#127062] text-white py-[60px] ">
      <h1 className='text-center text-[24px] px-[120px] pb-[15px] md:text-[30px] '>
      The perfect place to start
      </h1>
      <h1 className='text-[24px] md:text-[30px] text-center px-[60px] md:px-[150px] pb-[40px] '>Here’s how digital downloads can help grow your business.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-[20px] xl:gap-[35px] md:px-[30px] px-[60px] ">

        <div className="pb-[30px]">
          <h3 className='text-[20px] font-[600] pb-[20px]  ' >
          Start small
          </h3>
          <p>
          Test out potential interest in your knowledge business and see what works by selling a digital download.
          </p>
        </div>
       <div className="pb-[30px]">
          <h3 className='text-[20px] font-[600] pb-[20px]  ' >
          Grow your audience
          </h3>
          <p>
          Create a digital download and start selling bite-sized content to attract new students to your business—or offer for free as a lead magnet.      </p>

        </div>

      <div className="pb-[30px]">
        <h3 className='text-[20px] font-[600] pb-[20px]  ' >
        Add value to your existing products
        </h3>
        <p>
        Offer digital downloads alongside your online course or coaching product. Or use digital downloads as order bumps, bundles, or upsells to boost your bottom line.      </p>

      </div>
      <div className="pb-[30px]">
        <h3 className='text-[20px] font-[600] pb-[20px]  ' >
        Monetize in new ways
        </h3>
        <p>
        Expand your revenue streams and capture more sales with ebooks, podcasts, how-to guides, webinars, and more.      </p>
      </div>
                 
      </div>
    </div>

    <div className="bg-[#20c997] p-[50px] ">
      <h1 className='text-[25px] md:text-[30px] font-[600] lg:text-[40px] text-center '>
      Try us out for free
      </h1>
      <p className='text-center xl:text-[20px] px-[20px] pb-[20px] lg:px-[80px] '>
      Upload your first download, create your first course, sell them together as a bundle—you can do any (or all) of that on a free plan.
      </p>
      <button className='bg-[#363636] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>join for free</button>
    </div>

    <div className="py-[80px] px-[30px] ">
      <h3 className='text-[25px] md:text-[30px] text-center px-[50px] pb-[20px]  ' >
      Every journey needs a guide—we’re yours
      </h3>
      <h3 className='text-[25px] md:text-[30px] text-center px-[50px] pb-[20px]  ' >
      Teachable is the best platform for sharing your knowledge with confidence. And with the ability to sell online courses, coaching sessions, and digital downloads in one place, you get the best of it all:
      </h3>
<div className="lg:grid lg:grid-cols-2 ">
      <p className='flex pb-[25px] text-center text-[20px] justify-center '>  <img className=" pr-[10px]" src = {require('../../../img/icn.png')} alt="" />High-quality student experiences</p>
      <p className='flex pb-[25px] text-center text-[20px] justify-center '><img className=" pr-[10px] " src = {require('../../../img/icn.png')} alt="" />Flexibility to sell what you want</p>
      <p className='flex pb-[25px] text-center text-[20px] justify-center'><img className="  pr-[10px]" src = {require('../../../img/icn.png')} alt="" />Power to grow your earning potential</p>
    </div>
    </div>

    <div className="bg-[#e7e7e7] py-[70px] ">
      <h1 className='text-[30px] lg:text-[35px] font-[600] text-center pb-[50px] '>Sell anything in minutes</h1>
      <p className='text-center pb-[50px]'> Upload a file, set a price, and start selling fast—simple as that.</p>

      <img className="w-[100%] h-[80%] " src = {require('../../../img/2.gif')} alt="" />

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 content-center pl-[90px] md:pl-[250px] py-[60px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
        <div className="">
          <p className=''>1</p>

          <div className=" my-0 w-[260px] bg-black h-[1px] "></div>
          
          <p className='pt-[20px] pb-[20px] pr-[50px] md:pr-[230px] lg:pr-[50px] ' >Click Create New Download from your Teachable admin.</p>
        </div>
        <div className="">
          <p>2</p>
          <div className="w-[260px] bg-black h-[1px] "></div>
          <p className='pt-[20px] pb-[20px] pr-[50px] md:pr-[230px] lg:pr-[50px] '> Click Create New Download from your Teachable admin.</p>
        </div>
        <div className="">
          <p>3</p>
          <div className="w-[260px] bg-black h-[1px] "></div>
          <p className='pt-[20px] pb-[20px] pr-[50px] md:pr-[230px] lg:pr-[50px] '>Click Create New Download from your Teachable admin.</p>
        </div>
      </div>
    </div>

    <div className="p-[40px] lg:p-[80px] xl-[80px] ">
    <h1 className='text-center text-[30px] font-[500] lg:text-[70px] pb-[30px] '>
    Your questions, answered
    </h1>
    {/* first dropdown */}
    <div className="">
      <div className="flex justify-between">
        <div className="text-[25px] lg:text-[40px] pt-[20px] pb-[20px] ">
          <h3>Why should i sell my digital download on Teachable? </h3>
         
        </div>
  
        <div className="dropdown">
        {
        !dropdown  ?

          <div className="">
          <button className='text-[25px] pt-[20px] lg:text-[40px] ' onClick={open}>+</button>
          </div>
          :
          <div className="">
          <button className='text-[25px] pt-[20px] lg:text-[40px] ' onClick={close}>-</button>
          </div>

          }
        </div>

        </div>
        <div className=" my-0 w-full bg-black h-[1px] "></div>

        <div className="">   
        {
          !dropdown  ?
          ""
          :
          <div className="">
            <p>Digital downloads are perfect for building your audience by providing value for a low cost (or even for free). Selling digital downloads alongside courses or coaching products on Teachable is an easy way to centralize your business while diversifying your revenue stream. 

Plus, you can use digital downloads as order bumps, bundles, and upsells to have even more ways to monetize your knowledge.</p>
          </div>
        }
       </div>



      
    </div>
    {/* first dropdown end */}

    {/* second dropdown */}
    <div className="">
      <div className="flex justify-between">
        <div className="text-[25px] lg:text-[40px] pt-[25px] pb-[20px] ">
          <h3>What type of digital downloads can i sell?</h3>
        </div>
  
        <div className="dropdown2">
        {
        !dropdown2  ?

          <div className="">
          <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={ope}>+</button>
          </div>
          :
          <div className="">
          <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={clos}>-</button>
          </div>

          }
        </div>

        </div>
        <div className=" my-0 w-full bg-black h-[1px] "></div>
        <div className="">   
        {
          !dropdown2  ?
          ""
          :
          <div className="">
            <p>Almost anything! From templates to ebooks, podcasts, and more—we’ve even made sure you can reach your audience in new, meaningful ways with a wide variety of digital download formats to choose from. What can’t you sell on Teachable?</p>
          </div>
        }
       </div>



      
    </div>
{/* second dropdown enmd */}

    {/* third dropdown */}
    <div className="">
      <div className="flex justify-between ">
        <div className="text-[25px] lg:text-[40px] pb-[20px] pt-[25px] ">
          <h3>How many digital downloads can i sell on a free plan?</h3>
        </div>
  
        <div className="dropdown">
        {
        !dropdown3  ?

          <div className="">
          <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={opn}>+</button>
          </div>
          :
          <div className="">
          <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={clse}>-</button>
          </div>

          }
        </div>

        </div>
        <div className=" my-0 w-full bg-black h-[1px] "></div>
        <div className="">   
        {
          !dropdown3  ?
          ""
          :
          <div className="">
            <p>You can create and sell one digital download when you join for free. But if you want access to unlimited digital downloads, join a Basic or Pro plan on Teachable.</p>
          </div>
        }
       </div>



      
    </div>
{/* third dropdown enmd */}

    {/* fourth dropdown */}
    <div className="">
      <div className="flex justify-between ">
        <div className="text-[25px] lg:text-[40px] pb-[20px] pt-[25px] ">
          <h3>What if i've never sold something online before?</h3>
        </div>
  
        <div className="dropdown">
        {
        !dropdown4  ?

          <div className="">
          <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={op}>+</button>
          </div>
          :
          <div className="">
          <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={cls}>-</button>
          </div>

          }
        </div>

        </div>
        <div className=" my-0 w-full bg-black h-[1px] "></div>
        <div className="">   
        {
          !dropdown4  ?
          ""
          :
          <div className="">
            <p>Don’t worry, you’ve come to the right place. Get started on our Free plan and we’ll guide you through our easy-to-use platform, so you can feel confident about starting your own online business.</p>
          </div>
        }
       </div>



      
    </div>
{/* fourth dropdown enmd */}


    </div>

    <div className="bg-[#20c997] p-[50px] ">
      <h1 className='text-[30px] lg:text-[60px] text-center font-[600] ' >
      Sell confidently on Teachable
      </h1 >
      <p className='text-[20px] lg:text-[26px] text-center pb-[15px] px-[50px] '>Digital downloads, courses, and coaching—all in one place. With industry-leading support and fraud protection</p>

      <button className='bg-[#363636] px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white rounded-lg '>join for free</button>
    </div>
     <div>
    
     </div>

    </div>
  );
}
 
export default DigitalDownloads;