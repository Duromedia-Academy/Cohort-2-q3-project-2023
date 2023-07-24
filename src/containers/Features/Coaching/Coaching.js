import bg from '../../../img/1.avif'
import React from 'react'
import { useState } from "react";

const Coaching = () => {
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
    const o = () => {
      setDropdown4(true)
   }
     const cl = () => {
      setDropdown4(false)
   }
    return (
              
      <div className="  ">
      {/* 1 */}
      <div className="lg:flex ">
        <div className="basis-[60%] ">
          <div className=" py-[80px] px-[30px] bg-[#1f1f1f] text-white ">
            <h3 className='text-[40px] md:text-[60px] text-left pb-[20px]  ' >
            The best online coaching platform to support your audience
            </h3>
            
            <div className="lg:grid lg:grid-cols-2 flex flex-col lg:items-start text-center lg:content-start justify-items-center my-0 mx-auto ">
              <div className='flex pb-[25px] text-[15px] '>  <img className=" pr-[10px]" src = {require('../../../img/icn.png')} alt="" />Easy to use, no-code platform</div>
              <div className='flex pb-[25px] text-[15px]  '><img className=" pr-[10px] " src = {require('../../../img/icn.png')} alt="" />Customizable client onboarding</div>
              <div className='flex pb-[25px] text-[15px] '><img className="  pr-[10px]" src = {require('../../../img/icn.png')} alt="" />Seamless management and scheduling</div>
            </div>

            <div className="">
            <h3>Enter your email</h3>
              <div className="lg:grid gap-[20px] lg:grid-cols-2 ">
                <div className="">
                  <input className='w-full p-[15px] mb-[25px] lg:m-0 mt-[10px] ' type="email" placeholder="hello@example.com" id="" />
                </div>
                <div className="">
                <button className='bg-[#20c997] rounded-lg px-[20px] py-[15px] flex justify-center m-0 w-full my-0 mx-auto text-center  text-white '>join for free</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="basis-[40%] ">
         <img className="w-[100%] h-[100%] " src = {require('../../../img/c.avif')} alt="" />
        </div>

       

      </div>
      {/* 1 */}

      {/* 2 */} 
      <div className="bg-[#f7f5f5] py-[70px] text-[rgb(27,73,66)] ">
        <h1 className='text-[30px] lg:text-[50px] font-[400] tracking-[-0.3px] leading-[120%] text-center pb-[20px] '>Easily create a digital coaching business</h1>
        <p className='text-center pb-[20px] lg:text-[25px] tracking-[-0.16px] leading-[140%]'>Enrich your online business with high-value virtual coaching products. Host private or small group coaching sessions in three simple steps.</p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center pl-[90px]  py-[60px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
          <div className="">
            <p className='text-[30px] font-400 pb-[10px] '>Step 1</p>

            <div className=" my-0 w-[90%] bg-[rgb(27,73,66)] h-[1px] "></div>
            <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%] ' >Create your coaching<br />product </h4>
            <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] ' >Create, sell, and manage all aspects of your coaching business on Teachable. Sell your digital coaching services solo or alongside your course or digital download..</p>
          </div>
          <div className="">
            <p  className='text-[30px] font-400 pb-[10px] ' >Step 2</p>
            <div className="w-[90%] bg-[rgb(27,73,66)] h-[1px] "></div>
            <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]  ' >Upload your content</h4>
            <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] '> Customize content based on your audience’s needs. Create milestones, schedule meetings, set-up video calls, send messages and files, and more with coaching at Teachable.</p>
          </div>
          <div className="">
            <p className='text-[30px] font-400 pb-[10px] '>Step 3</p>
            <div className="w-[90%] bg-[rgb(27,73,66)] h-[1px] "></div>
            <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]' >Customize and sell</h4>
            <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] '>Offer a professional learning experience to your audience with our easy-to-use, customizable sales page.</p>
          </div>
        </div>
      </div>
      {/* 2 */}

     {/* 3 */}
      <div className="bg-[#127062] text-white p-[50px] lg:p-[60px] ">
        <h2 className='text-[25px] md:text-[30px] text-center ' >Features for all types of coaching</h2>
        <p className='text-center pt-[10px] pb-[30px] ' >Building or scaling your online business is easy with these convenient coaching tools.</p>

        <div className="lg:grid lg:grid-cols-2 gap-[20px] ">
          <div className="">
            <img className="w-[100%] h-[100%] pb-[20px] " src = {require('../../../img/c1.avif')} alt="" />
          </div>
          <div className="text-left  ">
              <h3  className='text-[20px] lg:text-[35px] font-[500] pb-[10px]  ' >Payment processing and more</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >Teachable:pay is an automated way to get paid, manage payouts, and sell more confidently. Get a simple, reliable checkout system, fraud protection, tax-inclusive pricing, global currency conversion, automatic payouts, and more. Plus, enjoy zero transaction fees on Pro and Business plans.
              </p>

              <h3 className='text-[20px] lg:text-[35px] font-[500]  pb-[10px] pt-[20px] ' >A personal touch</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Our effortless drag-and-drop builder and customizable templates mean you can personalize your coaching products to align with your style and branding. Plus, you can easily manage, send assignments and files, schedule appointments, and keep your clients on track with their goals.</p>
          </div>

        </div> 
        <div className="lg:grid lg:grid-cols-2 gap-[20px] pt-[70px] ">
          <div className="text-left  ">
              <h3  className='text-[20px] lg:text-[35px] font-[500] pb-[10px]  ' >Payment processing and more</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >Teachable:pay is an automated way to get paid, manage payouts, and sell more confidently. Get a simple, reliable checkout system, fraud protection, tax-inclusive pricing, global currency conversion, automatic payouts, and more. Plus, enjoy zero transaction fees on Pro and Business plans.
              </p>

              <h3 className='text-[20px] lg:text-[35px] font-[500] pb-[10px] pt-[20px] ' >A personal touch</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Our effortless drag-and-drop builder and customizable templates mean you can personalize your coaching products to align with your style and branding. Plus, you can easily manage, send assignments and files, schedule appointments, and keep your clients on track with their goals.</p>
          </div>
          <div className="">
            <img className="w-[100%] h-[100%] " src = {require('../../../img/c2.avif')} alt="" />
          </div>

        </div> 
      </div>
      {/* 3 */}

      {/* 4 */}
      <div className="bg-[#20c997] p-[50px] ">
        <h1 className='text-[25px] md:text-[30px] font-[600] lg:text-[40px] text-center '>
        Start coaching online today
        </h1>
        <p className='text-center xl:text-[20px] px-[20px] pb-[20px] lg:px-[80px] leading-[145%] tracking-[-0.27px]'>
        Our best-in-class features make creating, selling, and managing your coaching business a breeze.
        </p>
        <button className='bg-[#363636] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>Start for free</button>
      </div>
      {/* 4 */}

      {/* 5 */}
      <div className="bg-[#f7f5f5] p-[40px] lg:p-[60px] text-[rgb(27,73,66)] ">
        <h1 className='text-[30px] lg:text-[50px] font-[400] tracking-[-0.3px] leading-[120%] text-center pb-[20px] '>Coach spotlight</h1>
        <p className='text-center pb-[20px] lg:text-[25px] tracking-[-0.16px] leading-[140%]'>Meet some professional coaches within the Teachable community and explore their online coaching businesses.</p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-[30px] ">
          
          <div className="bg-white mb-[30px]  ">
            <img className="w-full " src = {require('../../../img/c3.avif')} alt="" />
           
              <div className="p-[20px] ">
              <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%] ' >Fitness Bootcamp </h4>
              <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] ' >Greg started out as a personal trainer, but knew he didn’t want to stop there. With his experience as a trainer and researcher, he launched a fitness course online.</p>
              <p className=' border-b-2 w-[50%] cursor-pointer border-[rgb(27,73,66)] pb-[5px] mt-[60px] ' >See it in action </p> 
            </div>
          </div>

          <div className="bg-white mb-[30px] ">

            <img className="w-full " src = {require('../../../img/c4.avif')} alt="" />
              <div className="p-[20px] ">
                <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]  ' >UAV Coach</h4>
                <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] '>With more than 40,000 students, UAV Coach’s signature drone training course helps students pass their FAA certification exam.</p>
                <p className=' border-b-2 w-[50%] cursor-pointer border-[rgb(27,73,66)] pb-[5px] mt-[60px] ' >See it in action </p>
              </div>
          </div>
          
          <div className="bg-white mb-[30px] ">
            <img className=" w-full" src = {require('../../../img/c5.avif')} alt="" />
              <div className="p-[20px] ">
                <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]' >A-Levels Tutoring</h4>
                <p className='pt-[20px] pb-[20px] pr-[50px]  lg:pr-[50px] '>Why confine learning to in-person classes that require upfront rental costs for classroom space? With online courses, Tailored Tutors helps students ace your A-level exams from anywhere; and you can do the same.</p>
                <p className=' border-b-2  w-[50%]  cursor-pointer border-[rgb(27,73,66)] pb-[5px] mt-[60px] ' >See it in action </p>
              </div>
          </div>

        
      </div>
      </div>
      {/* 5 */}

      {/* 6 */}
      <div className="p-[40px] lg:p-[80px] xl:p-[80px] ">
      <h1 className='text-center text-[30px] font-[500] lg:text-[70px] pb-[30px] '>
      FAQ
      </h1>
      {/* first dropdown */}
      <div className="">
        <div className="flex justify-between">
          <div className="text-[25px] lg:text-[30px] pt-[20px] pb-[20px] ">
            <h3>Why should I offer coaching on Teachable? </h3>
          
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
              <p>Offering online coaching programs is a great way to add even more value to your online course and digital download offerings. We help you create professional coaching products to grow or scale your business—plus launch a coaching website that supports your clients.
              </p>
            </div>
          }
        </div>



        
      </div>
      {/* first dropdown end */}

      {/* second dropdown */}
      <div className="">
        <div className="flex justify-between">
          <div className="text-[25px] lg:text-[30px] pt-[25px] pb-[20px] ">
            <h3>What type of coaching can I sell?</h3>
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
              <p>With Teachable, you can easily create one-on-one and group coaching products. Our no-code platform allows you to create milestones to schedule meetings, set-up video calls, send messages and files, and more.

              </p>
            </div>
          }
        </div>



        
      </div>
  {/* second dropdown enmd */}

      {/* third dropdown */}
      <div className="">
        <div className="flex justify-between ">
          <div className="text-[25px] lg:text-[30px] pb-[20px] pt-[25px] ">
            <h3>How many coaching products can I sell on a free plan?</h3>
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
              <p>You can create and sell one coaching product when you join for free. Our Basic, Pro and Business plans offer unlimited coaching products. View our pricing plans here.

              </p>
            </div>
          }
        </div>



        
      </div>
  {/* third dropdown enmd */}

      {/* fourth dropdown */}
      <div className="">
        <div className="flex justify-between ">
          <div className="text-[25px] lg:text-[30px] pb-[20px] pt-[25px] ">
            <h3>What if i've never sold something online before?</h3>
          </div>
    
          <div className="dropdown">
          {
          !dropdown4  ?

            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={o}>+</button>
            </div>
            :
            <div className="">
            <button className="text-[25px] pt-[20px] lg:text-[40px] " onClick={cl}>-</button>
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
      {/* 6 */}
      {/* 8 */}
      <div className="bg-[#20c997] p-[50px] ">
        <h1 className='text-[30px] md:text-[30px] font-[600] lg:text-[40px] text-center  leading-[145%] tracking-[-0.27px] '>
       Create your proffessional coaching product
        </h1>
        <p className='text-center xl:text-[20px] px-[20px] pb-[20px] lg:px-[80px] leading-[145%] tracking-[-0.27px]'>
       Get started building or scaling the online business of your dreams.
        </p>
        <button className='bg-[#363636] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>Start for free</button>
      </div>
      {/* 8 */}

      

    </div>
    );
}
 
export default Coaching;