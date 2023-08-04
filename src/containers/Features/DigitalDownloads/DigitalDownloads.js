import pic103 from "../../../img/img103.webp";
import pic104 from "../../../img/img104.webp";
import pic105 from "../../../img/img105.gif";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
const DigitalDownloads = () => {
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
        <div className=" bg-goal text-black py-12 lg:py-16">
          <div className=" flex flex-col lg:flex-row items-center lg:max-w-[1150px] m-auto px-4 lg:px-0 justify-around">
            <div className=" max-w-[500px] md:max-w-[700px] lg:max-w-[480px]">
              <h2 className=" text-4xl  lg:text-5xl pb-8">
                Digital downloads: The simplest way to sell your knowledge
              </h2>

              <p className=" py-3">
                Start your knowledge business, grow your audience, or add a new
                revenue stream—all with digital downloads on Teachable.
              </p>
              <div className=" pt-2">
                <button className=" bg-brown text-white py-3 px-6 lg:py-5 lg:px-8 rounded-md">
                  <a href="#/">Join for free</a>
                </button>
              </div>
            </div>
            <div>
              <img src={pic103} alt="" className=" w-full lg:w-[540px]" />
            </div>
          </div>
        </div>
      </section>
      <section className="two">
        <div className=" py-12 lg:py-20 text-white bg-brown">
          <div className=" flex md:max-w-[700px] lg:max-w-[1200px] m-auto justify-between lg:items-center flex-col lg:flex-row  px-8 ">
            <div className="">
              <h2 className=" text-4xl md:text-5xl pb-8">
                Sell just about anything
              </h2>
              <div className=" marker:max-w-[520px] lg:max-w-[500px]">
                <p className=" text-xl pt-8">
                  With digital downloads on Teachable, your selling potential is
                  limitless. Create, upload, and sell:
                </p>
                <ul className=" pl-8  list-disc ">
                  <li className="  py-2 text-xl">Podcasts</li>
                  <li className="  py-2 text-xl">Ebooks</li>
                  <li className=" py-2 text-xl">How-to guides</li>
                  <li className="  py-2 text-xl">How-to guides</li>
                  <li className="  py-2 text-xl">Newsletters</li>
                  <li className="  py-2 text-xl">Music and audio</li>
                  <li className="  py-2 text-xl">Spreadsheets</li>
                  <li className="  py-2 text-xl">And so much more</li>
                </ul>
              </div>
            </div>
            <div className=" hidden md:flex pt-8 lg:pt-0">
              <img src={pic104} alt="" className=" md:w-[680px]  h-[800px] " />
            </div>
          </div>
        </div>
      </section>
      <section className=" three">
        <div className=" py-12 lg:py-20 text-white bg-gap">
          <div className=" text-center max-w-[300px] md:max-w-[700px] lg:max-w-yh m-auto">
            <h2 className=" text-3xl md:text4xl lg:text-5xl">
              The perfect place to start
            </h2>
            <h3 className=" text-2xl md:text-3xl lg:text-4xl py-8 lg:py-16">
              Here’s how digital downloads can help grow your business.
            </h3>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[800px] lg:max-w-[1200px] m-auto place-items-center md:place-items-start gap-8">
            <div className=" lg:max-w-[210px] max-w-[350px]">
              <h3 className=" text-[1.35rem] pb-5">Start small</h3>
              <h4 className=" text-[1rem]">
                Test out potential interest in your knowledge business and see
                what works by selling a digital download.
              </h4>
            </div>
            <div className=" lg:max-w-[210px] max-w-[350px]">
              <h3 className=" text-[1.35rem] pb-5">Grow your audience</h3>
              <h4 className=" text-[1rem]">
                Create a digital download and start selling bite-sized content
                to attract new students to your business—or offer for free as a
                lead magnet.
              </h4>
            </div>
            <div className=" lg:max-w-[210px] max-w-[350px]">
              <h3 className=" text-[1.35rem] pb-5">
                Add value to your existing products
              </h3>
              <h4 className=" text-[1rem]">
                Offer digital downloads alongside your online course or coaching
                product. Or use digital downloads as order bumps, bundles, or
                upsells to boost your bottom line.
              </h4>
            </div>
            <div className=" lg:max-w-[210px] max-w-[350px]">
              <h3 className=" text-[1.35rem] pb-5">Monetize in new ways</h3>
              <h4 className=" text-[1rem]">
                Expand your revenue streams and capture more sales with ebooks,
                podcasts, how-to guides, webinars, and more.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className=" four">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" text-center text-brown max-w-[520px] md:max-w-[700px]  lg:max-w-[1200px] px-6 m-auto">
            <h2 className="  text-4xl  lg:text-5xl font-[400]">
              Try us out for free
            </h2>
            <h3 className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] pt-6 font-[400]">
              Upload your first download, create your first course, sell them
              together as a bundle—you can do any (or all) of that on a free
              plan.
            </h3>
            <div className=" pt-8 lg:pt-16">
              <button className=" bg-brown text-white py-3 lg:py-5 px-6 lg:px-8 rounded-md">
                <a href="#/">Join for free</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className=" py-12 lg:py-20">
          <div className=" lg:max-w-no m-auto">
            <div className=" text-center max-w-[400px] md:max-w-[700px] lg:max-w-no m-auto">
              <h2 className=" text-4xl lg:text-5xl font-[350]">
                {" "}
                Every journey needs a guide—we’re yours
              </h2>
              <h3 className=" text-4xl leading-[3rem]   font-[350] py-12 lg:py-16">
                Teachable is the best platform for sharing your knowledge with
                confidence. And with the ability to sell online courses,
                coaching sessions, and digital downloads in one place, you get
                the best of it all:
              </h3>
            </div>
            <div className=" ">
              <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[400px] md:max-w-[700px] lg:max-w-no m-auto  gap-6">
                <li>
                  <div className=" flex items-center gap-3">
                    <IoCheckmarkCircleOutline className=" text-goal text-2xl" />
                    <p className="text-xl"> High-quality student experiences</p>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-3">
                    <IoCheckmarkCircleOutline className=" text-goal text-2xl" />
                    <p className="text-xl">Flexibility to sell what you want</p>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-3">
                    <IoCheckmarkCircleOutline className=" text-goal text-2xl" />
                    <p className="text-xl">
                      {" "}
                      Power to grow your earning potential
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" six">
        <div className=" bg-cream py-14 lg:py-28">
          <div className=" text-center">
            <h2 className=" text-4xl lg:text-5xl font-[350] pb-4 lg:pb-8">
              Sell anything in minutes
            </h2>
            <h3 className=" text-[1.15rem] pt-4 lg:pt-8 ">
              {" "}
              Upload a file, set a price, and start selling fast—simple as that.
            </h3>
          </div>
          <div className=" max-w-no m-auto py-16 lg:py-36">
            <img src={pic105} alt="" className=" lg:w-[1150px]" />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:max-w-no m-auto place-items-center lg:place-items-start  md:max-w-[750px] gap-6 px-4  md:px-0">
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2"> 1</h2>
              <h4 className="  text-[1rem] md:text-[1.1rem] pt-8">
                Click <span className=" font-bold">Create New Download</span>{" "}
                from your Teachable admin.
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2"> 2</h2>
              <h4 className="   text-[1rem] md:text-[1.1rem] pt-8">
                Fill out some information—product name, category, description,
                and thumbnail—and hit <span className=" font-bold">Save.</span>
              </h4>
            </div>
            <div className=" max-w-[350px]">
              <h2 className=" border-b-2 border-black pb-2"> 3</h2>
              <h4 className="  text-[1rem] md:text-[1.1rem] pt-8">
                Add your content (up to five files per download) and click{" "}
                <span className=" font-bold">Publish.</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className=" seven">
        <div className=" py-14 bg-white">
          <div className=" text-center">
            <h1 className="  text-3xl lg:text-5xl">Your questions, answered</h1>
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
      <section className=" eight">
        <div className=" bg-goal py-12 lg:py-24">
          <div className=" text-center text-brown max-w-[520px] md:max-w-[700px]  lg:max-w-[1200px] px-6 m-auto">
            <h2 className=" text-4xl  lg:text-5xl font-[400]">
              Sell confidently on Teachable
            </h2>
            <h3 className=" text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] pt-6 font-[400]">
              Digital downloads, courses, and coaching—all in one place. With
              industry-leading support and fraud protection.
            </h3>
            <div className=" pt-8 lg:pt-16">
              <button className=" bg-brown text-white py-3 lg:py-5 px-6 lg:px-8 rounded-md">
                <a href="#/">Join for free</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalDownloads;
