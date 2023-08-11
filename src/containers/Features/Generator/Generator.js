import bg from '../../../img/1.avif'
import React from 'react'
import { useState } from "react";

const Generator = () => {
    const[dropdown8, setDropdown8] = useState(false)
    const[dropdown5, setDropdown5] = useState(false)
    const[dropdown6, setDropdown6] = useState(false)
    const[dropdown7, setDropdown7] = useState(false)
   
  
    const open = () => {
      setDropdown5(true)
   }
     const close = () => {
      setDropdown5(false)
   }
    const ope = () => {
      setDropdown6(true)
   }
     const clos = () => {
      setDropdown6(false)
   }
    const opn = () => {
      setDropdown7(true)
   }
     const clse = () => {
      setDropdown7(false)
   }
    const op = () => {
      setDropdown8(true)
   }
     const cls = () => {
      setDropdown8(false)
   }
  
    return (
        <div className="  ">
        {/* 1 */}
        <div className="bg-[#f7f5f5] py-[40px] px-[60px] text-[rgb(27,73,66)]  ">
             <h1 className='text-[35px] md:text-[30px] font-[300] lg:text-[40px] text-center pb-[20px] '>
             Build your course curriculum  with AI
             </h1>
             <p className='text-center text-[25px] lg:text-[30px] px-[20px]  lg:px-[80px] leading-[145%] tracking-[-0.27px]'>
             Introducing Teachable’s course curriculum generator.
     
             </p>
             <p  className='text-center text-[25px] lg:text-[30px] px-[20px] pb-[20px] lg:px-[80px] leading-[145%] tracking-[-0.27px]'>
             Unblock yourself. Get creative. Build faster.
             </p>
             <button className='bg-[#20c997] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-black '>Start for free</button>
           </div>
           {/* 1*/}
     
           {/* 2 */}
           <div className=" bg-[rgb(27,73,66)] text-[#f7f5f5] p-[50px] grid grid-cols-1 lg:grid-cols-2 lg:p-[60px] ">
             <div className=" pb-[40px] ">
               <h1 className='text-[35px] md:text-[30px] font-[300] lg:text-[40px] text-left pb-[20px] py-[40px] '>
               All in one place 
               </h1>
               <p className='text-left text-[20px] lg:text-[30px]   leading-[145%] tracking-[-0.27px]'>
               It’s the power of AI—now inside your Teachable experience. With the curriculum generator, get your course outline then start building on it right away.
               </p>
             </div>
             <div className="hidden md:block ">
             <img className="w-[100%] h-[100%] pb-[20px] " src = {require('../../../img/1.avif')} alt="" />
             </div>
           </div>
           {/* 2 */}
     
           {/* 3 */} 
           <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
             <h1 className='text-[30px] lg:text-[50px] font-[200] tracking-[-0.3px] leading-[120%] text-center pb-[20px] '>Creativity, minus the writer's block</h1>
             <p className='text-center pb-[20px] lg:text-[30px] text-[20px] tracking-[-0.16px] leading-[120%]'>Sometimes getting started is the hardest part—until now. Just follow these steps.</p>
     
             
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
               <div className="">
                 <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%] ' >Step 1: Name your course </h4>
                 <p className='pt-[20px] pb-[20px] ' >When naming your new course, check "Help me generate a course outline."</p>
               </div>
     
               <div className="">
                 <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]  ' >Step 2: Get your outline</h4>
                 <p className='pt-[20px] pb-[20px] '> Enter a brief description of your course. The generator will create an outline for you in just a few moments.</p>
               </div>
     
               <div className="">
                 <h4 className='text-[25px] font-[400] pt-[10px] leading-[110%]' >Step 3: Make it yours</h4>
                 <p className='pt-[20px] pb-[20px] '>Keep the momentum going. Use our flexible curriculum builder to rearrange, edit, and make it yours.</p>
               </div>
             </div>
     
             <button className='bg-[#20c997] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-black '>Start for free</button>        
           </div>
           {/* 3 */}
     
          {/* 4*/}
           <div className="bg-[rgb(34,34,34)] text-white p-[50px] lg:p-[60px] mt-[40px] ">
             <h2 className='text-[25px] md:text-[30px] text-center leading-[145%] font-[200]' >Harness the power of AI</h2>
             <p className='text-center pt-[10px] pb-[30px] ' >Our course curriculum generator is about working smarter, not harder.</p>
     
             <div className="lg:grid lg:grid-cols-2 gap-[20px] ">
             
               <div className="text-left  pb-[20px] lg:pb-0 ">
                   <h3  className='text-[20px] lg:text-[35px] font-[500] pb-[10px]  ' >Your starting point</h3>
                   <p className='leading-[145%] tracking-[-0.27px] ' >Even experts sometimes struggle with trasnlating their expertise into a course. The curriculum generator is designed to help.
                   </p>
               </div>
                   <div className="hidden md:block">
                     <img className="w-[100%] h-[100%] pb-[20px] " src = {require('../../../img/2.gif')} alt="" />
                   </div>
             </div> 
     
             <div className="lg:grid lg:grid-cols-2 gap-[20px] pt-[70px] pb-[30px] ">
             <div className="hidden lg:block ">
                 <img className="w-[100%] h-[100%] " src = {require('../../../img/ai3.avif')} alt="" />
               </div>
     
               <div className="text-left pb-[20px] lg:pb-0  ">
                   <h3 className='text-[20px] lg:text-[35px] font-[500] pb-[10px] pt-[20px] ' >Build from there</h3>
                   <p className='leading-[145%] tracking-[-0.27px]  '>Your AI-powered curriculum gives you an idea of what your course could look like. You can customize however you want—have fun with it!</p>
               </div>
     
               <div className="hidden md:block lg:hidden ">
                 <img className="w-[100%] h-[100%] " src = {require('../../../img/ai3.avif')} alt="" />
               </div>
             </div> 
             <button className='bg-[#20c997] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-black '>Start for free</button>
     
           </div>
           {/*4 */}
     
           {/* 5 */}
           <div className="p-[40px] lg:p-[80px] xl:p-[80px] ">
           <h1 className='text-center text-[30px] font-[500] lg:text-[70px] pb-[30px] '>
           FAQ
           </h1>
           {/* first dropdown */}
           <div className="">
             <div className="flex justify-between">
               <div className="text-[25px] lg:text-[30px] pt-[20px] pb-[20px] ">
                 <h3>How exactly does it work? </h3>
               
               </div>
         
               <div className="dropdown">
               {
               !dropdown5  ?
     
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
                 !dropdown5  ?
                 ""
                 :
                 <div className="">
                   <p>It’s easy. The course curriculum generator incorporates AI directly into Teachable. From your course admin, enter your course title and select an author, check “Help me generate a course outline,” and enter a course description between 1–1,000 characters. Once the outline is generated, you’ll have the option to drop the outline directly into the curriculum builder and edit from there—or start again with a new course description.
     
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
                 <h3>What makes Teachable’s AI tool different?</h3>
               </div>
         
               <div className="dropdown2">
               {
               !dropdown6  ?
     
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
                 !dropdown6  ?
                 ""
                 :
                 <div className="">
                   <p>We designed the course curriculum generator to help you work more effectively—that’s why it’s integrated into the platform. Your AI-generated course outline is uploaded into the curriculum builder so you can use it immediately.
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
                 <h3>Who can use this feature?</h3>
               </div>
         
               <div className="dropdown">
               {
               !dropdown7  ?
     
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
                 !dropdown7  ?
                 ""
                 :
                 <div className="">
                   <p>Anyone on any Teachable plan, including the free plan. (Is that not you? Join for free here.)
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
                 <h3 >Why else should I join a free plan?</h3>
               </div>
         
               <div className="dropdown">
               {
               !dropdown8 ?
     
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
                 !dropdown8 ?
                 ""
                 :
                 <div className="">
                   <p>A free plan on Teachable allows you to start growing your business by selling online knowledge products—not just courses, but online coaching and digital downloads too. Get access to payment processing, course design templates, core student engagement tools, and more.
     
                   </p>
                 </div>
               }
             </div>
     
     
     
             
           </div>
       {/* fourth dropdown enmd */}
     
     
           </div>
           {/* 5 */}
           
     
           
     
         </div>
    );
}
 
export default Generator;