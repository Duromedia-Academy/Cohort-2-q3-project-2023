import React from "react";
import banner from "../../img/banner-duromedia-academy-training-center-in-ogba-lagos-1.webp";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import graphicImg from "../../img/graphic design.jpg";
import fullstack from "../../img/full-stack.png";
import frontend from "../../img/frontend.png";
import inDemand from "../../img/in-demand skills.jpg";
import industryStandard from "../../img/industry standard.jpg";
import conducive from "../../img/conducive environment.png";
import flexible from "../../img/flexible-calenders.jpg";
import alone from "../../img/not alone.jpg";
import hiringPartners from "../../img/hiring patners.jpg";
import sponsors from "../../img/sponsors.jpg";
import Carousel from "../../carousel/carousel";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import CourseTemplate from "../CourseTemplate/CourseTemplate";

const Home = () => {
  return (
    <div className="">
      <div
        className=" h-[70vh] bg-no-repeat bg-center bg-cover md:bg-bottom flex flex-col justify-center items-center bg-black bg-opacity-70 bg-blend-overlay"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className=" text-center text-white font-extrabold sm:text-5xl text-3xl">
          Accelerate Your Career <br />
          in Tech
        </h1>
      </div>

      <div className=" px-[5%] sm:px-[5%] flex flex-wrap md:flex-nowrap justify-center w-full gap-8 py-7 relative top-[-130px]">
        <div className=" bg-white h-[200px] flex flex-col justify-between items-start md:w-[600px] p-5 shadow-2xl rounded-xl gap-2">
          <div className="">
            <div className=" flex items-center gap-2">
              <BsFillPersonCheckFill className=" text-[#1db954] text-3xl" />
              <p className=" text-2xl font-medium text-[#17355c]">
                Individuals
              </p>
            </div>
            <div className="">
              <p className="text-[#2e425c] sm:text-lg">
                Accelerate your dream of becoming a world-class software
                developer or designer.
              </p>
            </div>
          </div>

          <button className=" bg-[#1db954] text-white p-3 rounded-md font-semibold hover:bg-[#1aa149]">
            Browse Courses
          </button>
        </div>

        <div className=" bg-white  h-[200px] flex flex-col justify-between items-start md:w-[600px] p-5 shadow-2xl rounded-xl gap-2">
          <div className="">
            <div className=" flex items-center gap-2">
              <FiHome className=" text-[#1db954] text-3xl" />
              <p className=" text-2xl font-medium text-[#17355c]">Corporate</p>
            </div>
            <div className="">
              <p className="text-[#2e425c] sm:text-lg">
                Professional Staff training courses applicable to any corporate
                organization.
              </p>
            </div>
          </div>

          <button className=" bg-[#1db954] text-white p-3 px-6 rounded-md font-semibold hover:bg-[#1aa149]">
            Learn More
          </button>
        </div>
      </div>

      <section>
        <div className="">
          <div className="text-[#17355c] text-center px-[5%] pb-3">
            <h2 className=" text-4xl font-semibold">
              Find your Perfect program
            </h2>
            <p className=" pt-3">
              Our curriculum uses a project-based learning approach and is
              perfect for both beginners and experienced individuals.
            </p>
          </div>

          <div className="px-[5%] py-6 flex flex-wrap gap-5 justify-center">
            <CourseTemplate
              courseImg={graphicImg}
              courseType="Onsight"
              courseName="Ethical Hacking And Counter Measures"
              body="Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest…"
              duration="3 Months"
              days="Twice a week"
              courseLink="/FrontEnd"
            />

            <CourseTemplate
              courseImg={fullstack}
              courseType="Onsight"
              courseName="FullStack Web Development"
              body="Acquire the skills and knowledge needed to build a complete web development project from scratch to finish. Our Full-Stack Developer’s Program is a 6…"
              duration="6 Months"
              days="CourseTemplate"
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

          <div className=" flex justify-center py-20">
            <Link to="/Courses">
              <button className=" bg-[#1db954] text-white p-3 px-6 rounded-md font-semibold hover:bg-[#1aa149]">
                Browse All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className=" bg-[#ebebeb] text-[#17355c] py-[5%] pt-[10%]">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold">
          Grow with Duromedia
        </h1>
        <div className=" py-[5%] px-[5%] pt-[10%] flex flex-col gap-14 justify-center md:gap-24">
          <div className=" sm:flex sm:w-[600px] md:w-[700px] items-center lg:w-[800px] sm:justify-between mx-auto my-0 gap-10">
            <div className=" basis-1/2">
              <h1 className=" text-2xl font-semibold">In-Demand Tech Skills</h1>
              <p className=" py-6 tracking-wide">
                Let’s accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </p>
            </div>
            <div className=" basis-1/2">
              <img
                className=" rounded sm:h-[250px] w-full object-cover"
                src={inDemand}
                alt=""
              />
            </div>
          </div>

          <div className=" sm:flex sm:w-[600px] md:w-[700px] sm:flex-row-reverse items-center lg:w-[800px] sm:justify-between mx-auto my-0 gap-10">
            <div className=" basis-1/2">
              <h1 className=" text-2xl font-semibold">
                Industry Standard Approach{" "}
              </h1>
              <p className=" py-6 tracking-wide">
                Our programs are well structured to take you from Zero to Hero.
                Univelcity teaches you in-demand skills and best practices you
                need to thrive in today’s workplace
              </p>
            </div>
            <div className="basis-1/2">
              <img
                className=" rounded sm:h-[250px] w-full object-cover"
                src={industryStandard}
                alt=""
              />
            </div>
          </div>

          <div className=" sm:flex sm:w-[600px] md:w-[700px] items-center lg:w-[800px] sm:justify-between mx-auto my-0 gap-10">
            <div className=" basis-1/2">
              <h1 className=" text-2xl font-semibold">
                Conducive environment{" "}
              </h1>
              <p className=" py-6 tracking-wide">
                With us, you learn with comfort. You learn in a conducive
                environment with all basic amenities at your disposal.
              </p>
            </div>
            <div className="basis-1/2">
              <img
                className=" rounded sm:h-[250px] w-full object-cover"
                src={conducive}
                alt=""
              />
            </div>
          </div>

          <div className=" sm:flex sm:w-[600px] md:w-[700px] sm:flex-row-reverse items-center lg:w-[800px] sm:justify-between mx-auto my-0 gap-10">
            <div className="basis-1/2">
              <h1 className=" text-2xl font-semibold">Flexible Calendars </h1>
              <p className=" py-6 tracking-wide">
                We offer both weekday and weekend classes both in-person and
                online. We start at least 2 new cohorts every quarter. So,
                Whether you work full-time or not you can learn with us.
              </p>
            </div>
            <div className="basis-1/2">
              <img
                className=" rounded sm:h-[250px] w-full object-cover"
                src={flexible}
                alt=""
              />
            </div>
          </div>

          <div className=" sm:flex sm:w-[600px] md:w-[700px] items-center lg:w-[800px] sm:justify-between mx-auto my-0 gap-10">
            <div className="basis-1/2">
              <h1 className=" text-2xl font-semibold">You’re not Alone</h1>
              <p className=" py-6 tracking-wide">
                Become part of a supportive community where you would meet
                students alike, collaborate with and grow together. Get first
                hand knowledge and learn best practices from our experienced
                Facilitators.
              </p>
            </div>
            <div className="basis-1/2">
              <img
                className=" rounded sm:h-[250px] w-full object-cover"
                src={alone}
                alt=""
              />
            </div>
          </div>

          <div className=" sm:flex sm:w-[600px] md:w-[700px] sm:flex-row-reverse items-center lg:w-[800px] sm:justify-between mx-auto my-0 gap-10">
            <div className="basis-1/2">
              <h1 className=" text-2xl font-semibold">Hiring Partners </h1>
              <p className=" py-6 tracking-wide">
                We offer the right tech talent to meet your team’s needs. Our
                talents are well equipped for the modern workplace and have the
                required skills to deliver industry-standard tech solutions.
              </p>
            </div>
            <div className="basis-1/2">
              <img
                className=" rounded sm:h-[250px] w-full object-cover"
                src={hiringPartners}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#030051] text-white text-center px-[5%]">
        <div className=" max-w-[550px] py-32 mx-auto">
          <h1 className=" text-4xl font-semibold">
            Ready to transform your career?
          </h1>

          <p className=" py-10">
            If you love to grow or build a career in tech, we have you covered.
            At Duromedia, we focus on industry-ready skills that prepare you for
            the future of work, while connecting you to incredible jobs both in
            Nigeria and abroad.
          </p>
          <div className=" flex justify-center">
            <Link to="/Courses">
              <button className=" bg-[#1db954] text-white p-3 px-6 rounded-md font-semibold hover:bg-[#1aa149]">
                Browse All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-[#17355c]">
        <div className=" flex flex-col md:flex-row px-[5%] items-center justify-center py-[10%] gap-16">
          <div className=" flex flex-col gap-5 basis-1/2">
            <h1 className=" text-4xl font-semibold">
              Over 90% of our students find high-paying jobs within the first 6
              months of graduating.
            </h1>
            <div className=" flex flex-col gap-5">
              <p>
                Univelcity is a tech school designed to accelerate the growth of
                tech talent in Africa for the growing demand of businesses,
                startups in Nigeria and around the world.
              </p>
              <p>
                We use Agile Project-based learning that focuses on in-demand
                tech skills in the industry.
              </p>
              <p>
                In the last 3 years, we have trained over 1000 developers with
                more than 400 of them tracked gainfully employed.
              </p>
            </div>
          </div>
          <div className=" basis-1/2">
            <img src={sponsors} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#dff2ef] text-[#17355c] py-[10%]">
        <h1 className=" text-center text-3xl font-semibold py-[5%]">
          Strength in Numbers
        </h1>
        <div className=" flex justify-center flex-col md:flex-row gap-10 md:flex-wrap">
          <div className=" flex flex-col items-center">
            <h1 className=" text-7xl font-bold">98%</h1>
            <p>Completion Rate</p>
          </div>
          <div className=" flex flex-col items-center">
            <h1 className=" text-7xl font-bold">3000+</h1>
            <p>Succesful Graduates</p>
          </div>
          <div className=" flex flex-col items-center">
            <h1 className=" text-7xl font-bold">20+</h1>
            <p>Partners</p>
          </div>
          <div className=" flex flex-col items-center">
            <h1 className=" text-7xl font-bold">2000+</h1>
            <p>Success Stories</p>
          </div>
        </div>
      </section>

      <section className=" py-[10%] px-[5%]">
        <h1 className=" text-center text-4xl font-semibold text-[#17355c]">
          Success Stories
        </h1>
        <Carousel />
      </section>

      <section className=" bg-[#e4f0ee] py-[10%] px-[5%] text-[#17355c]">
        <h1 className=" text-5xl font-semibold text-center pb-10">FAQs</h1>
        <Accordion />
      </section>

      <section className=" bg-[#030051] text-white text-center px-[5%]">
        <div className=" max-w-[550px] py-32 mx-auto">
          <h1 className=" text-4xl font-semibold">Get started Today</h1>

          <p className=" py-10">
            By 2030 there would be a huge deficit of tech talent globally.
            Whether you are looking to change your career path, increase your
            earning, Duromedia is a tech school designed to accelerate your
            career in tech. Our approach is Agile Project-based learning that
            focuses on in-demand tech skills by the industries. The time to
            start is now!
          </p>
          <div className=" flex justify-center">
            <Link to="/Courses">
              <button className=" bg-[#1db954] text-white p-3 px-6 rounded-md font-semibold hover:bg-[#1aa149]">
                Browse All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
