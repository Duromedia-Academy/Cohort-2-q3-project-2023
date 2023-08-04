import React, { useState, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import blogImage from "../img/in-demand skills.jpg";
import creativity from "../img/industry standard.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Header = ({ background, color }) => {
  const [navStates, setNavStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleNav = (index) => {
    setNavStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false)),
    );
  };

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const [isSearchClickedMobile, setIsSearchClickedMobile] = useState(false);

  const [isMobileNav, setisMobileNav] = useState(false);

  const searchOpen = () => {
    setIsSearchClicked(true);
    document.querySelector(".navs").classList.add("hidden");
  };

  const searchClosed = () => {
    setIsSearchClicked(false);
    document.querySelector(".navs").classList.remove("hidden");
  };

  const menuOpen = () => {
    setisMobileNav(!isMobileNav);
    document.body.classList.toggle("overflow-hidden");
  };

  const [accordionStates, setAccordionStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleAccordion = (index) => {
    setAccordionStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false)),
    );
  };

  const contentEl1 = useRef();
  const contentEl2 = useRef();
  const contentEl3 = useRef();
  const contentEl4 = useRef();
  const contentEl5 = useRef();
  const contentEl6 = useRef();

  return (
    <div>
      {/*DESKTOP NAV */}
      <div className={`${background} ${color} relative hidden md:block`}>
        <div className=" flex items-center justify-between gap-20 px-[5%] border-b border-black h-16">
          <div className=" flex gap-5 items-center">
            <Link to={"/"}>
              <h1 className=" lg:text-[40px] font-semibold md:text-2xl">
                teach:able
              </h1>
            </Link>

            <div className="navs">
              <div className=" flex items-center font-semibold">
                <div
                  className=" cursor-pointer"
                  onMouseEnter={() => toggleNav(0)}
                  onMouseLeave={() => !toggleNav(0)}
                >
                  <Link to="/BlogHome">
                    <p className="py-5 px-2 hover:bg-[#a5c9bb] hover:underline whitespace-nowrap">
                      Blog home
                    </p>
                  </Link>

                  {navStates[0] && (
                    <div className="transition duration-500 ease-in">
                      <div className=" absolute w-full left-0 right-0 h-screen flex flex-col ">
                        <div className=" bg-[#1b4942] flex justify-between text-white px-[5%] py-[1.5%] basis-1/2 z-10">
                          <div className="">
                            <h1 className=" text-6xl font-medium">Blog Home</h1>
                          </div>
                          <div className="">
                            <ul className=" flex flex-col gap-5">
                              <li className=" hover:underline">
                                Grow your team
                              </li>
                              <li className=" hover:underline">
                                Small business finance
                              </li>
                              <li className=" hover:underline">
                                Taxes and payments
                              </li>
                            </ul>
                          </div>
                          <div className=" flex list-none gap-5 justify-self-end">
                            <div className=" w-60">
                              <img className="" src={blogImage} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                            <div className=" w-60">
                              <img className="" src={blogImage} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="  z-10 bg-black bg-blend-overlay basis-1/2 opacity-50"
                          onMouseEnter={() => !toggleNav(0)}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className=" cursor-pointer"
                  onMouseEnter={() => toggleNav(1)}
                  onMouseLeave={() => !toggleNav(1)}
                >
                  <Link to="/Money">
                    <p className="py-5 px-2 hover:bg-[#a5c9bb] hover:underline">
                      Money
                    </p>
                  </Link>

                  {navStates[1] && (
                    <div className="transition duration-500 ease-in">
                      <div className=" absolute w-full left-0 right-0 h-screen flex flex-col">
                        <div className=" bg-[#1b4942] flex justify-between text-white px-[5%] py-[1.5%] z-10">
                          <div className="">
                            <h1 className=" text-6xl font-medium">Money</h1>
                          </div>
                          <div className="">
                            <ul className=" flex flex-col gap-5">
                              <li className=" hover:underline">
                                Grow your team
                              </li>
                              <li className=" hover:underline">
                                Small business finance
                              </li>
                              <li className=" hover:underline">
                                Taxes and payments
                              </li>
                            </ul>
                          </div>
                          <div className=" flex list-none gap-5 justify-self-end">
                            <div className="w-72">
                              <img className="" src={blogImage} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                            <div className=" w-72">
                              <img className="" src={blogImage} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  A step-by-step guide on how to become an
                                  online tutor
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="  z-10 bg-black bg-blend-overlay basis-1/2 opacity-50"
                          onMouseEnter={() => !toggleNav(1)}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className=" cursor-pointer"
                  onMouseEnter={() => toggleNav(2)}
                  onMouseLeave={() => !toggleNav(2)}
                >
                  <Link to="/Creativity">
                    <p className="py-5 px-2 hover:bg-[#a5c9bb] hover:underline">
                      Creativity
                    </p>
                  </Link>

                  {navStates[2] && (
                    <div className="transition duration-500 ease-in">
                      <div className=" absolute w-full left-0 right-0 h-screen flex flex-col">
                        <div className=" z-10 bg-[#1b4942] flex justify-between text-white px-[5%] py-[1.5%]">
                          <div className="">
                            <h1 className=" text-6xl font-medium">
                              Creativity
                            </h1>
                          </div>
                          <div className="">
                            <ul className=" flex flex-col gap-5">
                              <li className=" hover:underline">
                                Grow your team
                              </li>
                              <li className=" hover:underline">
                                Small business finance
                              </li>
                              <li className=" hover:underline">
                                Taxes and payments
                              </li>
                            </ul>
                          </div>
                          <div className=" flex list-none gap-5 justify-self-end">
                            <div className="w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                            <div className=" w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  A step-by-step guide on how to become an
                                  online tutor
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className=" z-10 bg-black bg-blend-overlay basis-1/2 opacity-50"
                          onMouseEnter={() => !toggleNav(2)}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className=" cursor-pointer"
                  onMouseEnter={() => toggleNav(3)}
                  onMouseLeave={() => !toggleNav(3)}
                >
                  <Link to="/Mindset">
                    <p className="py-5 px-2 hover:bg-[#a5c9bb] hover:underline">
                      Mindset
                    </p>
                  </Link>

                  {navStates[3] && (
                    <div className="transition duration-500 ease-in">
                      <div className=" absolute w-full left-0 right-0 h-screen flex flex-col">
                        <div className=" z-10 bg-[#1b4942] flex justify-between text-white px-[5%] py-[1.5%]">
                          <div className="">
                            <h1 className=" text-6xl font-medium">Mindset</h1>
                          </div>
                          <div className="">
                            <ul className=" flex flex-col gap-5">
                              <li className=" hover:underline">
                                Grow your team
                              </li>
                              <li className=" hover:underline">
                                Small business finance
                              </li>
                              <li className=" hover:underline">
                                Taxes and payments
                              </li>
                            </ul>
                          </div>
                          <div className=" flex list-none gap-5 justify-self-end">
                            <div className="w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                            <div className=" w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  A step-by-step guide on how to become an
                                  online tutor
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="  z-10 bg-black bg-blend-overlay basis-1/2 opacity-50"
                          onMouseEnter={() => !toggleNav(3)}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className=" cursor-pointer"
                  onMouseEnter={() => toggleNav(4)}
                  onMouseLeave={() => !toggleNav(4)}
                >
                  <Link to="/Marketing">
                    <p className="py-5 px-2 hover:bg-[#a5c9bb] hover:underline">
                      Marketing
                    </p>
                  </Link>

                  {navStates[4] && (
                    <div className="transition duration-500 ease-in">
                      <div className=" absolute w-full left-0 right-0 h-screen flex flex-col">
                        <div className=" z-10 bg-[#1b4942] flex justify-between text-white px-[5%] py-[1.5%]">
                          <div className="">
                            <h1 className=" text-6xl font-medium">Marketing</h1>
                          </div>
                          <div className="">
                            <ul className=" flex flex-col gap-5">
                              <li className=" hover:underline">
                                Grow your team
                              </li>
                              <li className=" hover:underline">
                                Small business finance
                              </li>
                              <li className=" hover:underline">
                                Taxes and payments
                              </li>
                            </ul>
                          </div>
                          <div className=" flex list-none gap-5 justify-self-end">
                            <div className="w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                            <div className=" w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  A step-by-step guide on how to become an
                                  online tutor
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="  z-10 bg-black bg-blend-overlay basis-1/2 opacity-50"
                          onMouseEnter={() => !toggleNav(4)}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className=" cursor-pointer"
                  onMouseEnter={() => toggleNav(5)}
                  onMouseLeave={() => !toggleNav(5)}
                >
                  <Link to="/News">
                    <p className="py-5 px-2 hover:bg-[#a5c9bb] hover:underline">
                      News
                    </p>
                  </Link>

                  {navStates[5] && (
                    <div className="transition duration-500 ease-in">
                      <div className=" absolute w-full left-0 right-0 h-screen flex flex-col">
                        <div className=" z-10 bg-[#1b4942] flex justify-between text-white px-[5%] py-[1.5%]">
                          <div className="">
                            <h1 className=" text-6xl font-medium">News</h1>
                          </div>
                          <div className="">
                            <ul className=" flex flex-col gap-5">
                              <li className=" hover:underline">
                                Grow your team
                              </li>
                              <li className=" hover:underline">
                                Small business finance
                              </li>
                              <li className=" hover:underline">
                                Taxes and payments
                              </li>
                            </ul>
                          </div>
                          <div className=" flex list-none gap-5 justify-self-end">
                            <div className="w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  How to create a membership website around your
                                  course
                                </li>
                              </div>
                            </div>
                            <div className=" w-72">
                              <img className="" src={creativity} alt="" />
                              <div className="">
                                <li className=" hover:underline">
                                  A step-by-step guide on how to become an
                                  online tutor
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className=" z-10 bg-black bg-blend-overlay basis-1/2 opacity-50"
                          onMouseEnter={() => !toggleNav(5)}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center">
            <div className=" border-x border-black">
              <div
                className=" lg:p-6 p-3 py-6 cursor-pointer"
                onClick={searchOpen}
              >
                <IoSearchOutline
                  className={` text-xl ${isSearchClicked ? "hidden" : "block"}`}
                />
              </div>

              {isSearchClicked && (
                <form className="">
                  <div className=" relative -top-3 -mt-6">
                    <div className=" flex justify-between items-center px-5">
                      <span>
                        <IoSearchOutline
                          onClick={searchOpen}
                          className=" absolute left-5 top-2 text-xl cursor-pointer"
                        />
                      </span>
                      <input
                        type="text"
                        className=" md:w-[500px] lg:w-[600px] bg-transparent px-7 py-2 outline-none border-b-2 border-black"
                        required
                      />

                      <div className=" absolute right-5 flex gap-3 top-2 text-xl">
                        <span
                          className=" text-xl cursor-pointer"
                          onClick={searchClosed}
                        >
                          <AiOutlineClose />
                        </span>
                        <button
                          type="submit"
                          className=" text-xl cursor-pointer"
                        >
                          <AiOutlineArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
            <div className=" border-l border-black p-5 px-10 hidden lg:block">
              <button className=" whitespace-nowrap">Join for free</button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className="md:hidden overflow-x-hidden fixed w-full border-b border-black z-10
        "
      >
        <div className={`${background} px-[5%]`}>
          <div className=" flex justify-between items-center">
            <Link to="/">
              <h1 className=" text-2xl">teach:able</h1>
            </Link>
            <div className=" flex gap-5 items-center">
              <div
                className=" text-2xl cursor-pointer"
                onClick={() => setIsSearchClickedMobile(!isSearchClickedMobile)}
              >
                <IoSearchOutline />
              </div>

              <div
                className="hamburger flex flex-col gap-2 border-l border-black py-6 pl-4 cursor-pointer"
                onClick={menuOpen}
              >
                <span
                  className={`bar block h-0.5 w-6 text-black bg-black duration-150 ease-in transition-all ${
                    isMobileNav
                      ? "opacity-100 translate-y-[9.7px] rotate-45"
                      : ""
                  }`}
                ></span>

                <span
                  className={`bar h-0.5 w-6 text-black bg-black block duration-150 ease-in transition-all ${
                    isMobileNav ? "opacity-0" : "opacity-100"
                  }`}
                ></span>

                <span
                  className={`bar h-0.5 w-6 text-black bg-black block duration-150 ease-in transition-all${
                    isMobileNav
                      ? "opacity-100 translate-y-[-9.7px] -rotate-45"
                      : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-[#1b4942] py-5 px-[5%] transition-height duration-500 ease-in fixed w-full z-10 ${
            !isSearchClickedMobile ? "right-[-100%]" : "right-[0]"
          }`}
        >
          <form className="">
            <div className=" relative top-1">
              <div className=" flex justify-between items-center">
                <span>
                  <IoSearchOutline className=" absolute left-2 top-2 text-xl cursor-pointer text-white" />
                </span>
                <input
                  type="text"
                  className=" w-full bg-transparent px-8 py-2 outline-none border-b-2 border-white text-white"
                  required
                />

                <div className=" absolute right-2 flex gap-3 top-2 text-xl">
                  <button
                    type="submit"
                    className=" text-xl cursor-pointer text-white"
                  >
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div
          className={`bg-[#1b4942] py-5 transition-height duration-500 ease-in fixed w-full h-screen overflow-y-hidden ${
            !isMobileNav ? "right-[-100%]" : "right-[0]"
          }`}
        >
          <div className="">
            <form className="px-[5%]">
              <div className=" relative top-1">
                <div className=" flex justify-between items-center">
                  <span>
                    <IoSearchOutline className=" absolute left-2 top-2 text-xl cursor-pointer text-white" />
                  </span>
                  <input
                    type="text"
                    className=" w-full bg-transparent px-8 py-2 outline-none border-b-2 border-white text-white"
                    required
                  />

                  <div className=" absolute right-2 flex gap-3 top-2 text-xl">
                    <button
                      type="submit"
                      className=" text-xl cursor-pointer text-white"
                    >
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="overflow-y-scroll h-80 pl-[5%] py-5 mt-10">
              <div className=" flex flex-col gap-5">
                {/* ACCORDION 1 */}
                <div className=" w-full mx-auto overflow-hidden">
                  <button
                    className="w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none text-white list-none"
                    onClick={() => toggleAccordion(0)}
                  >
                    <Link to="/BlogHome">
                      <li className="text-xl">Blog home</li>
                    </Link>
                    <RiArrowDropDownLine
                      className={`arrow text-3xl ease-in-out duration-700 ${
                        accordionStates[0] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={contentEl1}
                    className="px-4 transition-height duration-500 ease-in"
                    style={
                      accordionStates[0]
                        ? { height: contentEl1.current.scrollHeight }
                        : { height: 0 }
                    }
                  >
                    <div className=""></div>
                  </div>
                </div>

                {/* ACCORDION 2 */}
                <div className=" w-full mx-auto overflow-hidden text-white">
                  <button
                    className="w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none list-none "
                    onClick={() => toggleAccordion(1)}
                  >
                    <Link to="/Money">
                      <li className=" text-xl">Money</li>
                    </Link>
                    <RiArrowDropDownLine
                      className={`arrow text-3xl ease-in-out duration-700 ${
                        accordionStates[1] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={contentEl2}
                    className="px-4 transition-height duration-500 ease-in-out h-0"
                    style={
                      accordionStates[1]
                        ? { height: contentEl2.current.scrollHeight }
                        : { height: 0 }
                    }
                  >
                    <ul className=" py-5 text-xl pl-10 flex flex-col gap-3 pt-3">
                      <li>Grow your team</li>
                      <li>Small business finance</li>
                      <li>Taxes and payments</li>
                    </ul>
                  </div>
                </div>

                {/* ACCORDION 3 */}
                <div className=" w-full mx-auto overflow-hidden text-white">
                  <button
                    className="w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none list-none"
                    onClick={() => toggleAccordion(2)}
                  >
                    <Link to="/Creativity">
                      <li className="text-xl">Creativity</li>
                    </Link>
                    <RiArrowDropDownLine
                      className={`arrow text-3xl ease-in-out duration-700 ${
                        accordionStates[2] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={contentEl3}
                    className="px-4 transition-height duration-500 ease-in-out h-0"
                    style={
                      accordionStates[2]
                        ? { height: contentEl3.current.scrollHeight }
                        : { height: 0 }
                    }
                  >
                    <ul className=" py-5 text-xl pl-10 flex flex-col gap-3 pt-3">
                      <li>Grow your team</li>
                      <li>Small business finance</li>
                      <li>Taxes and payments</li>
                    </ul>
                  </div>
                </div>

                {/* ACCORDION 4 */}
                <div className=" w-full mx-auto overflow-hidden list-disc text-white">
                  <button
                    className="w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none list-none"
                    onClick={() => toggleAccordion(3)}
                  >
                    <Link to="/Mindset">
                      <li className="text-xl">Mindset</li>
                    </Link>
                    <RiArrowDropDownLine
                      className={`arrow text-3xl ease-in-out duration-700 ${
                        accordionStates[3] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={contentEl4}
                    className="px-4 transition-height duration-500 ease-in-out h-0"
                    style={
                      accordionStates[3]
                        ? { height: contentEl4.current.scrollHeight }
                        : { height: 0 }
                    }
                  >
                    <ul className=" py-5 text-xl pl-10 flex flex-col gap-3 pt-3">
                      <li>Grow your team</li>
                      <li>Small business finance</li>
                      <li>Taxes and payments</li>
                    </ul>
                  </div>
                </div>

                {/* ACCORDION 5 */}
                <div className=" w-full mx-auto overflow-hidden list-disc text-white">
                  <button
                    className="w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none list-none"
                    onClick={() => toggleAccordion(4)}
                  >
                    <Link to="/Marketing">
                      <li className="text-xl">Marketing</li>
                    </Link>
                    <RiArrowDropDownLine
                      className={`arrow text-3xl ease-in-out duration-700 ${
                        accordionStates[4] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={contentEl5}
                    className="px-4 transition-height duration-500 ease-in-out h-0"
                    style={
                      accordionStates[4]
                        ? { height: contentEl5.current.scrollHeight }
                        : { height: 0 }
                    }
                  >
                    <ul className=" py-5 text-xl pl-10 flex flex-col gap-3 pt-3">
                      <li>Grow your team</li>
                      <li>Small business finance</li>
                      <li>Taxes and payments</li>
                    </ul>
                  </div>
                </div>

                {/* ACCORDION 6 */}
                <div className=" w-full mx-auto overflow-hidden list-disc text-white">
                  <button
                    className="w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none list-none"
                    onClick={() => toggleAccordion(5)}
                  >
                    <Link to="/News">
                      <li className="text-xl">News</li>
                    </Link>
                    <RiArrowDropDownLine
                      className={`arrow text-3xl ease-in-out duration-700 ${
                        accordionStates[5] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={contentEl6}
                    className="px-4 transition-height duration-500 ease-in-out h-0"
                    style={
                      accordionStates[5]
                        ? { height: contentEl6.current.scrollHeight }
                        : { height: 0 }
                    }
                  >
                    <ul className=" py-5 text-xl pl-10 flex flex-col gap-3 pt-3">
                      <li>Grow your team</li>
                      <li>Small business finance</li>
                      <li>Taxes and payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-t border-black flex absolute w-full left-0 bottom-0 z-[1] h-28 top-[72%]">
              <button className="bg-[#1b4942] basis-1/2 font-semibold text-white text-2xl">
                Join for free
              </button>
              <button className=" bg-green-500 basis-1/2"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
