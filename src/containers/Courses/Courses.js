import React, { useState } from "react";
import graphicImg from "../../img/graphic design.jpg";
import fullstack from "../../img/full-stack.png";
import frontend from "../../img/frontend.png";
import "../../carousel/carousel.css";
import { AiOutlineClose } from "react-icons/ai";
import CourseTemplate from "../CourseTemplate/CourseTemplate";

const Courses = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const openFilter = () => {
    setIsFilterOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <section className=" py-[8%]">
        <div className="px-[5%]  text-[#17355c]">
          <div className=" hidden sm:block py-6">
            <div className="items-center gap-3 flex">
              <p className=" font-bold">Course Tracks</p>
              <select
                name=""
                id=""
                className=" w-[150px] p-3 border border-[#999999] rounded-md outline-none"
              >
                <option value="All">All</option>
                <option value="On Campus">On Campus</option>
                <option value="Online">Online</option>
              </select>
            </div>
          </div>

          {!isFilterOpen ? (
            <div className=" sm:hidden" onClick={openFilter}>
              <button className=" bg-[#1db954] text-white p-2 px-4 rounded-md font-semibold hover:bg-[#1aa149] tracking-wider">
                Filters
              </button>
            </div>
          ) : (
            <div className=" sm:hidden">
              <div className=" bg-white h-screen absolute top-0 bottom-0 left-0 right-0 z-10 px-[5%] py-[5%]">
                <div className=" flex justify-between text-3xl items-center">
                  <h1>Filters</h1>
                  <AiOutlineClose
                    className=" text-3xl font-bold hover:text-[#1db954] cursor-pointer"
                    onClick={closeFilter}
                  />
                </div>
                <div className="text-[#17355c] pt-7">
                  <p className=" font-semibold text-xl pb-3">Course Tracks</p>
                  <select className="small-screen w-full p-3 border border-[#999999] rounded-md outline-none">
                    <option value="All">All</option>
                    <option value="On Campus">On Campus</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <div className=" bg-white absolute bottom-0 left-0 right-0 p-3 shadow-up">
                  <button
                    type="submit"
                    className=" w-full bg-[#1db954] text-white p-2 px-4 rounded-md font-semibold hover:bg-[#1aa149] tracking-wider"
                    onClick={closeFilter}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="">
          <div className="px-[5%] py-6 flex flex-wrap gap-7 justify-center lg:justify-normal">
            <CourseTemplate
              courseImg={graphicImg}
              courseType="Onsight"
              courseName="Ethical Hacking And Counter Measures"
              body="Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest…"
              duration="3 Months"
              days="Twice a week"
            />

            <CourseTemplate
              courseImg={fullstack}
              courseType="Onsight"
              courseName="FullStack Web Development"
              body="Acquire the skills and knowledge needed to build a complete web development project from scratch to finish. Our Full-Stack Developer’s Program is a 6…"
              duration="6 Months"
              days="Four times a week"
            />

            <CourseTemplate
              courseImg={frontend}
              courseType="Onsight"
              courseName="Frontend Web Development with React JS"
              body="Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…"
              duration="3 Months"
              days="Twice a week"
            />

            <CourseTemplate
              courseImg={graphicImg}
              courseType="Onsight"
              courseName="Ethical Hacking And Counter Measures"
              body="Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest…"
              duration="3 Months"
              days="Twice a week"
            />

            <CourseTemplate
              courseImg={fullstack}
              courseType="Onsight"
              courseName="FullStack Web Development"
              body="Acquire the skills and knowledge needed to build a complete web development project from scratch to finish. Our Full-Stack Developer’s Program is a 6…"
              duration="6 Months"
              days="Four times a week"
            />

            <CourseTemplate
              courseImg={frontend}
              courseType="Onsight"
              courseName="Frontend Web Development with React JS"
              body="Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…"
              duration="3 Months"
              days="Twice a week"
            />

            <CourseTemplate
              courseImg={frontend}
              courseType="Onsight"
              courseName="Frontend Web Development with React JS"
              body="Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…"
              duration="3 Months"
              days="Twice a week"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
