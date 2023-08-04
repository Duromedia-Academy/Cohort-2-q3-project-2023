import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } h-14 w-14 bg-green-500 flex justify-center items-center rounded-full border-white border-2 fixed z-10 bottom-10 right-6 cursor-pointer`}
    >
      <FaAngleUp className="text-xl" />
    </div>
  );
};

export default ScrollToTopButton;
