import frontEnd from "../../../img/in-demand skills.jpg";
import { BsHourglassSplit } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { SiLevelsdotfyi } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineWechat } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import CourseAccordion from "../../Accordion/CourseAccordion";
import Carousel from "../../../carousel/carousel";
import MainAccordion from "../../Accordion/Accordion";

const FrontEnd = () => {
  return (
    <div className="">
      {/* TOP PART */}
      <div className=" bg-[#1db954]">
        <div className=" px-[5%] py-[3%]">
          <div className=" flex flex-col md:flex-row items-center gap-10">
            <div className=" flex flex-col gap-5 basis-1/2 text-[#17355c]">
              <div className="">
                <button className=" bg-white py-1 rounded font-semibold px-4">
                  On Sight
                </button>
              </div>
              <h1 className=" text-3xl lg:text-6xl font-semibold">
                Frontend Web Development with React JS
              </h1>
              <p className="">
                Start off your career today as a Front-End Web Developer. Learn
                to build high quality websites with dynamic applications to
                create stunning user experiences for the web.
              </p>
              <div className=" flex flex-col md:flex-row gap-3">
                <div className="">
                  <button className=" bg-[#17355c] font-bold text-white px-7 py-3 shadow-xl rounded-md hover:shadow-none ease-in duration-200">
                    Apply Now
                  </button>
                </div>

                <div className="">
                  <button className=" bg-white font-bold px-4 py-3 shadow-xl rounded-md hover:shadow-none ease-in duration-200">
                    Speak To a Learning Advisor
                  </button>
                </div>
              </div>
              <p>Applications are currently Open!</p>
            </div>

            <div className=" basis-1/2">
              <img
                src={frontEnd}
                className=" h-[400px] lg:h-[600px] rounded-lg object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* REQUIREMENTS */}
      <div className=" bg-[#17355c] text-white px-[5%] grid grid-cols-2 gap-10 gap-y-24 place-items-center py-32 md:grid-cols-3 lg:grid-cols-6 lg:justify-evenly lg:items-start">
        <div className=" flex flex-col gap-3 items-center">
          <BsHourglassSplit className=" text-4xl text-teal-600" />
          <p className=" text-lg">Duration</p>
          <div className=" leading-3">
            <p className=" font-bold text-2xl">3 Months</p>
            <p className=" text-green-400 italic">(Twice a week)</p>
          </div>
        </div>

        <div className=" flex flex-col gap-3 items-center text-center">
          <BsCalendarDateFill className=" text-4xl text-teal-600" />
          <p className=" text-lg">Start Date</p>
          <div className=" leading-3">
            <p className=" font-bold text-2xl">7th August, 2023</p>
          </div>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <SiLevelsdotfyi className=" text-4xl text-teal-600" />
          <p className=" text-lg">Level</p>
          <div className=" leading-3">
            <p className=" font-bold text-2xl">Beginner</p>
          </div>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <AiOutlineBars className=" text-4xl text-teal-600" />
          <p className=" text-lg">Prerequisites</p>
          <div className=" leading-3">
            <p className=" font-bold text-2xl">A Laptop</p>
          </div>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <BsTools className=" text-4xl text-teal-600" />
          <p className=" text-lg">Projects</p>
          <div className=" leading-3">
            <p className=" font-bold text-2xl">1 Project</p>
          </div>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <BsFillCreditCardFill className=" text-4xl text-teal-600" />
          <p className=" text-lg">Cost</p>
          <div className=" leading-3">
            <p className=" font-bold text-2xl">₦300,000</p>
          </div>
        </div>
      </div>

      {/* COURSE ACCORDION */}
      <section className=" bg-[#e4f0ee] py-[7%] px-[5%] text-[#17355c]">
        <CourseAccordion />

        <div className=" flex gap-3 pt-20 justify-center">
          <div className="">
            <button className=" bg-[#17355c] font-bold text-white px-7 py-3 shadow-xl rounded-md hover:shadow-none ease-in duration-200">
              Apply Now
            </button>
          </div>

          <div className="">
            <button className=" bg-white font-bold px-4 py-3 shadow-xl rounded-md hover:shadow-none ease-in duration-200">
              Download syllabus
            </button>
          </div>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <div className=" bg-white px-[5%] py-32 text-[#17355c]">
        <h1 className=" text-center font-semibold text-4xl pb-20">
          Come with expectations
        </h1>

        <div className="grid grid-cols-1 gap-10 place-items-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <div className=" flex flex-col items-center justify-center text-center">
            <FaChalkboardTeacher className=" text-6xl" />
            <p className=" text-lg font-bold">Experienced Teachers</p>
            <div className=" leading-5 text-center pt-3">
              <p>
                You’ll be taught and mentored by some of the best teachers in
                the industry.
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center">
            <BsTools className=" text-6xl" />
            <p className=" text-lg font-bold">Hands-on</p>
            <div className=" leading-5 text-center pt-3">
              <p>You will be taught & mentored by Industry expert.</p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center">
            <AiFillSafetyCertificate className=" text-6xl" />
            <p className=" text-lg font-bold">Certificate</p>
            <div className=" leading-5 text-center pt-3">
              <p>
                Get your very own physical certificate to prove your
                participation
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center">
            <AiOutlineWechat className=" text-6xl" />
            <p className=" text-lg font-bold">Support System</p>
            <div className=" leading-5 text-center pt-3">
              <p>
                Become part of an ever-growing, supportive community of like
                minds
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center">
            <FaBuilding className=" text-6xl" />
            <p className=" text-lg font-bold">Conducive environment</p>
            <div className=" leading-5 text-center pt-3">
              <p>
                Our classes and the environment is serene and conducive for
                learning.
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center">
            <IoFastFood className=" text-6xl" />
            <p className=" text-lg font-bold">Refreshments</p>
            <div className=" leading-5 text-center pt-3">
              <p>We provide light refreshments for every class</p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center">
            <FaBuilding className=" text-6xl" />
            <p className=" text-lg font-bold">Souvenirs</p>
            <div className=" leading-5 text-center pt-3">
              <p>
                You will get a free t-shirt, jotter, pen etc. This is to make
                you feel right at home, cause why not?!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <section className=" py-[10%] px-[5%] bg-[#fafafa]">
        <h1 className=" text-center text-4xl font-semibold text-[#17355c]">
          Success Stories
        </h1>
        <Carousel />
      </section>

      {/* FAQS */}
      <section className=" bg-[#e4f0ee] py-[10%] px-[5%] text-[#17355c]">
        <h1 className=" text-5xl font-semibold text-center pb-10">FAQs</h1>
        <MainAccordion />
      </section>

      {/* BOTTOM DESCRIPTION */}
      <section className=" bg-[#17355c] text-center px-[5%] ">
        <div className=" flex flex-col text-white max-w-[700px] py-32 mx-auto">
          <h1 className=" text-4xl font-semibold">
            Frontend Web Development with React JS
          </h1>

          <p className=" py-5">
            Start off your career today as a Front-end web developer, learn to
            build high quality websites with dynamic applications to create
            stunning user experiences for the web.
          </p>

          <div className=" flex flex-col md:flex-row gap-5 justify-center">
            <div className="">
              <button className=" bg-[#1db954] font-bold text-white px-7 py-3 shadow-xl rounded-md hover:shadow-none ease-in duration-200">
                Apply Now
              </button>
            </div>

            <div className=" text-[#17355c]">
              <button className=" bg-white font-bold px-4 py-3 shadow-xl rounded-md hover:shadow-none ease-in duration-200">
                Speak To a Learning Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontEnd;
