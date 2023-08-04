import React from "react";
import pic115 from "../../../img/img115.webp";
import pic120 from "../../../img/img120.webp";
import pic121 from "../../../img/img121.webp";
import pic122 from "../../../img/img122.webp";
import pic123 from "../../../img/img123.webp";
import pic124 from "../../../img/img124.webp";
import pic125 from "../../../img/img125.webp";
import pic126 from "../../../img/img126.webp";
import pic127 from "../../../img/img127.webp";
import pic128 from "../../../img/img128.webp";
import pic129 from "../../../img/img129.svg";
import pic130 from "../../../img/img130.svg";
import pic131 from "../../../img/img131.svg";
import { BiPlay } from "react-icons/bi";
import pic47 from "../../../img/img47.webp";
import pic48 from "../../../img/img48.webp";
import pic49 from "../../../img/img49.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Carousel } from "../../../components";

import { Pagination, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  return (
    <div>
      <section className=" one">
        <div className=" pt-14 lg:pt-0">
          <div className=" flex flex-col-reverse lg:flex-row md:max-w-nice lg:max-w-me md:m-auto items-center justify-around text-gap   pb-10 mx-3">
            <div className=" pt-8 md:pt-12 lg:pt-0 relative bottom-[-80px]">
              <img
                src={pic115}
                alt=""
                className="md:w-pad lg:w-[540px] lg:h-[650px]  w-[520px] h-[520px]"
              />
            </div>
            <div className=" max-w-sit md:max-w-nice lg:max-w-[520px]">
              <h1 className=" text-4xl lg:text-[3.8rem] lg:leading-it font-normal ">
                Share what you know; we'll help you get paid for it
              </h1>
              <p className=" pt-10 lg:text-2xl ">
                Teachable helps creators engage their online audiences and get
                paid on their own terms with courses, coaching, and downloadable
                content.
              </p>
              <div className="">
                <form>
                  <label>Enter your email:</label>
                  <div className=" flex flex-col md:flex-row gap-6 pt-2">
                    <div className=" md:max-w-[520px] lg:max-w-[300px] w-full">
                      <input
                        type="email"
                        placeholder="hello@email.com"
                        className="  w-full py-4 pl-4 placeholder:text-[1.2rem] bg-gray-100 border-b-2 border-brown outline-goal"
                      />
                    </div>
                    <div>
                      <button className=" bg-goal py-4 w-full md:px-6  rounded-md">
                        <a href="#/" className=" text-[1.1rem] text-black">
                          Join for free
                        </a>
                      </button>
                    </div>
                  </div>
                </form>
                <p className=" lg:max-w-omo  max-w-md text-lit ">
                  *By submitting your email address, you agree to Teachable's{" "}
                  <a href="#/" className=" underline">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#/" className=" underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="two">
        <div className=" bg-lemon ">
          <div className=" flex flex-col lg:flex-row max-w-ok m-auto justify-around items-center text-gap py-12 lg:py-24 px-4 md:px-0">
            <div className=" max-w-[480px] md:max-w-[700px] lg:max-w-[520px] md:pb-12 lg:pb-0">
              <h1 className=" text-3xl lg:text-6xl font-[350] ">
                Escape the algorithm
              </h1>
              <p className=" pt-5 text-[1.2rem] ">
                Teachable is a no-code platform for creators who want to build
                more impactful businesses through courses, coaching, and digital
                downloads. Whether you’re going viral on TikTok or bringing your
                in-person classes online, with Teachable you own your content
                and your students’ experience.
              </p>
              <div className=" pt-8 lg:pt-12 hidden md:block">
                <button className=" bg-goal py-3 px-6 lg:py-4 lg:px-7 text-black rounded-md">
                  <a href="#/" className=" text-[1.1rem]">
                    Start for free
                  </a>
                </button>
              </div>
            </div>
            <div className=" ">
              <div className=" ">
                <img
                  src={pic120}
                  alt=""
                  className=" w-full md:w-[700px]  lg:w-[500px]"
                />
                <div className=" flex items-center  pt-5">
                  <p className="text-[1.15rem]">Learn more about Teachable</p>
                  <BiPlay className=" text-3xl  text-goal" />
                </div>
                <div className=" md:hidden">
                  <button className=" bg-goal py-3 w-full text-black rounded-md">
                    <a href="#/">Start for free</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="three">
        <div className=" py-8 lg:py-24 bg-cream">
          <div className=" text-center md-max-w-[700px] lg:max-w-yh max-w-[500px] m-auto px-5 md:px-0">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl">
              Three ways to sell
            </h2>
            <h3 className=" py-8 lg:py-16 lg:text-xl">
              There’s no all-in-one formula for success as a creator. That’s why
              we let you choose how to build your business.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-nice lg:max-w-no m-auto gap-12 place-items-center px-6">
            <div className=" max-w-[360px]  h-full bg-white ">
              <div>
                <img src={pic121} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">Online courses</h1>
                <p className=" pb-24">
                  Our intuitive course builder gives you the power to share what
                  you know. No coding or design skills necessary.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pt-4">
                <a href="#/" className=" underline">
                  Learn more
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white ">
              <div>
                <img src={pic122} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">Digital Downloads</h1>
                <p className=" pb-24">
                  Reach your audience with the content they want, faster than
                  ever. Sell PDFs, audio clips, and more.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pb-6">
                <a href="#/" className=" underline">
                  Learn more
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white  ">
              <div>
                <img src={pic123} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">Coaching products</h1>
                <p className=" pb-24">
                  Manage your coaching business with milestones and scheduling,
                  plus, process payments all on Teachable.
                </p>
              </div>
              <div className="  relative bottom-[10px]  px-4 gap-6  pt-10">
                <a href="#/" className=" underline  ">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="four">
        <div className=" bg-gap ">
          <div className=" flex flex-col lg:flex-row max-w-no m-auto justify-around items-center text-white py-12 lg:py-24 px-4 md:px-0">
            <div className=" max-w-[480px] md:max-w-[700px] lg:max-w-[470px] md:pb-12 lg:pb-0">
              <h1 className=" text-3xl lg:text-6xl font-[350] ">
                Free to start, simple to scale
              </h1>
              <p className=" pt-5 text-[1.2rem] ">
                Our free plan includes everything you need to begin teaching and
                earning now. Upgrade later for additional resources to support
                your business’s changing needs.
              </p>
              <div className=" pt-8 lg:pt-12">
                <a
                  href="#/"
                  className=" text-[1.1rem] underline hover:decoration-goal  "
                >
                  View all plans
                </a>
              </div>
            </div>
            <div className=" ">
              <div className=" ">
                <img
                  src={pic124}
                  alt=""
                  className=" w-full md:w-[700px]  lg:w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div>
          <div>
            <img src={pic125} alt="" className=" w-full" />
          </div>
        </div>
      </section>
      <section className=" six">
        <div className=" py-16 lg:py-24 bg-cream">
          <div className=" text-center  max-w-[350px] md:max-w-[700px] lg:max-w-no m-auto">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-[350]">
              Less stress. More results.
            </h2>
            <h3 className=" lg:text-xl py-12">
              The tools you need to build, grow, and manage a thriving knowledge
              business are right here. Get started in three simple steps.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:max-w-no m-auto place-items-center lg:place-items-start  md:max-w-[750px] gap-6 px-4  md:px-0">
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2 text-3xl"> 1</h2>
              <h3 className=" py-8 text-xl md:text-2xl">Prep your content</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Outline your course, plan a coaching program, or design a
                digital product you’d like to upload and sell.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2 text-3xl"> 2</h2>
              <h3 className=" py-8 text-xl md:text-2xl">Price your product</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Set prices for each of your offerings, then use our simple sales
                page builder to quickly create a place to send people to
                purchase.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2 text-3xl"> 3</h2>
              <h3 className=" py-8 text-xl md:text-2xl">Upload your content</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Use our intuitive drag-and-drop builder to create your product
                with videos, slides, quizzes, and more
              </h4>
            </div>
          </div>
          <div className=" text-center pt-12">
            <button className=" bg-goal py-3 lg:py-4 px-6 lg:px-7 rounded-md">
              <a href="#/">Start for free</a>
            </button>
          </div>
        </div>
      </section>
      <section className=" seven">
        <div className=" py-10 lg:py-20 bg-brown text-white ">
          <div className=" text-center px-5 lg:px-0 lg:max-w-nice m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl">
              Creator-first features
            </h2>
            <h3 className=" text-[1.15rem] py-12">
              Creating and selling online is easy when you have best-in-class
              features and course creation tools for every type of creator need.
            </h3>
          </div>
          <div className=" max-w-no m-auto px-5 lg:px-0">
            <div className=" flex flex-col md:flex-col-reverse lg:flex-row justify-around items-center pb-16">
              <div className=" pt-8">
                <img
                  src={pic126}
                  alt=""
                  className=" w-[520px] md:w-[680px] lg:w-[520px]"
                />
              </div>
              <div className=" max-w-[520px] md:max-w-[700px] lg:max-w-[460px] pt-8">
                <h2 className=" text-2xl">More than a payment gateway</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Teachable:pay is an automated way to get paid, manage payouts,
                  and sell more confidently. Get a simple, reliable checkout
                  system, fraud protection, tax-inclusive pricing, global
                  currency conversion, automatic payouts, and more. Plus, enjoy
                  zero transaction fees on Pro and Business plans.{" "}
                </h3>
                <h2 className=" text-2xl">Flexibility at your fingertips</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Our effortless course builder and customizable templates mean
                  you can personalize your course to align with your style and
                  branding. Course creators also have the flexibility to utilize
                  various forms of multimedia, including audio, video, images,
                  and text to adapt to different learning styles.
                </h3>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row justify-around items-center">
              <div className=" lg:max-w-[460px]  md:max-w-[700px] max-w-[520px] pb-8">
                <h2 className=" text-2xl">Intuitive integrations and apps</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  The tools you know and love, in one place, working together
                  for you. Third-party integrations, such as MailChimp, Zapier,
                  ConvertKit, Google Analytics, Aweber, and Segment are
                  compatible with our platform, and our public API will automate
                  your workflow.
                </h3>
                <h2 className=" text-2xl">Powerful innovations</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Our best-in-class features were designed with creators like
                  you in mind. Use our powerful AI course curriculum generator
                  to kickstart an idea, inspire creativity, or unblock yourself.
                  Work smarter, not harder—we’ll show you how.
                </h3>
              </div>
              <div>
                <img
                  src={pic127}
                  alt=""
                  className="  w-[520px] md:w-[680px] lg:w-[520px]"
                />
              </div>
            </div>
            <div className=" flex flex-col md:flex-col-reverse lg:flex-row justify-around items-center pb-16">
              <div className=" pt-8">
                <img
                  src={pic128}
                  alt=""
                  className=" w-[520px] md:w-[680px] lg:w-[520px]"
                />
              </div>
              <div className=" max-w-[520px] md:max-w-[700px] lg:max-w-[460px] pt-8">
                <h2 className=" text-2xl">Growth made easy </h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Scale and market your course with our advanced data reporting
                  and business management features. Get support selling your
                  course with our affiliate marketing capabilities, automated
                  payouts, and referral programs.{" "}
                </h3>
                <h2 className=" text-2xl">Meaningful audience engagement</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Build—and sustain—impactful relationships with your audience.
                  Bespoke student-side features like comments, quizzes, and
                  certifications of completion drive learning outcomes and
                  student satisfaction.
                </h3>
              </div>
            </div>
          </div>
          <div className=" text-center  py-10 lg:py-16">
            <button className=" bg-goal py-3 px-6 lg:py-4 lg:px-6 rounded-md text-xl text-black">
              <a href="#/">Start for free</a>
            </button>
          </div>
        </div>
      </section>
      <section className="eight">
        <div className=" py-8 lg:py-24 bg-cream">
          <div className="  md-max-w-[700px] lg:max-w-no max-w-[500px] m-auto px-5 md:px-0">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl">
              Need help fast?
            </h2>
            <h3 className=" py-8 lg:py-16 lg:text-xl">
              Every big creator had to start somewhere. Our support resources
              are the launch pad you need to succeed.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-nice lg:max-w-no m-auto gap-12 place-items-center px-6">
            <div className=" max-w-[360px]  h-full bg-white  pt-6">
              <div className=" pl-5">
                <img src={pic129} alt="" className=" w-[60px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">teachable:u</h1>
                <p className=" pb-24">
                  Marketing, video, course-building best practices—get access to
                  our mini course library on those topics and more.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pt-4">
                <a href="#/" className=" underline">
                  Learn more
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white pt-6 ">
              <div className=" pl-5">
                <img src={pic130} alt="" className=" w-[60px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">teachable:blog</h1>
                <p className=" pb-24">
                  You’ve got questions and the answers are on our blog. You’ll
                  find how-tos, creator interviews, and much more.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pb-6">
                <a href="#/" className=" underline">
                  Learn more
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white  pt-6 ">
              <div className=" pl-5">
                <img src={pic131} alt="" className=" w-[60px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">teachable:hq</h1>
                <p className=" pb-24">
                  Join over 10,000 of your peers to network, trade strategies,
                  and share successes in our exclusive community, available to
                  all paid plan subscribers.
                </p>
              </div>
              <div className="  relative bottom-[10px]  px-4 gap-6  pt-10">
                <a href="#/" className=" underline  ">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" nine">
        <div className=" bg-gap">
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
                image={pic47}
                name={"Jen W., Digital Scraper"}
              ></Carousel>
            </SwiperSlide>

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic48}
                name={"Edward Z., Excellence Above"}
              ></Carousel>
            </SwiperSlide>

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic49}
                name={"Christine Roebuck of Live my Life Debt Free"}
              ></Carousel>
            </SwiperSlide>

            <div className=" w-full lg:w-0  absolute lg:right-24 lg:top-[480px] lg:p-12  lg:space-y-5 left-0 lg:left-auto">
              <div className="swiper-pagination lg:gap-10 block  lg:flex flex-col lg:justify-between "></div>
            </div>
          </Swiper>
        </div>
      </section>
      <section className="ten">
        <div>
          <div>
            <img src={pic125} alt="" className=" w-full" />
          </div>
        </div>
      </section>
      <section className=" eleven">
        <div className=" bg-goal py-12 ">
          <div className=" text-center text-brown ma-w-[520px] lg:max-w-no px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-6xl  text-brown font-[600]">
              Change your future
            </h2>
            <h2 className=" text-2xl md:text-3xl lg:text-6xl  text-brown font-[4o0] pt-3">
              with one click.
            </h2>
            <h3 className=" text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-6 font-[600]">
              Try our (actually free) free plan today.
            </h3>
            <div className=" pt-8 lg:pt-16">
              <button className=" bg-brown text-white py-3 px-6 lg:py-5 lg:px-8 rounded-md">
                <a href="#/">Start for free</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
