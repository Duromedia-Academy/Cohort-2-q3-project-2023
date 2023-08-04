import pic55 from "../../../img/img55.jpg";
import pic111 from "../../../img/img111.jpg";
import pic112 from "../../../img/img112.jpg";
import pic19 from "../../../img/img19.webp";
import pic113 from "../../../img/img113.jpg";
import pic114 from "../../../img/img114.jpg";
import pic39 from "../../../img/img39.webp";
import pic116 from "../../../img/img116.jpg";
import pic117 from "../../../img/img117.jpg";
import pic99 from "../../../img/img99.webp";
import pic100 from "../../../img/img100.webp";
import pic101 from "../../../img/img101.webp";
import pic118 from "../../../img/img118.jpg";
import pic119 from "../../../img/img119.jpg";
import li from "../../../img/linkeden.gif";
import fa from "../../../img/facebook.png";
import pi from "../../../img/pinterset.png";
import ins from "../../../img/insta.png";
import you from "../../../img/youtube.png";
import twi from "../../../img/twitter.gif";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Carousel } from "../../../components";

import { Pagination, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const Blogs = () => {
  return (
    <div>
      {/* hero section */}
      <section className=" one">
        <div className=" ">
          <div className="overflow-x-hidden">
            <div className="bg-gap  text-white   py-8 px-6 lg:px-0 ">
              {/* 
              <div className=" flex flex-col justify-between items-center lg:flex-row max-w-ok m-auto lg:justify-between px-6 lg:px-0  lg:items-center gap-10 "> */}

              <div className="relative top-0 w-full flex flex-col justify-between items-center h-full">
                <div className="px-5 relative -bottom-[80px]">
                  <img
                    src={pic55}
                    alt=""
                    className=" lg:w-[780px] w-auto transform  max-w-full h-[400px]"
                  />
                </div>
                <img
                  src={pic55}
                  alt=""
                  className=" lg:w-[780px]  max-w-full h-[200px] hidden"
                />
              </div>
            </div>
            <div className=" lg:max-w-[400px] px-6 lg:px-0  mt-12">
              <a href="#/" className=" text-3xl lg:text-4xl hover:underline">
                10 AI tools every creator should try
              </a>
              <p className=" py-4 text-[1.2rem]">
                Try these AI tools to work smarter not harder.
              </p>
              <p className="text-[1.2rem] ">
                by{" "}
                <span>
                  <a href="#/" className=" underline hover:no-underline ">
                    {" "}
                    Nicole Quintana-Wolf
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" two">
        <div className=" py-9 lg:py-0 ">
          <div className=" grid lg:grid-cols-2 ">
            <div className=" grid  lg:max-w-[1000px]">
              <div className="   lg:pl-24 lg:pr-6  border-b px-5 lg:px-0 lg:border-none py-10">
                <ul className=" ">
                  <li className=" ">
                    <a href="/">:mindset</a>
                  </li>
                  <li className=" text-xl hover:underline py-4">
                    <a href="#/">
                      3 ways AI can help you build your course outline
                    </a>
                  </li>
                  <li className=" text-[1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      {" "}
                      Nina Godlewski
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" border lg:px-6  py-10 px-5">
                <ul className=" ">
                  <li>
                    <a href="#/">:creativity</a>
                  </li>
                  <li className=" text-xl hover:underline py-4">
                    <a href="#/">
                      What to expect the first time you use AI like ChatGPT
                    </a>
                  </li>
                  <li className=" text-[1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      {" "}
                      Nahla Davies
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" lg:col-span-2 border  px-5  lg:pl-24  lg:pr-6 py-10 ">
                <ul>
                  <li>
                    <a href="#/">:news</a>
                  </li>
                  <li className=" text-3xl  font-[350] hover:underline py-4">
                    <a href="#/">
                      What comes after AI chatbots? AI voice generators
                    </a>
                  </li>
                  <li>
                    <p>Next up for AI? Voice generators.</p>
                  </li>
                  <li className=" text-[1rem] pb-4">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      Teachable staff
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex  lg:m-auto lg:gap-7  px-5 lg:px-0  ">
              <div className=" lg:max-w-[300px]">
                <ul>
                  <li>
                    <a href="#/">:marketing</a>
                  </li>
                  <li className=" text-xl hover:underline py-4">
                    <a href="#/">
                      How to stay true to your brand while using AI
                    </a>
                  </li>
                  <li className=" pb-4">
                    <p>
                      Always customize whatever AI gives you to match your brand
                      voice.
                    </p>
                  </li>
                  <li className=" text-[1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      {" "}
                      Karolina Wilde
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" hidden lg:flex">
                <img src={pic111} alt="" className=" w-[280px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" three">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" flex flex-col  lg:flex-row lg:max-w-no m-auto justify-between px-6">
            <div className=" lg:max-w-[500px] lg:leading-[4rem] font-[350] text-center lg:text-start ">
              <a
                href="#/"
                className=" text-3xl md:text-6xl hover:underline decoration-1"
              >
                Get started with your first online course
              </a>
              <p className=" text-[1.1rem] lg:text-xl py-10 lg:py-0">
                You have to start somewhere.
              </p>
            </div>
            <div className=" lg:max-w-[700px] flex  flex-col justify-center  items-center relative ">
              <div className="   ">
                <img src={pic19} alt="" className=" w-full lg:w-[700px]" />
              </div>
              <div className="  absolute ">
                <button className=" bg-goal py-4 px-10 rounded-md hover:opacity-90 transition  ease-in-out duration-300">
                  <a href="#/">Begin Slideshow</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" four">
        <div className=" py-12 lg:py-20">
          <div className=" text-center max-w-[100px] m-auto pb-12">
            <p className=" border-t-4 border-gap">Most popular</p>
          </div>
          <div className="  lg:max-w-no md:max-w-nice max-w-[520px]  m-auto px-4">
            <ol className="">
              <li className=" border-b border-t flex items-center gap-4 py-6  font-[350] text-xl md:text-2xl">
                1{" "}
                <p className=" text-2xl md:text-3xl">
                  46 great business ideas for women entrepreneurs
                </p>
              </li>
              <li className=" border-b  flex items-center gap-4 py-6 text-xl md:text-2xl font-[350]">
                2{" "}
                <p className=" text-2xl md:text-3xl">
                  10 AI tools every creator should try
                </p>{" "}
              </li>
              <li className=" border-b  flex items-center gap-4 py-6 text-xl md:text-2xl font-[350]">
                {" "}
                3{" "}
                <p className=" text-2xl md:text-3xl">
                  {" "}
                  Price your course right with our online course pricing
                  calculator
                </p>
              </li>
              <li className=" border-b  flex items-center gap-4 py-6 text-xl md:text-2xl font-[350]">
                {" "}
                4{" "}
                <p className=" text-2xl md:text-3xl">
                  3 reasons to sell digital downloads
                </p>
              </li>
              <li className=" border-b  flex items-center gap-4 py-6 text-xl md:text-2xl font-[350]">
                {" "}
                5{" "}
                <p className=" text-2xl md:text-3xl">
                  How to go live on TikTok with or without 1,000 followers
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className=" five">
        <div className=" bg-blu text-white py-12 lg:py-24">
          <div className="lg:max-w-ok m-auto md:max-w-[700px]  max-w-[350px]  pb-6 ">
            <h2 className=" text-4xl">Creator news</h2>
            <h3 className=" text-[1.1rem] pt-4">
              The latest headlines about the creator economy
            </h3>
          </div>
          <div className="  flex flex-col md:flex-row justify-between md:max-w-[700px] items-center lg:items-start  gap-10 lg:max-w-ok m-auto ">
            <div className="  max-w-[350px] lg:max-w-[800px]">
              <div className=" ">
                <img
                  src={pic112}
                  alt=""
                  className=" w-[350px] lg:w-[700px]  lg:pl-16"
                />
              </div>
              <div className=" pt-3">
                <ul>
                  <li className=" text-2xl lg:text-[1.9rem]">
                    <a href="#/">
                      What is an infopreneur? You might be one and not even know
                      it
                    </a>
                  </li>
                  <li className="  text-[1.1rem] py-3">
                    <p>What exactly is an infopreneur? We're glad you asked.</p>
                  </li>
                  <li className=" text-[1.1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      Teachable staff
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="  max-w-[350px]  flex flex-col gap-8  ">
              <div>
                <div>
                  <img src={pic113} alt="" className=" w-[350px]" />
                </div>
                <div>
                  <ul>
                    <li className=" text-2xl py-3">
                      <a href="#/">
                        The rise of LinkedIn influencing in the creator economy
                      </a>
                    </li>
                    <li className=" text-[1.1rem] pb-3">
                      <p>The rise of the LinkedIn influencer explained.</p>
                    </li>
                    <li className=" text-[1.1rem]">
                      by{" "}
                      <a href="#/" className=" underline hover:no-underline">
                        {" "}
                        Teachable staff
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <img src={pic114} alt="" className=" w-[350px]" />
                </div>
                <div>
                  <ul>
                    <li className=" text-2xl py-3">
                      <a href="#/">
                        The latest news on the monetization programs that
                        creators rely on
                      </a>
                    </li>
                    <li className=" text-[1.1rem]">
                      by{" "}
                      <a href="#/" className=" underline hover:no-underline">
                        {" "}
                        Teachable staff
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" six">
        <div className=" bg-rod">
          <div className=" flex flex-col lg:flex-row lg:items-center lg:max-w-[1200px] m-auto lg:gap-24 px-6 py-12">
            <div>
              <img src={pic39} alt="" className=" w-full lg:w-72" />
            </div>
            <div className=" pb-8 lg:max-w-[700px]">
              <h1 className="  text-xl lg:text-3xl font-[350] pb-12 lg:pb-20 pt-6 lg:pt-0">
                Your weekly dose of creative chat and Teachable updates. Get our
                weekly newsletter.{" "}
              </h1>
              <div className=" ">
                <form className="  flex  flex-col lg:flex-row gap-6 ">
                  <div className="">
                    <input
                      type="email"
                      placeholder="Your email here"
                      className=" placeholder:text-black bg-transparent border-b border-b-black  lg:pt-4 w-full lg:pr-36  pb-3 border-0 outline-none "
                    />
                  </div>
                  <div className=" max-w-[150px]">
                    <button className=" bg-black text-white px-8 py-4  rounded  hover:opacity-80">
                      <a href="#/">Sign up</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" seven">
        <div className=" py-12 lg:py-20">
          <div className="  flex flex-col lg:flex-row max-w-ok  justify-between m-auto px-6 lg:px-0">
            <div className=" lg:max-w-[360px]">
              <div className=" ">
                <h2 className=" text-[1.7rem] pb-6 lg:text-[2.3rem] text-gap font-[350] lg:pb-16 ">
                  The state of social media and the creator economy
                </h2>
              </div>
              <div>
                <img src={pic116} alt="" className=" w-full lg:w-[350px]" />
              </div>
              <div>
                <ul className=" pb-10 lg:pb-0">
                  <li className=" pt-2">
                    <a href="#/">:marketing</a>
                  </li>
                  <li className=" text-xl py-3">
                    <a href="/" className=" hover:underline">
                      How to make YouTube Shorts: An in-depth guide
                    </a>
                  </li>
                  <li className=" text-[1.1rem] pb-5">
                    <p>Upgrade your video game.</p>
                  </li>
                  <li className=" text-[1.1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      {" "}
                      Karolina Wilde
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" lg:max-w-[500px]  lg:pt-24">
              <div>
                <img src={pic117} alt="" className=" w-full lg:w-[500px]" />
              </div>
              <div>
                <ul className=" pb-10 lg:pb-0">
                  <li className=" pt-2">
                    <a href="#/">:marketing</a>
                  </li>
                  <li className=" text-3xl py-3">
                    <a href="#/" className=" hover:underline">
                      How to get paid for your Reels on Instagram and Facebook
                    </a>
                  </li>
                  <li className=" text-[1.1rem] pb-4">
                    <p>Here's how to monetize your Reels.</p>
                  </li>
                  <li className=" text-[1.1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      {" "}
                      Nahla Davies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" lg:max-w-[320px]  lg:pt-24">
              <div>
                <ul className=" border-b border-t py-8  pb-8">
                  <li>
                    <a href="#/">:news</a>
                  </li>
                  <li className=" text-xl py-3">
                    <a href="#/" className=" hover:underline">
                      Instagram’s link in bio feature isn’t enough: 6
                      alternatives for creators
                    </a>
                  </li>
                  <li className=" text-[1.1rem] pb-4">
                    <p>
                      Optimize your Instagram links in bio without relying on
                      Instagram's new feature.
                    </p>
                  </li>
                  <li className=" text-[1.1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      {" "}
                      Teachable staff
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className=" border-b py-8  pb-8">
                  <li>
                    <a href="#/">:news</a>
                  </li>
                  <li className=" text-xl py-3">
                    <a href="#/" className=" hover:underline">
                      Is this the end of influencing?
                    </a>
                  </li>
                  <li className=" text-[1.1rem] pb-4">
                    <p>
                      Creators are leaving influencing behind for the creator
                      economy.
                    </p>
                  </li>
                  <li className=" text-[1.1rem]">
                    by{" "}
                    <a href="#/" className=" underline hover:no-underline">
                      Nina Godlewski
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="eight">
        <div className="">
          <div className=" lg:max-w-ok bg-gap m-auto ">
            <Swiper
              modules={[Pagination, A11y, EffectFade]}
              effect="cube"
              speed={1000}
              a11y={{
                prevSlide: "true",
                nextSlide: "true",
              }}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              className=" "
            >
              <SwiperSlide>
                <Carousel
                  head={"Now for some buzz"}
                  description={
                    "I really love teachable:hq! teachable:hq is like having a mastermind group in your back pocket 24/7. The give and take format is a big win for me and my business."
                  }
                  image={pic99}
                  name={"Jen W., Digital Scraper"}
                ></Carousel>
              </SwiperSlide>

              <SwiperSlide>
                <Carousel
                  head={"Now for some buzz"}
                  description={
                    "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                  }
                  image={pic100}
                  name={"Edward Z., Excellence Above"}
                ></Carousel>
              </SwiperSlide>

              <SwiperSlide>
                <Carousel
                  image={pic101}
                  head={"Now for some buzz"}
                  description={
                    "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                  }
                  name={"Christine Roebuck of Live my Life Debt Free"}
                ></Carousel>
              </SwiperSlide>

              <div className=" w-full lg:w-0  absolute lg:right-24 lg:top-[480px] lg:p-12  lg:space-y-5 left-0 lg:left-auto">
                <div className="swiper-pagination lg:gap-10 block  lg:flex flex-col lg:justify-between "></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <section className=" nine">
        <div className=" py-10 lg:py-20 text-gap">
          <div className=" lg:text-center max-w-[200px] lg:m-auto border-t-4 border-gap  pb-12">
            <p className=" text-[1.1rem]">The latest from Teachable</p>
          </div>

          <div className=" lg:max-w-ok w-full m-auto flex overflow-x-scroll  justify-between gap-8 px-6 lg:px-0">
            <div className=" lg:max-w-[300px] w-[600px] border lg:pt-10">
              <div>
                <img src={pic118} alt="" className=" max-w-full" />
              </div>
              <div className=" pt-4">
                <a href="#/" className=" text-2xl lg:text-xl ">
                  2023 email statistics to know if you’re in the creator economy
                </a>
              </div>
            </div>

            <div className=" lg:max-w-[600px] w-[600px]  ">
              <div>
                <img src={pic119} alt="" className=" max-w-full lg:w-[600px]" />
              </div>
              <div className=" pt-4">
                <a href="#/" className=" text-2xl lg:text-[2.4rem]">
                  Video monetization 101: How to make money from your videos
                </a>
              </div>
            </div>

            <div className=" lg:max-w-[300px] w-[600px]  lg:pt-10">
              <div>
                <img src={pic118} alt="" className=" max-w-full" />
              </div>
              <div className=" lg:text-center pt-4">
                <ul className=" hover:underline">
                  <li>
                    {" "}
                    <a href="#/" className=" text-2xl lg:text-xl ">
                      How creators can use AI{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#/" className=" text-2xl lg:text-xl ">
                      to help bridge the language gap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" max-w-[150px] lg:m-auto lg:text-center pt-8 lg:pt-16">
            <a
              href="#/"
              className=" text-[1.1rem] underline hover:no-underline"
            >
              More updates
            </a>
          </div>
        </div>
      </section>

      <section className=" ten">
        <div className=" bg-rod">
          <div className=" flex flex-col lg:flex-row lg:items-center lg:max-w-[1200px] m-auto lg:gap-24 px-6 py-12">
            <div>
              <img src={pic39} alt="" className=" w-full lg:w-72" />
            </div>
            <div className=" pb-8 lg:max-w-[700px]">
              <h1 className="  text-xl lg:text-3xl font-[350] pb-12 lg:pb-20 pt-6 lg:pt-0">
                Your weekly dose of creative chat and Teachable updates. Get our
                weekly newsletter.{" "}
              </h1>
              <div className=" ">
                <form className="  flex  flex-col lg:flex-row gap-6 ">
                  <div className="">
                    <input
                      type="email"
                      placeholder="Your email here"
                      className=" placeholder:text-black bg-transparent border-b border-b-black  lg:pt-4 w-full lg:pr-36  pb-3 border-0 outline-none "
                    />
                  </div>
                  <div className=" max-w-[150px]">
                    <button className=" bg-black text-white px-8 py-4  rounded  hover:opacity-80">
                      <a href="#/">Sign up</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" eleven">
        <div className=" py-12 lg:py-24">
          <div className=" text-center pb-6">
            <p className=" lg:text-4xl">Follow us</p>
          </div>
          <div className="flex justify-center pr-3 space-x-3">
            <div className="border-2 border-black  p-1 rounded-full ">
              <img src={you} alt="" className=" rounded-full  w-8 " />
            </div>
            <div className="border-2 border-black  p-1 rounded-full ">
              <img src={fa} alt="" className=" rounded-full  w-8" />
            </div>
            <div className="border-2 border-black  p-1 rounded-full ">
              <img src={pi} alt="" className=" rounded-full  w-8" />
            </div>
            <div className="border-2 border-black  p-1 rounded-full ">
              <img src={ins} alt="" className=" rounded-full  w-8 " />
            </div>
            <div className="border-2 border-black  p-1 rounded-full ">
              <img src={twi} alt="" className=" rounded-full  w-8 " />
            </div>
            <div className="border-2 border-black  p-1 rounded-full  ">
              <img src={li} alt="" className=" rounded-full   w-8 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
