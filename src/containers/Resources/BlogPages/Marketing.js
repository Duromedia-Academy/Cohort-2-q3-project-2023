import Header from "../../../components/DownloadHeader";
import changeImg from "../../../img/changing-your-mindset-about-money.jpg";
import julia from "../../../img/julia-mccoy-digital-downloads-interview.jpg";
import ROI from "../../../img/what-is-ROI.jpg";
import Quan from "../../../img/WHM-Creator-Interview_Quanisha-1950x1208.webp";
import pricing from "../../../img/pricing-course-994x604.webp";
import Tutor from "../../../img/how-to-become-a-tutor.jpg";
import first from "../../../img/pexels-ekaterina-bolovtsova-5393569-2.jpg";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div className="">
      <Header background="bg-[#21cd9c]" />

      <div className="relative top-[71px] md:static md:top-0 pb-32">
        <div className="bg-[#21cd9c] pt-6 lg:pt-16 lg:flex lg:px-24 lg:h-[70vh]">
          <div className=" text-center flex flex-col gap-6 px-[5%] pb-6 lg:text-start basis-[45%]">
            <h1 className=" text-5xl font-normal lg:text-6xl">Marketing</h1>
            <p className=" text-lg lg:text-xl">
              We don’t shy away from the hard stuff. We’ll bring in experts and
              tackle those practical, tough, and yes, sometimes uncomfortable
              money management
            </p>
            <p className=" text-lg lg:text-xl lg:hover:underline underline-offset-2 cursor-pointer decoration-1">
              Grow your team
            </p>
            <p className=" text-lg lg:text-xl lg:hover:underline underline-offset-2 cursor-pointer decoration-1">
              Small business finance
            </p>
            <p className=" text-lg lg:text-xl lg:hover:underline underline-offset-2 cursor-pointer decoration-1">
              Taxes and payments
            </p>
          </div>
          <div className=" basis-[60%]">
            <img
              className=" lg:relative lg:-bottom-2 w-full"
              src={changeImg}
              alt=""
            />
            <div className=" px-[5%] bg-white block lg:hidden">
              <p className=" text-3xl pt-6 font-light lg:hover:underline underline-offset-4 decoration-1 cursor-pointer lg:text-4xl">
                Change your mindset about money-so you can profit with ease
              </p>
              <p className=" text-xl pt-6">
                by{" "}
                <Link
                  href="#"
                  className=" underline underline-offset-4 decoration-1 lg:hover:no-underline cursor-pointer"
                >
                  Nicole Quintana-Wolf
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className=" pt-6 lg:flex lg:px-24">
          <div className=" px-[5%] border-t border-[#c8e3d8] py-6 col-start-1 col-end-4 lg:border-none lg:px-0 basis-[45%]">
            <img src={julia} alt="" />
            <div className=" flex flex-col gap-4">
              <h1 className=" text-3xl pt-6 font-normal lg:font-light lg:hover:underline underline-offset-4 decoration-1 cursor-pointer lg:text-4xl">
                Julia McCoy on bridging the gap with courses and digital
                downloads
              </h1>
              <p>
                Julie McCoy is using digital downloads to help offer her
                students a taste of her product and gain trust.
              </p>
              <p>
                by{" "}
                <Link
                  className=" underline underline-offset-4 decoration-1 lg:hover:no-underline cursor-pointer"
                  href="#"
                >
                  Nina Godlewski
                </Link>
              </p>
            </div>
          </div>

          <div className=" lg:col-start-4 col-end-8 border-l border-[#c8e3d8] basis-[60%] ">
            <div className=" bg-white hidden lg:block py-8 px-[5%]">
              <p className=" text-3xl pt-6 font-light lg:hover:underline underline-offset-4 decoration-1 cursor-pointer lg:text-4xl">
                Change your mindset about money-so you can profit with ease
              </p>
              <p className=" text-xl pt-6">
                by{" "}
                <Link
                  href="#"
                  className=" underline underline-offset-4 decoration-1 lg:hover:no-underline cursor-pointer"
                >
                  Nicole Quintana-Wolf
                </Link>
              </p>
            </div>

            <div className=" lg:flex ">
              <div className=" px-[5%] border-t border-[#c8e3d8] py-6 ">
                <img src={ROI} alt="" />
                <div className=" flex flex-col gap-4">
                  <h1 className=" text-3xl pt-6 font-normal lg:font-light lg:hover:underline underline-offset-4 decoration-1 cursor-pointer">
                    Julia McCoy on bridging the gap with courses and digital
                    downloads
                  </h1>
                  <p>
                    Julie McCoy is using digital downloads to help offer her
                    students a taste of her product and gain trust.
                  </p>
                  <p>
                    by{" "}
                    <Link
                      className=" underline underline-offset-4 decoration-1 lg:hover:no-underline cursor-pointer"
                      href="#"
                    >
                      Nina Godlewski
                    </Link>
                  </p>
                </div>
              </div>

              <div className=" px-[5%] border-t border-[#c8e3d8] py-6 lg:border-l">
                <div className=" flex flex-col gap-4">
                  <h1 className=" text-3xl pt-6 font-normal lg:font-light lg:hover:underline underline-offset-4 decoration-1 cursor-pointer lg:text-4xl">
                    Julia McCoy on bridging the gap with courses and digital
                    downloads
                  </h1>
                  <p>
                    Learn all the basics of why you need a business bank
                    account.
                  </p>
                  <p>
                    by{" "}
                    <Link
                      className=" underline underline-offset-4 decoration-1 lg:hover:no-underline cursor-pointer"
                      href="#"
                    >
                      Nina Godlewski
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#7499d0] px-[5%] py-[10%] lg:flex lg:px-36 items-center gap-5">
          <div className=" text-center text-white basis-1/2 lg:text-start">
            <h1 className=" text-2xl lg:text-7xl lg:font-light tracking-tight">
              Quanisha Green is helping women own their expertise
            </h1>
            <p className=" py-5 text-lg">
              Quanisha Green, of Black Woman CEO, is helping women own their
              expertise.
            </p>
          </div>
          <div className=" relative basis-1/2">
            <img src={Quan} className=" lg:h-[400px] lg:w-[700px]" alt="" />
            <button className=" bg-[#21cd9c] hover:bg-[#21cd9cd9] px-6 py-3 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Read Article
            </button>
          </div>
        </div>

        <div className=" px-[5%] py-[5%]">
          <h1 className=" text-2xl pt-16 pb-5 lg:text-4xl lg:w-[300px] lg:tracking-wide">
            Increasing your revenue
          </h1>
          <div className=" flex flex-nowrap w-full overflow-auto">
            <div className=" flex flex-row flex-nowrap gap-10 basis-full">
              <div className=" w-[270px] flex flex-col py-5 lg:basis-[30%] lg:pt-16">
                <div className=" border-b border-black pb-1 lg:border-none">
                  <img src={ROI} className=" object-cover h-[300px]" alt="" />
                  <p className=" text-lg pt-4 cursor-pointer">
                    How to sell (almost) anything using Teachable
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>

              <div className=" w-[270px] lg:w-[500px] flex flex-col py-5 lg:py-0">
                <div className=" border-b border-black pb-1 lg:border-none">
                  <img
                    src={ROI}
                    className=" object-cover lg:h-[400px] h-[300px]"
                    alt=""
                  />
                  <p className=" text-lg pt-4 cursor-pointer">
                    How to sell (almost) anything using Teachable
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>

              <div className=" border-y border-[#c8e3d8] flex gap-10 lg:flex-col lg:basis-[30%] lg:gap-2">
                <div className=" w-[270px] flex flex-col py-5 lg:pt-0">
                  <div className=" border-b border-black pb-1 lg:border-none">
                    <img
                      src={ROI}
                      className=" lg:hidden object-cover h-[300px]"
                      alt=""
                    />
                    <p className=" text-lg pt-4 cursor-pointer">
                      How to sell (almost) anything using Teachable
                    </p>
                  </div>
                  <div className="text-lg pt-3">
                    <p>For starters you can begin now...</p>
                    <p>
                      by{" "}
                      <Link href="#" className=" underline underline-offset-2">
                        Eduardo Yi
                      </Link>
                    </p>
                  </div>
                </div>

                <div className=" w-[270px] flex flex-col py-5 border-t border-[#c8e3d8]">
                  <div className=" border-b border-black pb-1 lg:border-none">
                    <img
                      src={ROI}
                      className=" lg:hidden object-cover h-[300px]"
                      alt=""
                    />
                    <p className=" text-lg pt-4 cursor-pointer">
                      Learn to price your Teachable products using our
                      tax-inclusive pricing feature.
                    </p>
                  </div>
                  <div className="text-lg pt-3">
                    <p>
                      Learn to price your Teachable products using our
                      tax-inclusive pricing feature.
                    </p>
                    <p>
                      by{" "}
                      <Link href="#" className=" underline underline-offset-2">
                        Eduardo Yi
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-[5%] py-[5%] max-w-[1000px] mx-auto">
          <div className=" flex flex-col lg:flex-col gap-10 basis-full">
            <div className=" lg:flex gap-7">
              <div className="  flex flex-col py-5 basis-[70%]">
                <div className="">
                  <img
                    src={first}
                    className="  object-cover w-full lg:w-[600px] h-[250px] lg:h-[350px]"
                    alt=""
                  />
                  <p className=" text-lg pt-4 cursor-pointer lg:text-4xl lg:font-light">
                    How to sell (almost) anything using Teachable
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col py-5 basis-[30%]">
                <div className=" ">
                  <img
                    src={Tutor}
                    className=" object-cover w-full h-[250px] lg:h-[350px]"
                    alt=""
                  />
                  <p className=" text-lg pt-4 cursor-pointer">
                    Learn to price your Teachable products using our
                    tax-inclusive pricing feature.
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className=" lg:flex gap-7">
              <div className=" flex flex-col py-5">
                <div className="">
                  <img
                    src={ROI}
                    className=" object-cover w-full h-[250px]"
                    alt=""
                  />
                  <p className=" text-lg pt-4 cursor-pointer">
                    How to sell (almost) anything using Teachable
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col py-5">
                <div className="">
                  <img
                    src={pricing}
                    className=" object-cover w-full h-[250px]"
                    alt=""
                  />
                  <p className=" text-lg pt-4 cursor-pointer">
                    How to sell (almost) anything using Teachable
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col py-5">
                <div className="">
                  <img
                    src={Tutor}
                    className=" object-cover w-full h-[250px]"
                    alt=""
                  />
                  <p className=" text-lg pt-4 cursor-pointer">
                    How to sell (almost) anything using Teachable
                  </p>
                </div>
                <div className="text-lg pt-3">
                  <p>For starters you can begin now...</p>
                  <p>
                    by{" "}
                    <Link href="#" className=" underline underline-offset-2">
                      Eduardo Yi
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <button className=" bg-black text-white cursor-pointer px-6 py-3 rounded-md hover:bg-[#222] ease-in duration-75">
            Load more
          </button>
        </div>

        <ScrollToTop />
      </div>
    </div>
  );
};

export default Marketing;
