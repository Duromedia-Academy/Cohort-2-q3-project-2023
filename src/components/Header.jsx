import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFeatureHover, setIsFeatureHover] = useState(false);
  const featureHover = () => {
    setIsFeatureHover(!isFeatureHover);
  };

  const [isResourceHover, setIsResourceHover] = useState(false);
  const resourceHover = () => {
    setIsResourceHover(!isResourceHover);
  };

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const subAnimate = {
    enter: {
      display: "block",

      opacity: 20,
      // rotateX: 0,
      transition: {
        duration: 0.3,
      },
    },

    exit: {
      transitionEnd: {
        display: "none",
      },
      opacity: 0,
      // rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <nav className="flex border-b border-black md:pb-3 md:justify-between gap-0 justify-between items-center px-[5%] md:py-[15px] py-[10px] z-10">
      <div className="flex gap-8 items-center">
        <div className="">
          <a href="/" className="text-2xl md:text-4xl">
            teach:able
          </a>
        </div>
        <div className=" hidden lg:block">
          <ul className="flex items-center gap-5">
            <div className="">
              <li>
                {/* <p className=' flex items-center gap-1'> */}
                <motion.div
                  className=""
                  viewport={{ once: false }}
                  onHoverStart={featureHover}
                  onHoverEnd={featureHover}
                >
                  <p className="flex items-center gap-1">
                    <Link to="#" className="hover:text-goal">
                      Features
                    </Link>
                    <span className="text-2xl">
                      <RiArrowDropDownLine />
                    </span>
                  </p>

                  <motion.div
                    className=" z-10"
                    initial="exit"
                    viewport={{ once: false }}
                    animate={isFeatureHover ? "enter" : "exit"}
                    variants={subAnimate}
                  >
                    {/* <div className=" top-0 bottom-0 left-0 right-0 fixed" /> */}
                    <div className="grid md:grid-cols-2 absolute gap-2 bg-white px-2 py-[5px] z-[1] rounded ml-[-40px] ">
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/OnlineCourses" className="hover:text-goal">
                          Online Courses
                        </Link>
                      </li>
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/TeachablePay" className="hover:text-goal">
                          teachable:pay
                        </Link>
                      </li>
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/Coaching" className="hover:text-goal">
                          Coaching
                        </Link>
                      </li>
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/Generator" className="hover:text-goal">
                          AI Curriculum Generator
                        </Link>
                      </li>
                      <li className=" px-2 py-5">
                        <Link
                          to="/DigitalDownloads"
                          className="hover:text-goal"
                        >
                          Digital Downloads
                        </Link>
                      </li>
                      <li className=" px-2 py-5">
                        <Link to="/AllFeatures" className="hover:text-goal">
                          All Features
                        </Link>
                      </li>
                      <li className=" px-2 py-5">
                        <Link to="/Blogs/Post" className="hover:text-goal">
                          Post
                        </Link>
                      </li>
                    </div>
                  </motion.div>
                </motion.div>
              </li>
            </div>

            <li>
              <Link to="/Courses" className="hover:text-goal">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/Online" className="hover:text-goal">
                Online
              </Link>
            </li>
            <li>
              <Link to="/OnSight" className="hover:text-goal">
                On-Sight
              </Link>
            </li>

            <div className="">
              <li>
                {/* <p className=' flex items-center gap-1'> */}
                <motion.div
                  className=""
                  viewport={{ once: false }}
                  onHoverStart={resourceHover}
                  onHoverEnd={resourceHover}
                >
                  <p className=" flex items-center gap-1">
                    <Link to="#" className="hover:text-goal">
                      Resources
                    </Link>
                    <span className="text-2xl">
                      <RiArrowDropDownLine />
                    </span>
                  </p>

                  <motion.div
                    className=""
                    initial="exit"
                    viewport={{ once: false }}
                    animate={isResourceHover ? "enter" : "exit"}
                    variants={subAnimate}
                  >
                    {/* <div className=" top-0 bottom-0 left-0 right-0 fixed" /> */}
                    <div className="grid z-[1] md:grid-cols-2 absolute gap-2 bg-white px-2 py-[5px] rounded ml-[-40px]">
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/Podcast" className="hover:text-goal">
                          Podcast
                        </Link>
                      </li>
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/Events" className="hover:text-goal">
                          Events
                        </Link>
                      </li>
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/Downloads" className="hover:text-goal">
                          Downloads
                        </Link>
                      </li>
                      <li className=" px-2 py-5 border-b border-black">
                        <Link to="/Knowledge" className="hover:text-goal">
                          Knowledge Base
                        </Link>
                      </li>
                      <li className=" px-2 py-5">
                        <Link to="/Teachable" className="hover:text-goal">
                          teachable:hq
                        </Link>
                      </li>
                      <li className=" px-2 py-5">
                        <Link to="/BlogHome" className="hover:text-goal">
                          Blog
                        </Link>
                      </li>
                      <li className=" px-2 pb-5">
                        <Link to="/Examples" className="hover:text-goal">
                          Examples
                        </Link>
                      </li>
                      <li className=" px-2 pb-5">
                        <Link to="/Home-2" className="hover:text-goal">
                          Home-2
                        </Link>
                      </li>
                    </div>
                  </motion.div>
                </motion.div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {!isMenuToggled ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between gap-8">
            <span className=" -mt-4">
              <a
                href="/"
                className=" hover:text-goal underline text-mag pt-3 hidden lg:block"
              >
                Log in
              </a>
            </span>
            <button className="">
              <a
                href="/"
                className="underline lg:no-underline py-1 md:py-4 lg:px-5 lg:bg-gap lg:rounded lg:hover:bg-black lg:text-white"
              >
                Start for free
              </a>
            </button>
            <FaBars
              className=" text-2xl lg:hidden"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
          </div>
        </div>
      ) : (
        <div className=" font-bold text-xl z-[1]">
          <div className="flex md:hidden">
            <a href="/" className="underline pr-4 py-1">
              Start for free
            </a>
            <FaTimes
              className=" text-3xl lg:hidden z-20"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
            <div className="">
              <ul className="w-full absolute h-screen left-0 right-0 bottom-0 top-[52px] bg-white flex flex-col pl-10 gap-10 border-t border-black ">
                <div className="">
                  <li>
                    {/* <p className=' flex items-center gap-1'> */}
                    <motion.div
                      className=""
                      viewport={{ once: false }}
                      onClick={featureHover}
                    >
                      <p className="flex items-center gap-1">
                        <Link to="#" className="hover:text-goal">
                          Features
                        </Link>
                        <span className="text-2xl">
                          <RiArrowDropDownLine />
                        </span>
                      </p>

                      <motion.div
                        className=""
                        initial="exit"
                        viewport={{ once: false }}
                        animate={isFeatureHover ? "enter" : "exit"}
                        variants={subAnimate}
                      >
                        {/* <div className=" top-0 bottom-0 left-0 right-0 fixed" /> */}
                        <div className="grid md:grid-cols-2 bg-white px-2 py-[5px] rounded ">
                          <li className=" px-2 py-5">
                            <Link
                              to="/OnlineCourses"
                              className="hover:text-goal"
                            >
                              Online Courses
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link
                              to="/TeachablePay"
                              className="hover:text-goal"
                            >
                              teachable:pay
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/Coaching" className="hover:text-goal">
                              Coaching
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/Generator" className="hover:text-goal">
                              AI Curriculum Generator
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link
                              to="/DigitalDownloads"
                              className="hover:text-goal"
                            >
                              Digital Downloads
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/AllFeatures" className="hover:text-goal">
                              All Features
                            </Link>
                          </li>
                        </div>
                      </motion.div>
                    </motion.div>
                  </li>
                </div>

                <li onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Link to="/Courses" className="hover:text-goal">
                    Courses
                  </Link>
                </li>

                <li onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Link to="/Online" className="hover:text-goal">
                    Online
                  </Link>
                </li>

                <li onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Link to="/OnSight" className="hover:text-goal">
                    On-Sight
                  </Link>
                </li>

                <div className="">
                  <li>
                    {/* <p className=' flex items-center gap-1'> */}
                    <motion.div
                      className=""
                      viewport={{ once: false }}
                      onClick={resourceHover}
                    >
                      <p className=" flex items-center gap-1">
                        <Link to="#" className="hover:text-goal">
                          Resources
                        </Link>
                        <span className="text-2xl">
                          <RiArrowDropDownLine />
                        </span>
                      </p>

                      <motion.div
                        className=""
                        initial="exit"
                        viewport={{ once: false }}
                        animate={isResourceHover ? "enter" : "exit"}
                        variants={subAnimate}
                      >
                        {/* <div className=" top-0 bottom-0 left-0 right-0 fixed" /> */}
                        <div className="grid md:grid-cols-2 bg-white px-2 py-[5px] rounded">
                          <li className=" px-2 py-5">
                            <Link to="/Podcast" className="hover:text-goal">
                              Podcast
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/Events" className="hover:text-goal">
                              Events
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/Downloads" className="hover:text-goal">
                              Downloads
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/Knowledge" className="hover:text-goal">
                              Knowledge Base
                            </Link>
                          </li>
                          <li className=" px-2 py-5">
                            <Link to="/Teachable" className="hover:text-goal">
                              teachable:hq
                            </Link>
                          </li>
                        </div>
                      </motion.div>
                    </motion.div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className=" absolute bottom-0 left-0 flex w-full lg:hidden">
            <button className=" basis-1/2 p-8 text-xl">Log in</button>
            <button className=" basis-1/2 bg-goal p-8 text-xl">
              start for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
