import React, { useState, useRef } from "react";
import frontend from "../../img/frontend.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Accordion = () => {
  const contentEl1 = useRef();
  const contentEl2 = useRef();
  const contentEl3 = useRef();
  const contentEl4 = useRef();

  const [accordionStates, setAccordionStates] = useState([
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

  return (
    <div className=" flex flex-col gap-5">
      {/* ACCORDION 1 */}
      <div className="border-b max-w-[750px] w-full mx-auto overflow-hidden list-disc">
        <button
          className={`w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none font-semibold hover:bg-accord ${
            accordionStates[0] ? "bg-accord text-[#1db954]" : "bg-transparent"
          }`}
          onClick={() => toggleAccordion(0)}
        >
          <li className="font-bold text-2xl">About the Course</li>
          <RiArrowDropDownLine
            className={`arrow text-4xl ease-in-out duration-700 ${
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
          <div className="flex gap-5 flex-col md:flex-row py-5">
            <div className="py-4 basis-1/2 h-full">
              <img
                className=" h-[370px] w-full object-cover rounded-md"
                src={frontend}
                alt=""
              />
            </div>

            <div className=" basis-1/2 h-[370px] flex flex-col justify-around">
              <p>
                Learn the skills and tools you need to build engaging,
                interactive user experiences on the web as a front-end web
                developer. If you would like to get started as a front-end web
                developer, This course is for you! Work on projects ranging from
                a simple HTML page to a complete full-blown project.
              </p>

              <p className="">
                This course teaches you the skills you need to build engaging,
                interactive user experiences on the web as a front-end web
                developer. This course path will guide you through all you need
                to know to start a career as a Frontend Engineer from the ground
                up.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ACCORDION 2 */}
      <div className="border-b max-w-[750px] w-full mx-auto overflow-hidden list-disc">
        <button
          className={`w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none font-semibold hover:bg-accord ${
            accordionStates[1] ? "bg-accord text-[#1db954]" : "bg-transparent"
          }`}
          onClick={() => toggleAccordion(1)}
        >
          <li className="font-bold text-2xl">What you will Learn</li>
          <RiArrowDropDownLine
            className={`arrow text-4xl ease-in-out duration-700 ${
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
          <ul className=" py-5">
            <li className=" list-disc ml-6">
              The Front-end Web Development Path will guide you through what you
              need to know to start a career as a Front-end Engineer from the
              ground up.You will learn;
            </li>
            <ul className=" list-disc pl-16 flex flex-col gap-3 pt-3">
              <li>Layout a simple webpage using HTML</li>
              <li>Style a website element using CSS</li>
              <li>Using Git and Github for version control</li>
              <li>Create web projects with JavaScript</li>
              <li>Query a database that uses and stores information</li>
              <li>Design technical architecture using UML diagrams</li>
              <li>Implement unit and integration tests</li>
              <li>Create responsive interfaces</li>
              <li>Write and test software with JavaScript</li>
            </ul>
          </ul>
        </div>
      </div>

      {/* ACCORDION 3 */}
      <div className="border-b max-w-[750px] w-full mx-auto overflow-hidden list-disc">
        <button
          className={`w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none font-semibold hover:bg-accord ${
            accordionStates[2] ? "bg-accord text-[#1db954]" : "bg-transparent"
          }`}
          onClick={() => toggleAccordion(2)}
        >
          <li className="font-bold text-2xl">Prerequisites</li>
          <RiArrowDropDownLine
            className={`arrow text-4xl ease-in-out duration-700 ${
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
          <div className=" py-5">
            <ul className="list-disc ml-10">
              <li>Access to a computer – Mac or Windows.</li>
              <li>Little or no previous coding experience.</li>
              <li>Willingness to learn.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ACCORDION 4 */}
      <div className="border-b max-w-[750px] w-full mx-auto overflow-hidden list-disc">
        <button
          className={`w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none font-semibold hover:bg-accord ${
            accordionStates[3] ? "bg-accord text-[#1db954]" : "bg-transparent"
          }`}
          onClick={() => toggleAccordion(3)}
        >
          <li className="font-bold text-2xl">Course Outline</li>
          <RiArrowDropDownLine
            className={`arrow text-4xl ease-in-out duration-700 ${
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
          <div className=" py-5">
            <ul className=" list-disc ml-10 flex flex-col gap-3 pt-3 text-lg">
              <li>
                <b>Week 1:</b> Introduction to Web Development/HTML
              </li>
              <li>
                <b>Week 2:</b> Styling HTML Web Pages
              </li>
              <li>
                <b>Week 3:</b> Intermediate CSS
              </li>
              <li>
                <b>Week 4:</b> Bootstrap and Responsive Design
              </li>
              <li>
                <b>Week 5:</b> JavaScript Fundamentals and DOM
              </li>
              <li>
                <b>Week 6:</b> JavaScript Fundamentals and DOM (II)
              </li>
              <li>
                <b>Week 7:</b> ES6 and JavaScript Modules
              </li>
              <li>
                <b>Week 8:</b> Project Week <br />
                Build a one-page website with Html, CSS, and Javascript
              </li>
              <li>
                <b>Week 9:</b> React – Getting Started
              </li>
              <li>
                <b>Week 10:</b> React – (ii) <br />
                Single Page Applications (SPAs) with React
              </li>
              <li>
                <b>Week 11:</b> React (iii) <br />
                Advanced Components
              </li>
              <li>
                <b>Week 12</b> – React (iv) <br />
                Using the Switch Tag
              </li>
              <b>Capstone Project</b>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
