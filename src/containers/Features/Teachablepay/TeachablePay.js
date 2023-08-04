import React from "react";
import pic88 from "../../../img/img88.webp";
import pic89 from "../../../img/img89.webp";
import pic90 from "../../../img/img90.webp";
import pic91 from "../../../img/img91.webp";
import pic92 from "../../../img/img92.webp";
import pic93 from "../../../img/img93.webp";
import pic94 from "../../../img/img94.png";
import pic95 from "../../../img/img95.webp";
import pic96 from "../../../img/img96.webp";
import pic97 from "../../../img/img97.webp";
import pic98 from "../../../img/img98.webp";
import pic99 from "../../../img/img99.webp";
import pic100 from "../../../img/img100.webp";
import pic101 from "../../../img/img101.webp";
import pic102 from "../../../img/img102.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Carousel } from "../../../components";

import { Pagination, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const TeachablePay = () => {
  return (
    <div>
      <section className=" one">
        <div className=" bg-gap text-white py-12 lg:py-16">
          <div className=" flex flex-col lg:flex-row items-center lg:max-w-[1150px] m-auto px-4 lg:px-0">
            <div className=" max-w-[500px] md:max-w-[700px] lg:max-w-[480px]">
              <h2 className=" text-4xl  lg:text-6xl pb-8">teachable:pay</h2>
              <h3 className=" text-2xl">Sell confidently, earn powerfully</h3>
              <p className=" py-3">
                Learn how Teachable automates, streamlines, and scales your
                business—so you can spend more time transforming students’ lives
                with the power of knowledge.
              </p>
              <div>
                <button className=" bg-goal text-black py-3 px-6 rounded-md">
                  <a href="#/">Start for free</a>
                </button>
              </div>
            </div>
            <div>
              <img src={pic88} alt="" className=" w-full lg:w-[700px]" />
            </div>
          </div>
        </div>
      </section>
      <section className=" two">
        <div className=" py-24 lg:py-36">
          <div className=" text-center  max-w-[350px] md:max-w-[700px] lg:max-w-yh m-auto">
            <h2 className=" text-3xl md:text-4xl lg:text-6xl font-[350]">
              Your business, simplified
            </h2>
            <h3 className=" text-2xl md:text-[2.1rem] md:leading-[3rem] lg:leading-[4rem] lg:text-4xl py-12">
              The automated way to get paid, manage payouts, and
              sellconfidently. No integrations necessary.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:max-w-no m-auto place-items-center lg:place-items-start  md:max-w-[750px] gap-6 px-4  md:px-0">
            <div>
              <div>
                <img src={pic89} alt="" className=" w-80" />
              </div>
              <div className=" max-w-[300px]">
                <h2 className="  text-2xl font-[350] pb-2">
                  Peace of mind, automated
                </h2>
                <h3 className=" py-6">
                  Reduce risk and protect your bottom line with fraud monitoring
                  and chargeback support.
                </h3>
                <h4 className=" text-[0.9rem] md:text-[1rem]">
                  Save time with automated sales tax calculation, collection,
                  and remittance and filing.*
                </h4>
              </div>
            </div>
            <div>
              <div>
                <img src={pic90} alt="" className=" w-80" />
              </div>
              <div className=" max-w-[300px]">
                <h2 className="  text-2xl font-[350] pb-2">
                  Sell confidently across the globe
                </h2>
                <h3 className=" py-6">
                  Boost checkout conversion up to 22% in global markets with
                  Teachable's OnePrice tax-inclusive pricing option, available
                  only on teachable:pay.
                </h3>
                <h4 className=" text-[0.9rem] md:text-[1rem]">
                  Drive sales with order bumps, coupons, and more.
                </h4>
              </div>
            </div>
            <div>
              <div>
                <img src={pic91} alt="" className=" w-80" />
              </div>
              <div className=" max-w-[300px]">
                <h2 className="  text-2xl font-[350] pb-2">
                  Flexibility that meets your needs
                </h2>
                <h3 className=" py-6">
                  Choose your ideal payout schedule: daily, weekly, or monthly.
                </h3>
                <h4 className=" text-[0.9rem] md:text-[1rem]">
                  Accept all major payment methods,including debit card, credit
                  card, Apple Pay, and Google Pay.
                </h4>
              </div>
            </div>
          </div>
          <div className=" text-center pt-12 mx-3">
            <p>
              *Please read our{" "}
              <a href="#/" className=" underline">
                {" "}
                Knowledge Base{" "}
              </a>
              for more details on tax handling.
            </p>
          </div>
        </div>
      </section>
      <section className=" three">
        <div className=" py-10 lg:py-20 bg-brown text-white">
          <div className=" text-center px-5 lg:px-0">
            <h2 className="text-4xl  lg:text-6xl ">
              More than a payment gateway
            </h2>
            <h3 className=" text-3xl md:text-4xl py-12">
              {" "}
              It’s your one-stop shop for worry-free business management.
            </h3>
          </div>
          <div className=" max-w-no m-auto px-5 lg:px-0">
            <div className=" flex flex-col md:flex-col-reverse lg:flex-row justify-around items-center pb-16">
              <div className=" pt-8  hidden md:flex">
                <img
                  src={pic92}
                  alt=""
                  className=" w-[520px] md:w-[680px] lg:w-[580px]"
                />
              </div>
              <div className=" max-w-[520px] md:max-w-[700px] lg:max-w-[460px] pt-8">
                <h2 className=" text-2xl">
                  Ready for your first sale in minutes
                </h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Teachable:pay comes with your account, so all you have to do
                  is take a few minutes to set it up.{" "}
                </h3>
                <h2 className=" text-2xl">
                  Simple, reliable and powerful checkout
                </h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Our team is constantly focused on enhancing the student
                  checkout experience, improving conversion, and adding
                  flexibility and sales capabilities.
                </h3>
                <h2 className=" text-2xl">Fraud protection</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  We help you handle chargebacks and prevent fraudulent
                  purchases to protect your bottom line.
                </h3>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row justify-around items-center">
              <div className=" lg:max-w-[460px]  md:max-w-[700px] max-w-[520px] pb-8">
                <h2 className=" text-2xl">Taking care of taxes</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Teachable calculates, collects, and remits sales taxes on your
                  behalf, so you don't have to deal with additional accounting
                  work every quarter.*
                </h3>
                <h2 className=" text-2xl">Automatic payouts for your team</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  When you enable BackOffice for an additional 2% transaction
                  fee we automate commission payments monthly for your
                  collaborators.
                </h3>
                <h2 className=" text-2xl">Tax-inclusive pricing</h2>
                <h3 className=" text-[1.15rem] pt-3 pb-6">
                  Sell confidently into global markets and boost global checkout
                  conversion up to 22% with tax-inclusive pricing.
                </h3>
              </div>
              <div className=" hidden md:flex">
                <img
                  src={pic93}
                  alt=""
                  className="  w-[520px] md:w-[680px] lg:w-[580px]"
                />
              </div>
            </div>
          </div>
          <div className=" text-center mx-5 md:mx-0">
            <div className="  py-10 lg:py-16">
              <button className=" bg-goal py-3 px-6 lg:py-4 lg:px-6 rounded-md text-xl text-black">
                <a href="#/">Start for free</a>
              </button>
            </div>
            <p className=" text-[0.9rem]">
              *Please read our{" "}
              <a href="#/" className=" underline">
                Knowledge Base
              </a>{" "}
              for more details on tax handling in applicable jurisdictions.
            </p>
          </div>
        </div>
      </section>
      <section className=" four">
        <div className=" py-8 lg:py-16 ">
          <div className=" text-center lg:max-w-[800px] max-w-[520px] m-auto">
            <h2 className=" text-4xl lg:text-6xl  pb-8 lg:pb-16">
              teachable:pay{" "}
              <span className=" font-[300]">out-earns the competiton</span>
            </h2>
          </div>
          <div className="  lg:max-w-no m-auto pt-10 lg:pt-20">
            <img src={pic94} alt="" />
          </div>
        </div>
      </section>
      <section className=" five">
        <div className=" py-8 md:py-20 bg-cream">
          <div className=" text-center mx-6">
            <h2 className=" text-4xl lg:text-5xl text-gap pb-14">
              Get started in two minutes
            </h2>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:max-w-no place-items-center md:place-items-start gap-14 md:gap-6 md:max-w-[700px] m-auto">
            <div className=" max-w-[320px] lg:max-w-[237px] text-center">
              <div>
                <img src={pic95} alt="" className=" w-80" />
              </div>
              <div className=" pt-4">
                <h4>Log in to Teachable and go into payment settings.</h4>
              </div>
            </div>
            <div className=" max-w-[320px] lg:max-w-[237px] text-center">
              <div>
                <img src={pic96} alt="" className=" w-80" />
              </div>
              <div className=" pt-4">
                <h4>
                  Provide your bank account payout information and currency.
                </h4>
              </div>
            </div>
            <div className=" max-w-[320px] lg:max-w-[237px] text-center">
              <div>
                <img src={pic97} alt="" className=" w-80" />
              </div>
              <div className=" pt-4">
                <h4>Select your payout frequency.</h4>
              </div>
            </div>
            <div className=" max-w-[320px] lg:max-w-[237px] text-center">
              <div>
                <img src={pic98} alt="" className=" w-80" />
              </div>
              <div className=" pt-4">
                <h4>
                  Automate payouts and tax filings for collaborators and add
                  PayPal as a payment option for students.
                </h4>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <h2 className=" text-3xl lg:text-4xl text-goal pt-14">
              Confirm and you're done!
            </h2>
          </div>
        </div>
      </section>
      <section className=" six">
        <div className=" bg-gap text-white">
          <div className=" lg:max-w-no m-auto lg:py-28 py-8 max-w-sit md:max-w-nice px-3">
            <p className=" text-5xl">" </p>
            <h1 className=" text-4xl lg:text-5xl lg:leading-[4rem] font-[350] pt-3 pb-10">
              By using teachable:pay, I just save so much time and money. Before
              teachable:pay, it was just a lot of stress at the end of every
              quarter, and then, it was costing us quite a bit to pay the
              accountant to do all the filing for us. Anything that can be
              automated so I don't have to do it is heaven to me.”
            </h1>
            <h2 className=" text-xl lg:text-2xl">
              Paige Brunton : SquareSecrets
            </h2>
          </div>
        </div>
      </section>
      <section className=" seven">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" text-center text-brown max-w-[500px] md:max-w-[600px] lg:max-w-[800px] px-6 m-auto">
            <h2 className=" text-3xl md:text-4xl lg:text-6xl font-[400]">
              Make the most out of your money with{" "}
              <span className=" font-[500]">teachable:pay</span>
            </h2>
            <div className=" pt-8 lg:pt-16">
              <button className=" bg-brown text-white py-3 lg:py-4 px-6 lg:px-8 rounded-md">
                <a href="#/">Start for free</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="eight">
        <div className=" bg-lemon">
          <div className=" text-center text-brown ma-w-[520px] lg:max-w-yh px-6 m-auto">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-[400]">
              You have questions, we have answers
            </h2>
            <h3 className=" text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] pt-6 font-[600]">
              Check out these helpful resources to learn more.
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

            <SwiperSlide>
              <Carousel
                head={"Now for some buzz"}
                description={
                  "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                }
                image={pic102}
                name={"Christine Roebuck of Live my Life Debt Free"}
              ></Carousel>
            </SwiperSlide>

            <div className=" w-full lg:w-0  absolute lg:right-24 lg:top-[480px] lg:p-12  lg:space-y-5 left-0 lg:left-auto">
              <div className="swiper-pagination lg:gap-10 block  lg:flex flex-col lg:justify-between "></div>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
export default TeachablePay;
