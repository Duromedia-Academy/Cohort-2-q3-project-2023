import React from "react";
import pic8 from "../../../img/img8.webp";
import pic9 from "../../../img/img9.webp";
import pic10 from "../../../img/img10.webp";
import pic11 from "../../../img/img11.webp";
import pic12 from "../../../img/img12.webp";
import pic13 from "../../../img/img13.webp";
import pic14 from "../../../img/img14.webp";
import pic15 from "../../../img/img15.webp";
import pic16 from "../../../img/img16.webp";
import pic17 from "../../../img/img17.webp";
import pic18 from "../../../img/img18.webp";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

const Events = () => {
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

  const [isCoat, setIsCoat] = useState(false);
  const isFine = () => {
    setIsCoat(true);
  };
  const isNotFine = () => {
    setIsCoat(false);
  };
  return (
    <div>
      <section className=" one">
        <div className="bg-cream">
          <div className=" flex flex-col-reverse lg:flex-row md:max-w-nice lg:max-w-me md:m-auto items-center justify-around  py-16 lg:py-24 pb-10 mx-3">
            <div className=" pt-8 md:pt-12 lg:pt-0">
              <img
                src={pic8}
                alt=""
                className="md:w-pad lg:w-[580px] lg:h-[680px]  w-[520px] h-[520px]"
              />
            </div>
            <div className=" max-w-sit md:max-w-nice lg:max-w-md">
              <h1 className=" text-4xl lg:text-mac lg:leading-it font-normal text-brown">
                Be the first to know about our next event
              </h1>
              <p className=" lg:pt-10 lg:pb-24 py-12">
                From live workshops to free virtual summits to month-long
                challenges, we’re out to partner with more creators than ever in
                2022 to help you grow and scale your knowledge business. Submit
                your email below to be the first to find out about upcoming
                events.
              </p>
              <div className="">
                <form>
                  <label>Enter your email:</label>
                  <div className="flex  flex-col md:flex-row gap-6  py-2">
                    <input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className=" text-black py-4  w-full  pl-4 border-b border-brown text-mag"
                    />
                    <button className="bg-brown  text-white py-2 lg:py-4 px-8 rounded hover:opacity-80">
                      <a href="#/" className=" ">
                        submit
                      </a>
                    </button>
                  </div>
                </form>
                <p className=" lg:max-w-omo  max-w-md text-lit ">
                  *By submitting your email address, you agree to Teachable's{" "}
                  <a href="#/" className=" underline">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#/" className=" underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className=" py-8 lg:pt-20  pb-32">
          <h1 className=" lg:max-w-no m-auto  md:max-w-[750px] max-w-[350px] pb-8 text-3xl md:text-4xl lg:text-6xl font-light">
            Past Events
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  lg:max-w-no m-auto lg:gap-20 place-items-center md:max-w-[750px] gap-12">
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic9} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">Create the Future:</h1>
                  <h1 className=" text-2xl md:text-3xl ">a Teachable summit</h1>
                  <p className=" pt-6">
                    The Create the Future Summit is a two-day, virtual event
                    that will showcase how the future of the creator economy is
                    truly knowledge- based.Join course creation and
                    entrepreneurial leaders as well as Teachable experts from
                    all industries in panels, workshops, and demos.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic10} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl ">
                    Journey to Create 2022 Summit
                  </h1>
                  <p className=" pt-6">
                    We brought together 15 successful creators and business
                    experts across all industries for our live, three-day
                    summit. Attendees gained actionable insights on every
                    subject needed to succeed as a course creator—no matter what
                    stage of their journey they’re in.
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic11} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">
                    The Creator Experience 2022 Summit
                  </h1>
                  <p className=" pt-6">
                    In this three-day, live virtual event, we set out to
                    celebrate all the things that make up the creator
                    experience—marketing, creativity, money, mindset,and more.
                    Attendees enjoyed panel discussions, keynote events, live
                    demos, and fireside chats.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic12} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">
                    Teachable:u Live 2022
                  </h1>
                  <p className=" pt-6">
                    To start 2022 on a high note, we brought our flagship
                    training program to life with three brand-new live webinars.
                    Topics included proven steps to launching an online course,
                    how to boost conversions with emotion-driven marketing, and
                    strategies for scaling up your course business.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic13} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">
                    Sales Accelerator Challenge
                  </h1>
                  <p className=" pt-6">
                    Designed to give creators the blueprint to successful course
                    marketing, this challenge included four weeks of guidance to
                    help creators reach their sales goals and build long-term
                    success in the creator economy.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic14} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">
                    Launch Accelerator Challenge
                  </h1>
                  <p className=" pt-6">
                    This challenge included an exclusive community space to help
                    creators work together and stay focused. We gave creators
                    the tools, guidance, and resources they needed to launch and
                    pre-sell their next course in 30 days or less—and more than
                    half of nearly 6 mt-6,000 participants succeeded.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic15} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">
                    Women Create 2021 Summit
                  </h1>
                  <p className=" pt-6">
                    We invited some of the best and brightest women creators on
                    Teachable to take part in this free virtual summit. Topics
                    covered included turning a creative passion into a business,
                    managing finances as a creator, building an engaged
                    community, and so much more.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic16} alt="" className=" w-[350px]" />
                <div className=" max-w-omo mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">Reach 2020 Summit</h1>
                  <p className=" pt-6">
                    Over three days, we held a virtual summit with a dedicated
                    day for content creators, freelancers, and coaches.
                    Attendees learned actionable steps for scaling their online
                    business straight from leaders in their respective
                    industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" max-w-[350px] bg-cream  min-h-[95vh]">
                <img src={pic17} alt="" className=" w-[350px]" />
                <div className=" max-w-omo  mx-6 mt-6">
                  <h1 className=" text-2xl md:text-3xl">
                    Share What You Know 2020 Summit
                  </h1>
                  <p className=" pt-6">
                    Industry experts, guest creators, and in-house Teachable
                    pros came together for a three-day event that covered every
                    aspect of building, scaling, and marketing an online
                    learning business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-goal">
        <div className=" lg:max-w-no m-auto lg:py-28 py-8 max-w-sit md:max-w-nice px-3">
          <p className=" text-5xl">" </p>
          <h1 className=" text-4xl lg:text-5xl lg:leading-[4rem] font-light pt-3 pb-10">
            This challenge was great! I’m so excited and proud to have put my
            first online product out there. All of the lessons were helpful and
            I loved how the steps were laid out so plainly and we’re so easy to
            follow.
          </h1>
          <h2 className=" text-xl lg:text-2xl">
            Jess Reazin : Launch Accelerator participant
          </h2>
        </div>
      </div>

      <div className=" bg-brown">
        <div className=" flex md:flex-col lg:flex-row md:max-w-nice lg:max-w-ok m-auto lg:items-center justify-evenly pt-8 md:py-24">
          <div className=" mx-6 md:mx-0 text-white">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl lg:max-w-[400px] md:max-w-[600px] max-w-sit">
              Interested in speaking at one of our events?
            </h1>
            <p className=" md:pb-8 lg:pb-0 pt-4 ">
              <a href="#/" className=" underline">
                Fill out this form
              </a>{" "}
              and we’ll be in touch.
            </p>
          </div>
          <div className=" hidden md:flex">
            <img
              src={pic18}
              alt=""
              className="md:w-[700px] lg:w-[550px] lg:h-[370px]"
            />
          </div>
        </div>
      </div>

      <div className=" py-12">
        <div className=" text-center">
          <h1 className="  text-3xl lg:text-5xl">Any questions?</h1>
        </div>

        <div className=" max-w-sit md:max-w-nice lg:max-w-[900px] m-auto px-6">
          <ul>
            {!isAnswerOpen ? (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isOpen}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            ) : (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isClose}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            )}

            {!isLock ? (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isTry}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            ) : (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isTime}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            )}

            {!isMind ? (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isApp}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            ) : (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isAlt}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            )}

            {!isNice ? (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isOK}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            ) : (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isNotOk}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem]   md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            )}

            {!isBit ? (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isAt}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            ) : (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isOn}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            )}

            {!isCoat ? (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isFine}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            ) : (
              <li className=" pt-8 lg:pt-20 border-b border-black pb-6">
                <div
                  className=" flex justify-between items-center cursor-pointer"
                  onClick={isNotFine}
                >
                  <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                    What events do you have coming up?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Later this month, we’re bringing teachable:u to life with
                      three live workshops—more details to come!
                    </p>
                  </li>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="  bg-goal">
        <div className=" py-24">
          <div className=" text-center">
            <h1 className=" text-4xl  lg:text-5xl max-w-sit md:max-w-none lg:max-w-[600px] m-auto font-[330] pb-12 lg:pb-24">
              Get first access to the next Teachable event
            </h1>
          </div>
          <div className=" md:max-w-nice m-auto  max-w-sit px-3 ">
            <form>
              <label>Enter your email:</label>
              <br />
              <div className="  gap-6 flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="md:pr-72 lg:pr-80 py-4 pl-3 border-b-2 border-brown"
                />
                <button className=" bg-brown text-white md:py-4 md:px-8 py-3 rounded hover:opacity-90">
                  <a href="#/">submit</a>
                </button>
              </div>
            </form>
            <p className=" text-[0.8rem] max-w-[500px]">
              *By submitting your email address, you agree to Teachable's Terms
              of use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
