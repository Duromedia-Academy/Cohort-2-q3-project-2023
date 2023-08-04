import React from "react";

import background from "../../../img/img43.webp";
import pic44 from "../../../img/img44.webp";
import pic45 from "../../../img/img45.webp";
import pic46 from "../../../img/img46.webp";
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
const Teachable = () => {
  return (
    <div className=" ">
      <div
        style={{ backgroundImage: `url(${background}) ` }}
        className=" bg-no-repeat bg-cover bg-center lg:min-h-[80vh]"
      >
        <div className=" lg:pl-8 lg:pt-64 lg:relative lg:bottom-[-40px] lg:max-w-no  m-auto ">
          <div className="">
            <div className="bg-white lg:max-w-[560px] lg:min-h-[60vh]  lg:flex lg:flex-col lg:justify-center">
              <div className=" lg:max-w-[440px] m-auto max-w-sit md:max-w-nice  px-3 lg:px-0 py-8 lg:py-0">
                <div className=" ">
                  <h1 className="  text-3xl lg:text-6xl">teachable:hq</h1>
                  <p className=" py-6">
                    Grow your online knowledge business with a little help from
                    your peers. Your Teachable membership gets you access to the
                    most exclusive creator community out there. Join over 10,000
                    of your peers to network, trade strategies, and cheer each
                    other on.
                  </p>
                </div>
                <div>
                  <button className=" bg-peak text-white  py-3 lg:py-4 px-8 rounded">
                    <a href="#/">Become a Member</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-lemon min-h-screen lg:min-h-[110vh]">
        <div className="   ">
          <div className=" lg:max-w-no m-auto  lg:py-36  px-3 lg:px-0 max-w-[520px] md:max-w-[700px] py-24 ">
            <h1 className=" lg:text-[3.2rem] lg:font-[350] lg:leading-[3.2rem] text-3xl">
              Running a business should never be lonely. That’s why we created
              teachable:hq, a community for creators.
            </h1>
            <p className=" pt-10 lg:pt-16 text-[1.1rem] md:text-[1.2rem]">
              Teachable:hq is there to connect you with other dedicated creators
              running a business on Teachable. Swap best practices, get the
              feedback you need to move forward, and meet collaborators. Plus,
              Teachable is pulling out all the stops, from swag to special
              workshops and more, to make this community a cut above the rest.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-cream">
        <div className=" relative top-[-100px] lg:top-[-200px] mx-3 lg:mx-0">
          <img src={pic44} alt="" className=" w-full lg:w-[1200px] m-auto " />
        </div>
        <div className=" lg:max-w-no m-auto text-center px-4  md:px-0 max-w-[520px] md:max-w-[700px] text-gap pb-12 lg:pb-24 relative top-[-30px]">
          <div className=" max-w-[80px] border-t-4 m-auto border-gap">
            <p className="">Community</p>
          </div>
          <h1 className=" lg:max-w-yh m-auto lg:py-14 lg:text-6xl py-7  text-4xl">
            A community that cares about its members
          </h1>
          <h2 className=" lg:text-[1.35rem] text-[1.05rem] md:text-[1.13rem] ">
            Teachable:hq offers curated content that’ll solve questions for any
            industry. Our community is focused on providing helpful resources
            and it acknowledges the nuances of what makes a business
            successful—no matter what your level of experience is as a creator.
          </h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-[700px] lg:max-w-no   m-auto text-gap  gap-12 lg:gap-10 px-3 lg:px-0 pb-12 lg:pb-28">
          <div className="  max-w-[340px] m-auto lg:m-0 lg:max-w-none">
            <h1 className=" text-xl md:text-3xl">To new creators</h1>
            <p className=" pt-6 text-[1.15rem]">
              Whether you’re new to online business or teaching for the first
              time, we have the knowledge to give you a strong start. Nail the
              basics faster with the help of creators who have been there and
              succeeded by participating in conversations or connecting with a
              mentor.
            </p>
          </div>
          <div className="  max-w-[340px] m-auto lg:m-0 lg:max-w-none ">
            <h1 className=" text-xl md:text-3xl">To growing creators</h1>
            <p className=" pt-6 text-[1.15rem]">
              We’re so excited to know you have a business you’re looking to
              grow. Our experts in teachable:hq can help you learn specific
              strategies to take efficiency to new heights, expand your email
              list, or become fluent in marketing.
            </p>
          </div>
          <div className=" max-w-[340px] m-auto lg:m-0 lg:max-w-none">
            <h1 className=" text-xl md:text-3xl">To established creators</h1>
            <p className=" pt-6 text-[1.15rem]">
              You’ve established a thriving business and we want to celebrate
              that. Enjoy the spotlight when you’re featured in our trophy case.
              Find vetted best practices to future-proof your business. Be among
              other leaders who will inspire you to sharpen your skills (or
              boost your reach).
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-gap">
        <div className=" text-center py-12 lg:py-24">
          <h1 className=" text-4xl lg:text-7xl text-white">
            Join the conversation.
          </h1>
          <div className=" py-6  lg:py-12">
            <button className=" bg-goal py-3 px-6 lg:px-8 lg:py-4 rounded  hover:opacity-80 ">
              <a href="#/" className=" text-[1.1rem]">
                Join Today
              </a>
            </button>
          </div>
          <p className=" text-[1.2rem] pt-6 lg:pt-0  text-white">
            Not yet a paid member?
            <span>
              <a href="#/" className=" underline">
                {" "}
                Upgrade today.
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className=" bg-cream">
        <div className=" lg:max-w-no m-auto text-center px-4  md:px-0 max-w-[520px] md:max-w-[700px] text-gap py-12 lg:py-24 ">
          <div className=" max-w-[50px] border-t-4 m-auto border-gap">
            <p className="">Perks</p>
          </div>
          <h1 className=" lg:max-w-yh m-auto lg:py-14 lg:text-6xl py-7  text-4xl">
            More than a forum.
          </h1>
          <h2 className=" lg:text-[1.35rem] text-[1.05rem] md:text-[1.13rem] ">
            At Teachable, we have an innovative view toward building
            community—we take cues from your fresh approach to building a
            business. We built teachable:hq as a dynamic membership hub—a
            central location for making powerful connections, accessing
            exclusive content, and growing your business.
          </h2>
        </div>

        <div className="lg:py-24">
          <div className=" flex md:flex-col-reverse lg:flex-row items-center  max-w-no m-auto ">
            <div className="  lg:max-w-[480px] max-w-[700px] m-auto px-6 md:px-0">
              <div className=" py-6 ">
                <h1 className=" text-3xl  font-[400]">
                  Conversations that are a cut above
                </h1>
                <p className=" text-[1.1rem] lg:text-[1.2rem] pt-2">
                  Here, you’ll find discussions that get to the heart of the
                  matter: best practices, detailed notes on strategy, and
                  meaningful connections—not just another support forum.
                </p>
              </div>
              <div className=" ">
                <h1 className=" text-3xl  font-[400]">
                  Exclusive webinars, workshops, and roundtable discussions
                </h1>
                <p className=" text-[1.1rem] lg:text-[1.2rem]  pt-2">
                  In teachable:hq, we regularly curate live events to help you
                  learn from your peers and more experienced creators.
                </p>
              </div>
              <div className="py-6">
                <h1 className=" text-3xl  font-[400]">Challenges</h1>
                <p className=" text-[1.1rem] lg:text-[1.2rem]  pt-2">
                  Participate in action-oriented, time-bound group challenges to
                  help you reach specific goals that push your business forward.
                </p>
              </div>
            </div>
            <div className=" hidden md:flex">
              <img src={pic45} alt="" className=" w-[700px] lg:w-[570px]" />
            </div>
          </div>

          <div className=" flex  items-center md:flex-col lg:flex-row  pt-12 lg:pt-40  max-w-no m-auto ">
            <div className=" hidden md:flex">
              <img src={pic46} alt="" className=" w-[700px] lg:w-[570px]" />
            </div>
            <div className=" lg:max-w-[480px] max-w-[700px] m-auto px-6 md:px-0">
              <div className=" py-6">
                <h1 className=" text-3xl  font-[400]">
                  Chances to build your credibility
                </h1>
                <p className=" text-[1.1rem] lg:text-[1.2rem]  pt-2">
                  Whether you’re leading a workshop to your peers within our
                  community, or getting connected to speaking and guest posting
                  opportunities, we’re going to be looking for chances to put
                  you on a pedestal.
                </p>
              </div>
              <div>
                <h1 className=" text-3xl  font-[400]">Networking that works</h1>
                <p className=" text-[1.1rem] lg:text-[1.2rem]  pt-2">
                  Building a business takes a village and with teachable:hq your
                  support systems comes built in. We’ll help personally connect
                  you to creators who can help you elevate your business.
                </p>
              </div>
              <div className=" py-6">
                <h1 className=" text-3xl  font-[400]">Swag</h1>
                <p className=" text-[1.1rem] lg:text-[1.2rem]  pt-2">
                  You didn’t think we forgot about swag, right?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className=" bg-goal">
        <div className=" text-center py-12 lg:py-24">
          <h1 className=" text-4xl lg:text-6xl ">Join the conversation.</h1>
          <div className=" py-6  lg:py-12">
            <button className=" bg-brown py-3 px-6 lg:px-8 lg:py-4 rounded text-white hover:opacity-80  ">
              <a href="#/" className=" text-[1.1rem]">
                Become a member
              </a>
            </button>
          </div>
          <p className=" text-[1.2rem] pt-6 lg:pt-0 ">
            Already a paid member?
            <span>
              <a href="#/" className=" underline">
                {" "}
                Log in here.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teachable;
