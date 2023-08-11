import bg from '../../../img/1.avif'
import React from 'react'
import { useState } from "react";

const TeachablePay = () => {
   
    return (
        <div className="  ">
   {/* 1 */}
      <div className="grid grid-cola-1 lg:grid-cols-2 bg-[rgb(27,73,66)] mb-[20px] lg:p-[80px]  ">
          <div className=" py-[40px] px-[60px] lg:p-0 text-white ">
              <h1 className='text-[35px] md:text-[30px] font-[300] lg:text-[45px] text-left pb-[20px] '>
              teachable:pay
              </h1>
              <p className='text-left text-[25px] lg:text-[35px]    leading-[145%] tracking-[-0.27px]'>
              Sell confidently, earn powerfully

              </p>
              <p  className='text-left text-[25px] lg:text-[35px] pb-[20px]  leading-[145%] tracking-[-0.27px]'>
              Learn how Teachable automates, streamlines, and scales your business—so you can spend more time transforming students’ lives with the power of knowledge.
              </p>
              <button className='bg-[#20c997] rounded-lg p-[15px] flex justify-start w-auto text-left text-black '>Start for free</button>
          </div>

          <div className="">
          <img className="w-[100%] h-[100%] p-[50px] lg:p-0" src = {require('../../../img/tp1.avif')} alt="" />
          </div>
      </div>
      {/* 1*/}

    
      {/* 3 */} 
      <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
          <h1 className='text-[30px] lg:text-[50px] font-[200] tracking-[2px] leading-[120%] text-center pb-[20px] '>Your business, simplified</h1>
          <p className='text-center pb-[20px] lg:text-[30px] text-[35px]  leading-[145%] font-[600] '>The automated way to get paid, manage payouts, and sell confidently. No integrations necessary.</p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px]  ">
            <div className="">
              <div className="text-[60px] text-[#20c997]">
              <i class="fa-solid fa-gears"></i>
              </div>
              <h4 className='text-[25px]  pt-[10px] leading-[110%]  font-[300] ' >Peace of mind, automated </h4>
              <p className='pt-[20px] pb-[20px] ' >Reduce risk and protect your bottom line with fraud monitoring and chargeback support. <br /> Save time with automated sales tax calculation, collection, and remittance and filing.*"</p>
            </div>

            <div className="">
              <div className=" text-[60px] text-[#20c997] text-center ">
              <i class=" fa-solid fa-globe"></i>
              </div>

              <h4 className='text-[25px]  pt-[10px] leading-[110%]   font-[300] ' >Sell confidently across the globe</h4>
              <p className='pt-[20px] pb-[20px] '> Boost checkout conversion up to 22% in global markets with Teachable's OnePrice tax-inclusive pricing option, available only on teachable:pay. <br /> Drive sales with order bumps, coupons, and more.</p>
            </div>

            <div className="">
              <div className="text-[60px] text-[#20c997] text-center">
              <i class="fa-regular fa-calendar"></i>
              </div>
              <h4 className='text-[25px] pt-[10px] leading-[110%] font-[300] ' >Flexibility that meets your needs</h4>
              <p className='pt-[20px] pb-[20px] '> Choose your ideal payout schedule daily, weekly, or monthly <br /> .Accept all major payment methods,including debit card, credit card,Apple Pay, and Google Pay.</p>
            </div>

          

     
      </div>
      </div>
     <p className='text-center italic' >Please read our Knowledge Base for more details on tax handling.</p>      

      {/* </div> */}
    
      {/* 3 */}

     {/* 4*/}
      <div className="bg-[rgb(34,34,34)] text-white p-[50px] lg:p-[60px] mt-[40px] ">
        <h2 className='text-[25px] md:text-[30px] text-center leading-[145%]  font-[500] ' >More than a payment gateway</h2>
        <p className='text-center pt-[25px] pb-[30px] tracking-[2px] font-[500] text-[25px] ' >It’s your one-stop shop for worry-free business management..</p>

        <div className="lg:grid lg:grid-cols-2 gap-[20px] ">
        
        <div className="hidden md:block">
                <img className="w-[100%] h-[100%] pb-[20px] lg:pt-[35px] " src = {require('../../../img/tp2.avif')} alt="" />
              </div>
          <div className="text-left  pb-[20px] lg:pb-0 ">
              <h3  className='text-[25px] lg:text-[35px] font-[400] pt-[35px] pb-[15px]  ' >Ready for your first sale in minutes</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >Teachable:pay comes with your account, so all you have to do is take a few minutes to set it up.
              </p>
              <h3  className='text-[25px] lg:text-[35px] font-[400] pt-[35px] pb-[15px]  ' >Simple, reliable and powerful checkout</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >Our team is constantly focused on enhancing the student checkout experience, improving conversion, and adding flexibility and sales capabilities.
              </p>
              <h3  className='text-[25px] lg:text-[35px] font-[400] pt-[35px] pb-[15px]  ' >Fraud protection</h3>
              <p className='leading-[145%] tracking-[-0.27px] ' >We help you handle chargebacks and prevent fraudulent purchases to protect your bottom line.
              </p>
          </div>
             
        </div> 

        <div className="lg:grid lg:grid-cols-2 gap-[20px] pt-[70px] pb-[30px] ">


          <div className="text-left pb-[20px] lg:pb-0  ">
              <h3 className='text-[25px] lg:text-[35px] font-[400] pt-[35px] pb-[15px] ' >Taking care of taxes</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Teachable calculates, collects, and remits sales taxes on your behalf, so you don't have to deal with additional accounting work every quarter.*</p>
              <h3 className='text-[25px] lg:text-[35px] font-[400] pt-[35px] pb-[15px] ' >Automatic payouts for your team</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>When you enable BackOffice for an additional 2% transaction fee we automate commission payments monthly for your collaborators.</p>
              <h3 className='text-[25px] lg:text-[35px] font-[400] pt-[35px] pb-[15px] ' >Tax-inclusive pricing</h3>
              <p className='leading-[145%] tracking-[-0.27px]  '>Sell confidently into global markets and boost global checkout conversion up to 22% with tax-inclusive pricing.</p>
          </div>

          <div className="hidden md:block ">
            <img className="w-[100%] h-[100%] lg:pt-[35px] " src = {require('../../../img/tp3.avif')} alt="" />
          </div>
        </div> 
        <button className='bg-[#20c997] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-black '>Start for free</button>

        <p className='text-center italic py-[30px] text-[9px] '>*Please read our Knowledge Base for more details on tax handling in applicable jurisdictions.</p>
      </div>
      {/*4 */}

     {/* 5 */}
     <div className="p-[30px] pt-[30px] md:p-[50px] lg:max-w-[800px] my-0 mx-auto flex flex-col justify-center ">
      <h1 className='text-center text-[30px] font-[500] leading-[120%] tracking-[1.3%] ' > teachable:pay out-earns the competiton </h1>
      <img className="w-[100%] h-[100%]  px-[150px]   py-[50px]  flex  justify-center" src = {require('../../../img/tp4.avif')} alt="" />
    
     </div>
     {/* 5 */}

     {/* 6 */}
     <div className=" py-[30px] my-0 mx-auto max-w-[350px] md:max-w-none ">
          <h1 className='text-[30px] lg:text-[50px] font-[200] tracking-[2px] leading-[120%] text-center pb-[20px] '>Get started in two minutes</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-center md:px-[50px]  py-[20px] lg:px-[60px] lg:pl-[50px] lg:py-[70px] text-center ">
            <div className="">
              <div className="text-[30px]  text-center  flex justify-center pt-[30px] ">
              <p className='border-[3px] rounded-[50%] w-[60px] h-[60px] border-[#20c997] border-solid  text-[#20c997]'>1</p>
              </div>
                <p className='pt-[20px] pb-[20px] ' >Log in to Teachable and go into payment settings.</p>
            </div>

            <div className="">
            <div className="text-[30px]  text-center  flex justify-center pt-[30px]">
              <p className='border-[3px] rounded-[50%]  w-[60px] h-[60px] border-[#20c997] border-solid  text-[#20c997]'>2</p>
              </div>
              <p className='pt-[20px] pb-[20px] '> Provide your bank account payout information and currency.</p>
            </div>

            <div className="">
            <div className="text-[30px]  text-center  flex justify-center pt-[30px]">
              <p className='border-[3px] rounded-[50%]  w-[60px] h-[60px] border-[#20c997] border-solid  text-[#20c997]'>3</p>
              </div>
                <p className='pt-[20px] pb-[20px] '> Select your payout frequency.</p>
            </div>
            <div className="">
            <div className="text-[30px]  text-center  flex justify-center pt-[30px]">
              <p className='border-[3px] rounded-[50%]  w-[60px] h-[60px] border-[#20c997] border-solid  text-[#20c997]'>4</p>
              </div>
                <p className='pt-[20px] pb-[20px] '> Automate payouts and tax filings for collaborators and add PayPal as a payment option for students.</p>
            </div>

          

     
      </div>
      <h3 className='text-center text-[25px] text-[#20c997] lg:text-[35px] mt-[30px] pb-[20px] '>Confirm and you're done! </h3>
      </div>
     {/* 6 */}

     {/* 7 */}
       <div className=" bg-[rgb(27,73,66)] text-[#f7f5f5] p-[50px] lg:p-[60px] ">
        <div className=" pb-[40px] ">
         
          <p className='text-left text-[30px] lg:text-[50px]   leading-[145%] tracking-[-0.27px]'>
          "By using teachable:pay, I just save so much time and money. Before teachable:pay, it was just a lot of stress at the end of every quarter, and then, it was costing us quite a bit to pay the accountant to do all the filing for us. Anything that can be automated so I don't have to do it is heaven to me."
          </p>
        </div>
       <p>Paige Brunton : SquareSecrets</p>
      </div>
     {/* 7 */}

     {/* 8 */}
     <div className="bg-[#20c997] p-[50px] ">
        <h1 className='text-[30px] md:text-[30px] font-[400] lg:text-[40px] text-center  leading-[145%] tracking-[-0.27px] pb-[20px] '>
        Make the most out of your money with <span className='font-[600] '>teachable:pay</span> 
        </h1>
      
        <button className='bg-[#363636] rounded-lg px-[20px] py-[10px] flex justify-center m-0 w-auto my-0 mx-auto text-center text-white '>Start for free</button>
      </div>
      {/* 8 */}

      

    </div>
    );
}
 
export default TeachablePay;