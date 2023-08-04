import pic79 from "../../../img/img79.webp";
import pic80 from "../../../img/img80.webp";
import pic81 from "../../../img/img81.webp";
import pic82 from "../../../img/img82.webp";
import pic74 from "../../../img/img74.webp";
import pic83 from "../../../img/img83.webp";
import pic84 from "../../../img/img84.webp";
import pic85 from "../../../img/img85.webp";
import pic86 from "../../../img/img86.webp";
import pic87 from "../../../img/img87.webp";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Carousel } from "../../../components";

import { Pagination, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const OnlineCourse = () => {
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
        <div className=" bg-gap">
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:h-screen ">
            <div className=" flex items-center">
              <div className=" max-w-[520px] md:max-w-[750px]  lg:max-w-[520px] m-auto px-5   md:px-0 py-12 lg:py-0  text-white">
                <h2 className=" text-3xl md:text-4xl lg:text-[2.9rem]  lg:leading-[3.5rem]">
                  The best online course platform for creators, coaches, and
                  teachers.
                </h2>
                <h3 className=" py-8 text-xl">
                  Online courses are an engaging way to scale your digital
                  business and build a lasting source of income.
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
              <img src={pic79} alt="" className="  h-full" />
            </div>
          </div>
        </div>
      </section>
      <section className=" two">
        <div className=" py-24 lg:py-36 bg-cream">
          <div className=" text-center  max-w-[350px] md:max-w-[700px] lg:max-w-no m-auto">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-[350]">
              Own your content and get paid—on your own terms
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
              <h3 className=" py-8 text-xl md:text-2xl">Create your course</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Start building your school and course in minutes with our
                no-code course builder.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2">Step 2</h2>
              <h3 className=" py-8 text-xl md:text-2xl">Upload your content</h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Our simple drag-and-drop builder lets you upload videos, audio,
                templates, guides, and more. It's your content, your way.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2">Step 3</h2>
              <h3 className=" py-8 text-xl md:text-2xl">
                Beautify and brand your school
              </h3>
              <h4 className=" text-[0.9rem] md:text-[1rem]">
                Add a personal touch with our easy-to-use customizations—no tech
                skills necessary.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className=" three">
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
                  src={pic80}
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
                  src={pic81}
                  alt=""
                  className="  w-[520px] md:w-[680px] lg:w-[520px]"
                />
              </div>
            </div>
            <div className=" flex flex-col md:flex-col-reverse lg:flex-row justify-around items-center pb-16">
              <div className=" pt-8">
                <img
                  src={pic82}
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
        </div>
      </section>
      <section className=" four">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" text-center text-brown ma-w-[520px] lg:max-w-no px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-[400]">
              Get started today
            </h2>
            <h3 className=" text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-6 font-[600]">
              Our all-star features make creating a course, connecting to your
              audience, and watching your online business grow seamless.
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
              Course creator spotlight
            </h2>
            <h3 className=" py-8 lg:py-16 lg:text-xl">
              Get inspiration from members of the Teachable community and
              discover their online courses.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-nice lg:max-w-no m-auto gap-12 place-items-center px-6">
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
              <div className=" relative bottom-[10px]  px-4 gap-6 pt-4">
                <a href="#/" className=" underline">
                  See it in action
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white ">
              <div>
                <img src={pic83} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">Music Production</h1>
                <p className=" pb-24">
                  Every week, IO Music Academy hosts livestream courses with
                  some of the world's best music producers. Students can
                  interact and ask questions live or watch recordings at their
                  own pace.
                </p>
              </div>
              <div className=" relative bottom-[10px]  px-4 gap-6 pb-6">
                <a href="#/" className=" underline">
                  See it in action
                </a>
              </div>
            </div>

            <div className=" max-w-[360px]  h-full bg-white  ">
              <div>
                <img src={pic84} alt="" className=" w-[360px] " />
              </div>
              <div className=" px-4">
                <h1 className=" pt-4 pb-6 text-2xl">Yoga</h1>
                <p className=" pb-24">
                  Rachel teaches online courses on the transformative power of
                  yoga for backcare and scoliosis.
                </p>
              </div>
              <div className="  relative bottom-[10px]  px-4 gap-6  pt-10">
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
            <h1 className="  text-3xl lg:text-5xl text-gap">FAQ</h1>
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
                      Why should I sell online courses on Teachable?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Leveraging knowledge products can pave the way for
                        building, growing, and scaling your dream business.
                        Creating a course and selling online is a way to
                        diversify your revenue streams, while giving you control
                        over your content and the learning experiences of your
                        students. Teachable can help you build a course website
                        thanks to our intuitive features and resources for
                        creators and business owners.
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
                      Why should I sell online courses on Teachable?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        Leveraging knowledge products can pave the way for
                        building, growing, and scaling your dream business.
                        Creating a course and selling online is a way to
                        diversify your revenue streams, while giving you control
                        over your content and the learning experiences of your
                        students. Teachable can help you build a course website
                        thanks to our intuitive features and resources for
                        creators and business owners.
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
                      What types of online courses can I sell?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        You can create online courses about virtually
                        anything—the sky's the limit. Your unique perspective,
                        talents, and expertise can guide the way. Meanwhile, our
                        course creation tools and multimedia compatibility allow
                        you to turn your wisdom into accessible online courses
                        that appeal to all learning styles.
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
                      What types of online courses can I sell?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        You can create online courses about virtually
                        anything—the sky's the limit. Your unique perspective,
                        talents, and expertise can guide the way. Meanwhile, our
                        course creation tools and multimedia compatibility allow
                        you to turn your wisdom into accessible online courses
                        that appeal to all learning styles.
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
                      How many online courses can I sell on a free plan?
                    </h1>
                    <BiPlus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="hidden">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        You can create and sell one online course when you join
                        for free. But if you want access to five courses, join a
                        Basic plan on Teachable. Our Pro and Business plans
                        offer unlimited online courses, plus enhanced features
                        like using your own custom domain.
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
                      How many online courses can I sell on a free plan?
                    </h1>
                    <BiMinus className=" cursor-pointer text-2xl" />
                  </div>
                  <div className="">
                    <li>
                      <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                        You can create and sell one online course when you join
                        for free. But if you want access to five courses, join a
                        Basic plan on Teachable. Our Pro and Business plans
                        offer unlimited online courses, plus enhanced features
                        like using your own custom domain.
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
                        starting your own online business.
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
                        starting your own online business.
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
                image={pic85}
                name={"Jen W., Digital Scraper"}
              ></Carousel>
            </SwiperSlide>

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic86}
                name={"Edward Z., Excellence Above"}
              ></Carousel>
            </SwiperSlide>

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic87}
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
        <div className=" bg-goal py-12 lg:py-24 text-brown">
          <div className=" text-center text-brown ma-w-[520px] lg:max-w-yh px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-[400]">
              Create your online course
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

export default OnlineCourse;
