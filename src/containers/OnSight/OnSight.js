import React, { useState } from "react";
import onlineBanner from "../../img/banner-duromedia-academy-training-center-in-ogba-lagos-1.webp";
import CourseTemplate from "../CourseTemplate/CourseTemplate";
import graphicImg from "../../img/graphic design.jpg";
import fullstack from "../../img/full-stack.png";
import frontend from "../../img/frontend.png";

const OnSight = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabStyles = (index) =>
    `p-4 px-5 relative bottom-[-4px] font-medium ${
      activeTab === index
        ? "border-b-4 border-[#1db954] text-[#1db954]"
        : "text-[#BDBDBD] hover:text-black cursor-pointer"
    }`;

  return (
    <div>
      <div className="">
        {/* TOP BANNER FOR ONLINE COURSES  */}
        <div className="">
          <div
            className=" h-[50vh] bg-no-repeat bg-contain bg-left flex flex-col bg-[#17355c] justify-center bg-blend-overlay opacity-75 items-center"
            style={{ backgroundImage: `url(${onlineBanner})` }}
          >
            <div className="text-white max-w-[800px] px-[5%]">
              <h1 className=" text-start  font-semibold sm:text-5xl text-3xl">
                On-Sight Classes
              </h1>
              <p className=" text-lg pt-5">
                Our Bootcamps are designed to help you accelerate your career in
                Tech and you get to learn from the best Industry experts from
                all around the world.
              </p>
            </div>
          </div>
        </div>

        <div className=" my-20">
          {/* TABS */}
          <div className="  px-[5%] mb-5">
            <div className="border-b-4 border-[#BDBDBD] flex relative">
              <div className={tabStyles(0)} onClick={() => handleTabClick(0)}>
                <p>All</p>
              </div>
              <div className={tabStyles(1)} onClick={() => handleTabClick(1)}>
                <p>Data</p>
              </div>
              <div className={tabStyles(2)} onClick={() => handleTabClick(2)}>
                <p>Leadership</p>
              </div>
              <div className={tabStyles(3)} onClick={() => handleTabClick(3)}>
                <p>Product</p>
              </div>
            </div>
          </div>

          {/* COURSES */}
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
      </div>
    </div>
  );
};

export default OnSight;
