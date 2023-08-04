import React from "react";
import top1 from "../../../img/top1.webp";
import top2 from "../../../img/tob2.webp";
import infopreneur from "../../../img/what-is-an-infopreneur-730x456.jpg";
import linkedin from "../../../img/linkedin-influencer-730x456.jpg";
import motivational from "../../../img/motivational-730x456.jpeg";
import contact from "../../../img/SquareOverride.webp";
import DownloadHeader from "../../../components/DownloadHeader";
import ScrollToTopButton from "../ScrollToTop";

import { Link } from "react-router-dom";

const Downloads = () => {
  return (
    <div className="">
      {/* NAVS */}
      <DownloadHeader background="bg-[#c8e3d8]" />
      <div className="relative top-[71px] md:static md:top-0 pb-32">
        <div className="bg-[#c8e3d8] text-center flex-col flex justify-center items-center">
          <div className=" max-w-[800px] flex-col flex gap-8 justify-center pt-5 pb-[25vh] px-[5%]">
            <p className=" underline font-semibold underline-offset-2">:News</p>
            <p className=" text-5xl font-YsabeauInfant">Resources</p>
            <p className=" text-lg">
              Access downloadable content, workbooks, checklists, ebooks, case
              studies, and more. Consider this your hub for all assets you need
              to run your online business.
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center relative -top-28">
          <div className=" flex max-w-[1000px] flex-col px-[5%] md:px-0 gap-10 lg:flex-row items-center">
            <div className=" flex flex-col gap-5">
              <img src={top1} className="" alt="" />
              <p className=" text-xl lg:text-4xl lg:font-light">
                Getting started on Teachable: Offering your coaching service
              </p>
              <p className=" text-lg lg:text-xl">
                Sell coaching solo or pair it with a course-Your options, your
                way.
              </p>
              <p>
                by
                <Link className=" underline text-gray-600" to={"#"}>
                  Frances Wong
                </Link>
              </p>
            </div>
            <div className=" flex flex-col gap-5">
              <img
                src={top2}
                className=" lg:h-[400px] object-cover w-full"
                alt=""
              />
              <p className=" text-xl lg:text-4xl lg:font-light">
                Getting started: Create and customize your sales page
              </p>
              <p className=" text-lg lg:text-xl">
                It all begins with your sales page.
              </p>
              <p>
                by{" "}
                <a className=" underline text-gray-600" href="#">
                  Frances Wong
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className=" max-w-[1100px] mx-auto py-20">
          <div className=" px-[5%] flex flex-col gap-10">
            <div className=" flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center">
              <img src={infopreneur} className=" lg:w-96" alt="" />
              <div className=" flex flex-col gap-4">
                <p className=" text-xl lg:text-3xl cursor-pointer hover:underline underline-offset-8 decoration-1 duration-150 ease-out">
                  What is an infopreneur? You might be one and not even know it
                </p>
                <p className=" text-lg lg:text-xl">
                  What exactly is an infopreneur? We're glad you asked.
                </p>
                <p>
                  by{" "}
                  <a
                    className=" underline text-gray-600 hover:no-underline underline-offset-4"
                    href="#"
                  >
                    Teachable staff
                  </a>
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center">
              <img src={linkedin} className=" lg:w-96" alt="" />
              <div className=" flex flex-col gap-4">
                <p className=" text-xl lg:text-3xl cursor-pointer hover:underline underline-offset-8 decoration-1 duration-150 ease-out">
                  What is an infopreneur? You might be one and not even know it
                </p>
                <p className=" text-lg lg:text-xl">
                  What exactly is an infopreneur? We're glad you asked.
                </p>
                <p>
                  by{" "}
                  <a
                    className=" underline text-gray-600 underline-offset-4 hover:no-underline"
                    href="#"
                  >
                    Teachable staff
                  </a>
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center">
              <img src={motivational} className=" lg:w-96" alt="" />
              <div className=" flex flex-col gap-4">
                <p className="text-xl lg:text-3xl cursor-pointer hover:underline underline-offset-8 decoration-1 duration-150 ease-out">
                  What is an infopreneur? You might be one and not even know it
                </p>
                <p className=" text-lg lg:text-xl">
                  What exactly is an infopreneur? We're glad you asked.
                </p>
                <p>
                  by{" "}
                  <a
                    className=" underline text-gray-600 underline-offset-4 hover:no-underline"
                    href="#"
                  >
                    Teachable staff
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#7499d0] px-[5%] py-14 ">
          <div className="lg:flex max-w-[900px] lg:gap-20">
            <img src={contact} className=" lg:w-80" alt="" />
            <div className=" pt-5 lg:flex lg:flex-col lg:justify-between">
              <p className=" text-2xl">
                Your weekly dose of creative chat and Teachable updates. Get our
                weekly newsletter.{" "}
              </p>
              <div className=" pt-10 lg:flex lg:gap-5 lg:items-center">
                <input
                  type="email"
                  className=" bg-transparent outline-none border-b border-black w-full py-2 placeholder:text-black"
                  placeholder="Your email here"
                />
                <div className=" pt-5">
                  <button className=" bg-black px-5 py-3 text-white rounded-md whitespace-nowrap">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[1100px] mx-auto py-14">
          <div className=" px-[5%] flex flex-col gap-10">
            <div className=" flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center">
              <img src={infopreneur} className=" lg:w-96" alt="" />
              <div className=" flex flex-col gap-4">
                <p className=" text-xl lg:text-3xl cursor-pointer hover:underline underline-offset-8 decoration-1 duration-150 ease-out">
                  What is an infopreneur? You might be one and not even know it
                </p>
                <p className=" text-lg lg:text-xl">
                  What exactly is an infopreneur? We're glad you asked.
                </p>
                <p>
                  by{" "}
                  <a
                    className=" underline text-gray-600 hover:no-underline underline-offset-4"
                    href="#"
                  >
                    Teachable staff
                  </a>
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center">
              <img src={linkedin} className=" lg:w-96" alt="" />
              <div className=" flex flex-col gap-4">
                <p className=" text-xl lg:text-3xl cursor-pointer hover:underline underline-offset-8 decoration-1 duration-150 ease-out">
                  What is an infopreneur? You might be one and not even know it
                </p>
                <p className=" text-lg lg:text-xl">
                  What exactly is an infopreneur? We're glad you asked.
                </p>
                <p>
                  by{" "}
                  <a
                    className=" underline text-gray-600 underline-offset-4 hover:no-underline"
                    href="#"
                  >
                    Teachable staff
                  </a>
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center">
              <img src={motivational} className=" lg:w-96" alt="" />
              <div className=" flex flex-col gap-4">
                <p className="text-xl lg:text-3xl cursor-pointer hover:underline underline-offset-8 decoration-1 duration-150 ease-out">
                  What is an infopreneur? You might be one and not even know it
                </p>
                <p className=" text-lg lg:text-xl">
                  What exactly is an infopreneur? We're glad you asked.
                </p>
                <p>
                  by{" "}
                  <a
                    className=" underline text-gray-600 underline-offset-4 hover:no-underline"
                    href="#"
                  >
                    Teachable staff
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Downloads;
