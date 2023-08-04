import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../carousel/carousel.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({ name, job, message }) => {
  return (
    <div className=" bg-white w-[300px] h-[300px] p-5 justify-evenly flex flex-col shadow-[3px_10px_10px_1px_rgba(0,0,0,0.06)] text-[#17355c] my-10 mx-auto select-none">
      <div className="">
        <h1 className=" text-2xl font-semibold">{name}</h1>
        <p className=" italic text-[#999999] font-medium">{job}</p>
      </div>
      <div className="">
        <p>{message}</p>
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const responsiveSettings = {
    1000: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  };
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }}
      prevButtonCustomizedClass="custom-prev-button"
      nextButtonCustomizedClass="custom-next-button"
      autoplay={{ delay: 8000 }}
      modules={[Pagination, Navigation]}
      breakpoints={responsiveSettings}
      className="custom-pagination-dot"
    >
      <SwiperSlide>
        <Slider
          name="Grace"
          job="UX designer at Cowrywise"
          message="Training with Univelcity is one of the best things that happened to my career. I got useful skills and knowledge to help me understand the field of product design."
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slider
          name="Damilola"
          job="Data Analyst"
          message="I didn’t only learn concepts that got me grounded as a Data Scientist. I also received mentorship which further positioned me for life and career growth."
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slider
          name="Jehonadab"
          job="Software Engineer"
          message="Seizing the opportunity to take a class at univelcity was the head start I needed in my career. Almost 3 years down the line, and I think this is my best career investment yet."
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slider
          name="Faith"
          job="Data Scientist at BudgIT"
          message="I got an internship job with BudgiT where I currently grow the skill I was so dutifully taught. I am delighted to have learned this skill at such a wonderful place as Univelcity."
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slider
          name="Uchechukwu"
          job="Data Analyst"
          message="As an alumnus of Univelcity, learning PRODUCT DESIGN and PYTHON FOR DATA SCIENCE was one of the best decisions I have made in building a career."
        />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default SliderComponent;
