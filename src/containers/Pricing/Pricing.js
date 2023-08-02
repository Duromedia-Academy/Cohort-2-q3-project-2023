import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import pic69 from '../../img/img69.webp'
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
const Pricing = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const isOpen = () => {
    setIsAnswerOpen(true);
  };

  const isClose = () => {
    setIsAnswerOpen(false);
  };

  const [isLock, setIsLock] = useState(false);
  const isTry = () => {
    setIsLock(true);
  };

  const isTime = () => {
    setIsLock(false);
  };
  const [isMind, setIsMind] = useState(false);
  const isApp = () => {
    setIsMind(true);
  };
  const isAlt = () => {
    setIsMind(false);
  };
  const [isNice, setIsNice] = useState(false);
  const isOK = () => {
    setIsNice(true);
  };
  const isNotOk = () => {
    setIsNice(false);
  };
  const [isBit, setIsBit] = useState(false);
  const isAt = () => {
    setIsBit(true);
  };
  const isOn = () => {
    setIsBit(false);
  };

  return (
    <div>
     <section className="one">
        <div className=" bg-cream shadow-md">
          <div className="  max-w-sit md:max-w-nice lg:max-w-no m-auto  text-center px-3 md:px-0 py-28">
            <h1 className="text-4xl lg:text-6xl text-gap font-[600] lg:pt-6">
              Best-in-class features.
            </h1>
            <p className=" text-4xl lg:text-6xl py-6 font-[300] md:font-[350] text-gap ">
              Straightforward pricing.
            </p>
            <p className="  text-[1.1rem] md:text-xl text-gap">
              Preview advanced plan features free for 14 days,{" "}
              <span className=" font-[650]">no credit card required.</span>{" "}
            </p>
            <div className=" pt-6 md:pt-16">
              <button className="  bg-goal  py-3  w-full  md:w-fit md:px-8 md:py-4  rounded-md">
                <a href="#/" className=" text-[1.2rem]">
                  Try for free
                </a>
              </button>
            </div>
          </div>
          <div className=" lg:max-w-[1300px] flex  justify-center lg:justify-end">
            <div className="  bg-white w-fit py-2 px-2 rounded-full  space-x-4 ">
              <button className=" bg-white py-1 px-2 rounded-full">Monthly</button>
              <button className=" bg-gap text-white py-1 px-4 rounded-full">Annual</button>
            </div>
          </div>
          <div className=" lg:max-w-[1300px] flex  justify-center lg:justify-end pt-2">
            <p>Save 33% with annual</p>
           </div>
           <div className=' grid grid-cols-1 lg:grid-cols-3  gap-6 max-w-ok m-auto pt-8 px-6 lg:relative lg:bottom-[-80px]'>
            <div className=' bg-gap   lg:max-w-[400px]  w-full '>
              <div className=' pt-2  h-full '>
               <div className=' bg-white h-full shadow-lg '>
                  <div className='  bg-white  '>
                    <div className='   min-h-fit  mx-6'>
                      <div >
                        <div className=' lg:max-w-[250px] pb-16'>
                          <h3 className=' text-3xl py-6'>Free</h3>
                          <p>Try it out and start earning before you pay.</p>
                          <h3 className=' text-5xl font-[350] text-gap pt-4 pb-3'>$0<span className=' text-2xl'>/month</span></h3>
                          <p className=' text-[0.8rem] pb-5'>No credit card required</p>
                          <div className='  '>
                            <button className=' bg-brown text-white py-3 lg:px-6 rounded-md w-full lg:w-fit'>
                              <a href="#/">Start for free</a>
                            </button>
                          </div>
                        </div>
                        <div className='lg:border-t-2  hidden lg:block '>
                          <div className=' pt-8'>
                            <p className=''>Free plan features include:</p>
                            <div className='   '>
                              <ul className=' ' >
                                <li className=' py-3 '>
                                  <div className='flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px] '>$1 + 10% transaction fee</p>
                                  </div>
                                </li>
                                <li className='  py-3'>
                                  <div className='flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]  ' /> <p className='  max-w-[290px]'>1 published product of each type (course, coaching, downloads)</p>
                                  </div></li>
                                <li className='  py-3'>
                                  <div className='flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className='  max-w-[290px]'>No-code course builder and web pages</p>
                                  </div>
                                </li>
                                <li className=' py-3'>
                                  <div className=' flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className='  max-w-[290px]'>Student referrals</p>
                                  </div>
                                </li>
                                <li className='  py-3'>
                                  <div className=' flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem] ' /> <p className=' max-w-[290px] '>teachable:pay with integrated payment processing</p>
                                  </div>
                                </li>
                                <li className=' py-3'>
                                  <div className='  flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className='  max-w-[290px]'>Email support</p>
                                  </div>
                                </li>
                                <li className=' py-3'>
                                  <div className=' flex gap-4 items-center'>
                                    <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>1 admin & author seat</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
           </div>
         </div>
            <div className=' bg-gap   w-full lg:max-w-[400px] '>
           <div className=' pt-2 h-full'>
               <div className=' h-full bg-white shadow-lg'>
                  <div className='  bg-white   '>
                    <div className=' h-full   mx-6 '>
                      <div className=' lg:max-w-[250px] pb-8'>
                        <h3 className=' text-3xl py-6'>Basic</h3>
                        <p>The foundational tools and support you need to build your business.</p>
                        <h3 className=' text-5xl font-[350] text-gap pt-4 pb-3'>$39<span className=' text-2xl'>/month</span></h3>
                        <p className=' text-[0.8rem]  pb-5'>$468 billed annually</p>
                        <div>
                          <button className=' bg-goal text-black py-3 lg:px-6 w-full lg:w-fit rounded-md'>
                            <a href="#/">Try for free</a>
                          </button>
                        </div>
                        <p className=' pt-4'>Or <a href="#/" className=' underline'> purchase now</a></p>
                      </div>
                      <div className=' lg:border-t-2  hidden lg:block'>
                        <div className=' pt-8'>
                          <p className=' '>All Free plan features plus:</p>
                          <div className='  '>
                            <ul>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>5% transaction fee</p>
                                </div>
                              </li>

                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>5 published product of each type (course, coaching, downloads)</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Integrated email marketing</p>
                                </div>
                              </li>
                              <li className='  py-3'>
                                <div className='flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Coupons and order bumps</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Custom domains</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className='  flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Live group coaching</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Accelerator challenge access</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

           </div>
   </div>
            <div className=' bg-goal  w-full  lg:max-w-[400px]'>
              <div className=' text-[1rem] text-center'><p>Popular</p></div>
              <div className='  h-fit '>
                <div className=' bg-white h-fit lg:pb-12 shadow-lg'>
                  <div className='   bg-white  '>
                    <div className='      mx-6 '>
                      <div className=' lg:max-w-[250px] pb-8'>
                        <h3 className=' text-3xl pt-2 pb-6'>Pro</h3>
                        <p className=''>Advanced tools and more support to help you scale.</p>
                        <h3 className=' text-5xl font-[350] text-gap pt-4 pb-3'>$119<span className=' text-2xl'>/month</span></h3>
                        <p className=' text-[0.8rem]  pb-5'>$1,428 billed annually</p>
                        <div>
                          <button className=' bg-goal text-black py-3 w-full lg:w-fit lg:px-6 rounded-md'>
                            <a href="#/">Try for free</a>
                          </button>
                        </div>
                        <p className=' pt-4'>Or <a href="#/" className=' underline'> purchase now</a></p>
                      </div>
                      <div className=' lg:border-t-2   hidden lg:block'>
                        <div className=' pt-8'>
                          <p className=' '>All Basic plan features plus:</p>
                          <div className='  '>
                            <ul>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>0% transaction fee</p>
                                </div>
                              </li>
                              <li className=' py-3 '>
                                <div className='flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> < p className=' max-w-[290px]'>50 published product of each type (course, coaching, downloads)</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Affiliate marketing</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Live chat support</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Upsells to increase order value</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className='  flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Public API access</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className=' flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>Removable branding</p>
                                </div>
                              </li>
                              <li className=' py-3'>
                                <div className='  flex gap-4 items-center'>
                                  <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /> <p className=' max-w-[290px]'>5 admin & author seats</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
          </div>
        </div>
         </div>
        </div>
     </section>
     <section className='two'>
        <div className=' pt-32 pb-20 px-6'>
        <div  className=' max-w-[1200px] bg-cream m-auto py-14 lg:py-28 border  border-goal'>
          <div className=' flex  lg:max-w-nice m-auto  flex-col lg:flex-row  justify-between  text-gap'>
            <div className=' mx-6'>
                <h3 className=' text-4xl font-[350]'>Business</h3>
                <p className=' py-3'>Enterprise solutions</p>
                <h3 className=' text-5xl font-[350]'>$499<span className='text-2xl'>/month</span></h3>
                <p className=' text-[0.8rem] py-3'>$5,988 billed annually</p>
                <div className=' pt-4'>
                  <button className=' bg-brown text-white w-full lg:w-fit py-3 px-6 rounded-md'>
                    <a href="#/">Select Buisness</a>
                  </button>
                </div>
            </div>
            <div className=' hidden lg:flex'>
              <ul>
                  <p className=' font-medium'>All Pro plan features plus:</p>
                  <li className=' py-4'>
                    <div className=' flex gap-4'>
                      <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /><p className=' max-w-[280px]'>Unlimited courses, coaching products, and digital downloads</p>
                    </div>
                  </li>
                  <li className=' py-4'>
                    <div className=' flex gap-4'>
                      <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /><p className=' max-w-[280px]'>20 admin & author seats</p>
                    </div>
                  </li>
                  <li className=' py-4'>
                    <div className=' flex gap-4'>
                      <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /><p className=' max-w-[280px]'>Advanced theme customizations</p>
                    </div>
                  </li>
                  <li className=' py-4'>
                    <div className=' flex gap-4'>
                      <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /><p className=' max-w-[280px]'>Custom user roles</p>
                    </div>
                  </li>
                  <li className=' py-4'>
                    <div className=' flex gap-4'>
                      <IoCheckmarkCircleOutline className=' text-goal text-[1.5rem]' /><p className=' max-w-[280px]'> Bulk student enrollment</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='  w-full lg:w-fit px-3 lg:max-w-[yhpx] m-auto text-center text-[1rem] pt lg:pt-16'>
            <p>Teachable plans will automatically renew until canceled. Recurring charges may be subject to changes.</p>
            <p> Plans can be canceled any time. <span className=' font-[450]  text-blue underline'><a href="#/">Standard processing fees apply.</a></span> Have questions? Contact <span className=' font-[450] text-blue underline'><a href="#/">support@teachable.com</a></span></p>
        </div>
      </div>
     </section>
     <section className=' three'>
       <div className=' bg-gap text-white py-12'>
        <div className=' flex flex-col lg:flex-row  lg:max-w-no m-auto justify-around items-center'>
          <div className=' max-w-[520px] md:max-w-[700px] lg:max-w-[430px] pb-10 lg:pb-0'>
              <h3 className=' text-4xl lg:text-5xl md:text-[2.5rem]'>Not sure which plan is right for you?</h3>
              <p className='lg:max-w-[400px] text-[1.2rem]  py-8'>Take this six question quiz to discover the best Teachable plan for your business's needs.</p>
              <div>
                <a href="#/" className=' underline lg:underline-offset-[6px]  hover:decoration-goal'>Take the quiz</a>
              </div>
          </div>
          <div className=''>
            <img src={pic69} alt=""  className=' w-[520px] md:w-[700px]  lg:w-[520px]'/>
          </div>
        </div>
       </div>
     </section>
     <section className='four'>
      <div className=' py-12'>
          <div className=" text-center">
            <h1 className=" text-gap  text-3xl lg:text-5xl">Pricing FAQs</h1>
          </div>

          <div className=" max-w-sit md:max-w-nice lg:max-w-[900px] m-auto px-6">
            <ul>
              {!isAnswerOpen ? (
                <li className=" pt-12 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isOpen}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Can I try Teachable for free?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className=''>
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Yes! You can try Teachable’s free plan to get started, at no cost to you, and start earning.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-12 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isClose}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                        Can I try Teachable for free?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className=" hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                          Yes! You can try Teachable’s free plan to get started, at no cost to you, and start earning.
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isLock ? (
                <li className=" pt-12  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isTry}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Can I cancel my account at any time?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        We hope you don’t, but of course you can! If you decide Teachable is not right for you, simply cancel your account.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-12  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isTime}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                        Can I cancel my account at any time?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                          We hope you don’t, but of course you can! If you decide Teachable is not right for you, simply cancel your account.
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isMind ? (
                <li className=" pt-12  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isApp}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Can I change my plan once I sign up?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Yes, you can change your plan at any time.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-12 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isAlt}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                        Can I change my plan once I sign up?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                          Yes, you can change your plan at any time.
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isNice ? (
                <li className=" pt-12  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isOK}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Are there any transaction fees?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        There are 0% transaction fees on the Pro and Business plans. The Basic plan has a 5% transaction fee. Free plan users pay $1 + 10% transaction fees. In addition, there are processing fees charged by payment processors like credit cards.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-12 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isNotOk}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                        Are there any transaction fees?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem]   md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                          There are 0% transaction fees on the Pro and Business plans. The Basic plan has a 5% transaction fee. Free plan users pay $1 + 10% transaction fees. In addition, there are processing fees charged by payment processors like credit cards.
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isBit ? (
                <li className=" pt-12 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isAt}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Who uses Teachable?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Teachable offers creators, influencers, entrepreneurs, and business owners the best, most flexible way to share and tap into the value of their experience and expertise with their audience and customers. Yoga instructors, musicians, financial advisors, watercolor artists, mountain climbers, product marketing coaches... you name it.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-12  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isOn}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                        Who uses Teachable?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                          Teachable offers creators, influencers, entrepreneurs, and business owners the best, most flexible way to share and tap into the value of their experience and expertise with their audience and customers. Yoga instructors, musicians, financial advisors, watercolor artists, mountain climbers, product marketing coaches... you name it.
                      </p>
                    </li>
                  </div>
                </li>
              )}
            </ul>
          </div>
      </div>
     </section>
     <section className='five'>
        <div className=' bg-goal py-12 lg:py-24'>
          <div className=' text-center'>
            <h3 className=' text-4xl lg:text-5xl font-[490]'>Start earning.</h3>
            <h4 className=' text-4xl lg:text-5xl font-[350] pt-1'>Sign up free today.</h4>
            <div className=' pt-14'>
              <button className=' py-3 px-6 lg:py-5 lg:px-10 bg-brown text-white rounded-md'>
                <a href="#/">Try for free</a>
              </button>
            </div>
          </div>
        </div>
     </section>
    </div>
  );
};

export default Pricing;
