import React, { useState, useRef } from "react";
import faqData from "./data";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { useSpring, animated, useTransition, easings } from 'react-spring';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentEl = useRef();

  return (
    <div className="border-b max-w-[650px] w-full mx-auto overflow-hidden">
      <button
        className={`w-full text-left py-2 px-4 flex items-center justify-between focus:outline-none font-semibold hover:bg-accord ${
          isOpen ? "bg-accord text-[#1db954]" : "bg-transparent"
        }`}
        onClick={onClick}
      >
        {question}
        <RiArrowDropDownLine
          className={`arrow text-4xl ease-in-out duration-700 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentEl}
        className="px-4 transition-height duration-700"
        style={
          isOpen
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className=" py-4">{answer}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
