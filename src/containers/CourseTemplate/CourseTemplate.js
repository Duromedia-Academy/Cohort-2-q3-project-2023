import React from "react";
import { SlCalender } from "react-icons/sl";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";

const CourseTemplate = ({
  courseImg,
  courseType,
  courseName,
  body,
  duration,
  days,
  courseLink,
}) => {
  return (
    <div className="flex flex-col gap-7 md:gap-3 shadow-[0_5px_0.3rem_rgba(0,0,0,0.1)] hover:shadow-[0_5px_0.6rem_rgba(0,0,0,0.2)] rounded-md sm:h-[470px] sm:w-[300px] lg:w-[380px] relative">
      <div className="relative w-full h-full">
        <Link to={courseLink}>
          <img
            src={courseImg}
            alt=""
            className=" sm:h-[200px] sm:w-full object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <button className=" bg-[#1db954] text-white p-2 rounded-md font-semibold absolute top-3 left-3">
          {courseType}
        </button>
      </div>
      <div className="text-[#17355c] flex flex-col gap-3 px-3 pb-8 relative h-full">
        <Link to={courseLink}>
          <p className=" text-xl font-bold hover:text-[#2cb15b] cursor-pointer">
            {courseName}
          </p>
        </Link>
        <p>{body}</p>
        <div className=" flex gap-5">
          <span className=" flex items-center gap-2 font-semibold">
            <SlCalender className=" font-bold text-xl" />
            <p>{duration}</p>
          </span>
          <span className=" flex items-center gap-2 font-semibold">
            <SiGoogleclassroom />
            <p>{days}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseTemplate;
