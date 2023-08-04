import pic70 from "../../../img/img70.webp";
import pic71 from "../../../img/img71.webp";
import pic72 from "../../../img/img72.webp";
import pic73 from "../../../img/img73.webp";
import pic74 from "../../../img/img74.webp";
import pic75 from "../../../img/img75.webp";
import pic76 from "../../../img/img76.webp";
import pic77 from "../../../img/img77.webp";
import pic78 from "../../../img/img78.webp";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Carousel } from "../../../components";

import { Pagination, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const Coaching = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const isOpen = () => {
    setIsAnswerOpen(true);
  };

  const isClose = () => {
    setIsAnswerOpen(false);
  };

  const [isLock, setIsLock] = useState(false);
  const isTry = () => {
    setIsLock(true);
  };

  const isTime = () => {
    setIsLock(false);
  };
  const [isMind, setIsMind] = useState(false);
  const isApp = () => {
    setIsMind(true);
  };
  const isAlt = () => {
    setIsMind(false);
  };
  const [isNice, setIsNice] = useState(false);
  const isOK = () => {
    setIsNice(true);
  };
  const isNotOk = () => {
    setIsNice(false);
  };

  return (
    <div>
      <section className=" one">
        <div className=" bg-brown">
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:h-screen ">
            <div className=" flex items-center">
              <div className=" max-w-[520px] md:max-w-[750px]  lg:max-w-[520px] m-auto px-5   md:px-0 py-12 lg:py-0  text-white">
                <h2 className=" text-3xl md:text-4xl lg:text-[2.9rem]  lg:leading-[3.5rem]">
                  The best online coaching platform to support your audience
                </h2>
                <h3 className=" py-8 text-xl">
                  Add more value to your online business through professional
                  one-on-one or small group coaching.
                </h3>
                <div>
                  <div>
                    <form>
                      <label>Enter your email:</label>
                      <div className=" flex flex-col md:flex-row gap-6 pt-2">
                        <div className=" md:max-w-[520px] lg:max-w-[300px] w-full">
                          <input
                            type="email"
                            placeholder="hello@email.com"
                            className="  w-full py-4 pl-4 placeholder:text-[1.2rem] outline-goal"
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
                  </div>
                  <p className=" lg:max-w-[300px] text-[0.8rem] pt-2">
                    *By submitting your email address, you agree to Teachable's{" "}
                    <a href="#/" className=" underline">
                      Terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#/" className=" underline">
                      Privacy Policy.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={pic70} alt="" className="  h-full" />
            </div>
          </div>
        </div>
      </section>
      <section className=" two">
        <div className=" py-24 lg:py-36 bg-cream">
          <div className=" text-center  max-w-[350px] md:max-w-[700px] lg:max-w-no m-auto">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-[350]">
              Easily create a digital coaching business
            </h2>
            <h3 className=" lg:text-xl py-12">
              Enrich your online business with high-value virtual coaching
              products. Host private or small group coaching sessions in three
              simple steps.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:max-w-no m-auto place-items-center lg:place-items-start  md:max-w-[750px] gap-6 px-4  md:px-0">
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2">Step 1</h2>
              <h3 className=" py-8 text-xl md:text-2xl">
                Create your coaching product
              </h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Create, sell, and manage all aspects of your coaching business
                on Teachable. Sell your digital coaching services solo or
                alongside your course or digital download.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2">Step 2</h2>
              <h3 className=" py-8 text-xl md:text-2xl">Upload your content</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Customize content based on your audience’s needs. Create
                milestones, schedule meetings, set-up video calls, send messages
                and files, and more with coaching at Teachable.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2">Step 3</h2>
              <h3 className=" py-8 text-xl md:text-2xl">Customize and sell</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Offer a professional learning experience to your audience with
                our easy-to-use, customizable sales page.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className=" three">
        <div className=" py-10 lg:py-20 bg-gap text-white">
          <div className=" text-center px-5 lg:px-0">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl">
              Features for all types of coaching
            </h2>
            <h3 className=" text-[1.15rem] py-12">
              Building or scaling your online business is easy with these
              convenient coaching tools.
            </h3>
          </div>
          <div className=" max-w-no m-auto px-5 lg:px-0">
            <div className=" flex flex-col md:flex-col-reverse lg:flex-row justify-around items-center pb-16">
              <div className=" pt-8">
                <img
                  src={pic71}
                  alt=""
                  className=" w-[520px] md:w-[680px] lg:w-[520px]"
                />
              </div>
              <div className=" max-w-[520px] md:max-w-[700px] lg:max-w-[460px] pt-8">
                <h2 className=" text-2xl">Payment processing and more</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Teachable:pay is an automated way to get paid, manage payouts,
                  and sell more confidently. Get a simple, reliable checkout
                  system, fraud protection, tax-inclusive pricing, global
                  currency conversion, automatic payouts, and more. Plus, enjoy
                  zero transaction fees on Pro and Business plans.{" "}
                </h3>
                <h2 className=" text-2xl">A personal touch</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Our effortless drag-and-drop builder and customizable
                  templates mean you can personalize your coaching products to
                  align with your style and branding. Plus, you can easily
                  manage, send assignments and files, schedule appointments, and
                  keep your clients on track with their goals.
                </h3>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row justify-around items-center">
              <div className=" lg:max-w-[460px]  md:max-w-[700px] max-w-[520px] pb-8">
                <h2 className=" text-2xl">Scale made easy</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  With an average price of over $200, digital coaching services
                  are a powerful way to grow your revenue alongside your course
                  or digital downloads. Our built-in upsell and order bump
                  features allow you to market your services to maximize your
                  earning potential.
                </h3>
                <h2 className=" text-2xl">Coach with care</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Who and how you coach is up to you. Our customizable intake
                  block and page editor give you the power to control who you
                  onboard as a client. Deepen your audience experience and coach
                  on your terms.
                </h3>
              </div>
              <div>
                <img
                  src={pic72}
                  alt=""
                  className="  w-[520px] md:w-[680px] lg:w-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" four">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" text-center text-gap ma-w-[520px] lg:max-w-yh px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-[400]">
              Start coaching online today
            </h2>
            <h3 className=" text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-6 font-[600]">
              Our best-in-class features make creating, selling, and managing
              your coaching business a breeze.
            </h3>
            <div className=" pt-8 lg:pt-16">
              <button className=" bg-brown text-white py-3 px-6 lg:px-8 rounded-md">
                <a href="#/">Start for free</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className=" py-8 lg:py-24 bg-cream">
          <div className=" text-center md-max-w-[700px] lg:max-w-yh max-w-[500px] m-auto px-5 md:px-0">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl">
              Coach spotlight
            </h2>
            <h3 className=" py-8 lg:py-16">
              Meet some professional coaches within the Teachable community and
              explore their online coaching businesses.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-nice lg:max-w-no m-auto gap-12 place-items-center px-6">
            <div className=" max-w-[360px]  h-full bg-white ">
              <div>
                <img src={pic73} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">Fitness Bootcamp</h1>
                <p className=" pb-24">
                  Greg started out as a personal trainer, but knew he didn’t
                  want to stop there. With his experience as a trainer and
                  researcher, he launched a fitness course online.m.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pt-10">
                <a href="#/" className=" underline">
                  See it in action
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white ">
              <div>
                <img src={pic74} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">UAV Coach</h1>
                <p className=" pb-24">
                  With more than 40,000 students, UAV Coach’s signature drone
                  training course helps students pass their FAA certification
                  exam.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pt-10">
                <a href="#/" className=" underline">
                  See it in action
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white ">
              <div>
                <img src={pic75} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">A-Levels Tutoring</h1>
                <p className=" pb-24">
                  Why confine learning to in-person classes that require upfront
                  rental costs for classroom space? With online courses,
                  Tailored Tutors helps students ace your A-level exams from
                  anywhere; and you can do the same.
                </p>
              </div>
              <div className="  relative bottom-[10px]  px-4 gap-6  pb-3">
                <a href="#/" className=" underline  ">
                  See it in action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" six">
        <div className=" py-14 bg-white">
          <div className=" text-center">
            <h1 className="  text-3xl lg:text-5xl">FAQ</h1>
          </div>
          <div className=" max-w-sit md:max-w-nice lg:max-w-[900px] m-auto px-6 ">
            <ul>
              {!isAnswerOpen ? (
                <li className=" pt-8 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isOpen}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Why should I offer coaching on Teachable?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Offering online coaching programs is a great way to add
                        even more value to your online course and digital
                        download offerings. We help you create professional
                        coaching products to grow or scale your business—plus
                        launch a coaching website that supports your clients.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-8  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isClose}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      Why should I offer coaching on Teachable?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Offering online coaching programs is a great way to add
                        even more value to your online course and digital
                        download offerings. We help you create professional
                        coaching products to grow or scale your business—plus
                        launch a coaching website that supports your clients.
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isLock ? (
                <li className=" pt-8 border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isTry}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      What type of coaching can I sell?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        With Teachable, you can easily create one-on-one and
                        group coaching products. Our no-code platform allows you
                        to create milestones to schedule meetings, set-up video
                        calls, send messages and files, and more.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-8  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isTime}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      What type of coaching can I sell?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        With Teachable, you can easily create one-on-one and
                        group coaching products. Our no-code platform allows you
                        to create milestones to schedule meetings, set-up video
                        calls, send messages and files, and more..
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isMind ? (
                <li className=" pt-8  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isApp}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      How many coaching products can I sell on a free plan?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        You can create and sell one coaching product when you
                        join for free. Our Basic, Pro and Business plans offer
                        unlimited coaching products. View our pricing plans
                        here.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-8  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isAlt}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      How many coaching products can I sell on a free plan?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        You can create and sell one coaching product when you
                        join for free. Our Basic, Pro and Business plans offer
                        unlimited coaching products. View our pricing plans
                        here.
                      </p>
                    </li>
                  </div>
                </li>
              )}

              {!isNice ? (
                <li className=" pt-8  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isOK}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      What if I've never sold something online before?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Don’t worry, you’ve come to the right place. Get started
                        on our free plan, and we’ll guide you through our
                        easy-to-use platform, so you can feel confident about
                        starting your own online coaching service.
                      </p>
                    </li>
                  </div>
                </li>
              ) : (
                <li className=" pt-8  border-b border-black pb-6">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={isNotOk}
                  >
                    <h1 className="  text-xl md:text-2xl lg:text-3xl  font-[350]">
                      What if I've never sold something online before?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem]   md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Don’t worry, you’ve come to the right place. Get started
                        on our free plan, and we’ll guide you through our
                        easy-to-use platform, so you can feel confident about
                        starting your own online coaching service..
                      </p>
                    </li>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className="seven">
        <div className=" bg-lemon">
          <div className=" text-center text-brown ma-w-[520px] lg:max-w-yh px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-[400]">
              Resources for coaches of all levels
            </h2>
            <h3 className=" text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-6 font-[600]">
              No matter where you are in your coaching journey, we can offer
              support.
            </h3>
          </div>
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
                image={pic78}
                name={"Jen W., Digital Scraper"}
              ></Carousel>
            </SwiperSlide>

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic76}
                name={"Edward Z., Excellence Above"}
              ></Carousel>
            </SwiperSlide>

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic77}
                name={"Christine Roebuck of Live my Life Debt Free"}
              ></Carousel>
            </SwiperSlide>

            <div className=" w-full lg:w-0  absolute lg:right-24 lg:top-[480px] lg:p-12  lg:space-y-5 left-0 lg:left-auto">
              <div className="swiper-pagination lg:gap-10 block  lg:flex flex-col lg:justify-between "></div>
            </div>
          </Swiper>
        </div>
      </section>
      <section className=" eight">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" text-center text-brown ma-w-[520px] lg:max-w-yh px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-[400]">
              Create your professional coaching product
            </h2>
            <h3 className=" text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-6 font-[600]">
              Get started building or scaling the online business of your
              dreams.
            </h3>
            <div className=" pt-8 lg:pt-16">
              <button className=" bg-brown text-white py-3 px-6 lg:px-8 rounded-md">
                <a href="#/">Start for free</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
