import React from "react";
import pic50 from "../../../img/img50.svg";
import pic51 from "../../../img/img51.svg";
import pic52 from "../../../img/img52.svg";
import pic53 from "../../../img/img53.svg";
import pic54 from "../../../img/img54.svg";
import pic56 from "../../../img/img56.webp";
import pic57 from "../../../img/img57.webp";
import pic58 from "../../../img/img58.webp";
import pic59 from "../../../img/img59.webp";
import pic60 from "../../../img/img60.webp";
import pic61 from "../../../img/img61.webp";
import pic62 from "../../../img/img62.webp";
import pic63 from "../../../img/img63.webp";
import pic64 from "../../../img/img64.webp";
import pic65 from "../../../img/img65.webp";

const Examples = () => {
  return (
    <div>
      <div className=" bg-cream">
        <div className=" lg:py-16 py-6">
          <div className=" max-w-[520px] md:max-w-[700px] px-3  lg:max-w-[1180px] m-auto py-6 lg:py-10">
            <h1 className=" text-3xl md:text-4xl font-[350] text-brown pb-6 lg:pb-12">
              The best online courses live on Teachable. From passion projects
              to multi-million dollar businesses, entrepreneurs trust us to help
              build and grow their knowledge businesses. Ready to join?
            </h1>
            <div>
              <button className=" bg-goal py-3 px-6 lg:py-4 lg:px-9 rounded">
                <a href="#/" className=" text-[1.2rem]">
                  Start For Free
                </a>
              </button>
            </div>
          </div>
          <div className="  max-w-[520px] md:max-w-[1100px] m-auto  text-center px-3 md:px-0">
            <p className=" text-[1.2rem] lg:pt-12 text-brown ">
              Market leaders use Teachable to enrich their brands and
              businesses.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10 pt-8 ">
              <img src={pic50} alt="" className=" w-[190px]" />
              <img src={pic51} alt="" className=" w-28" />
              <img src={pic52} alt="" className=" w-[100px]" />
              <img src={pic53} alt="" className=" w-[100px]" />
              <img src={pic54} alt="" className="w-[140px] " />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" pt-16 pb-8">
          <div className="  pb-24">
            <ul className=" flex flex-col md:flex-row lg:max-w-ok m-auto justify-around max-w-[800px] items-center">
              <li className=" text-2xl">Arts</li>
              <li className=" text-2xl">Health</li>
              <li className=" text-2xl">Niche</li>
              <li className=" text-2xl">Academics</li>
              <li className=" text-2xl">Membership</li>
              <li className=" text-2xl">Buisness</li>
            </ul>
          </div>
          <div>
            <div className=" max-w-[520px] md:max-w-[700px] m-auto  text-center px-3 lg:px-0">
              <h1 className=" text-5xl pb-12">Arts</h1>
              <p className=" text-xl md:text-[1.37rem]  pb-24">
                Share your artistic skills and build a business doing what you
                love—whether it be watercolor, lettering, cake decoration, or
                anything else you can dream up.
              </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-nice lg:max-w-no m-auto gap-8 place-items-center px-6">
              <div className=" max-w-[360px]  h-full bg-cream hover:border-2 border-black transition ease-out duration-300 cursor-pointer">
                <div>
                  <img src={pic56} alt="" className=" w-[360px] " />
                </div>
                <div className=" px-4">
                  <h1 className=" pt-4 pb-6 text-2xl">Watercolor Painting</h1>
                  <p className=" pb-24">
                    Jump into the vibrant world of watercolor! After getting her
                    start on YouTube, Angela has infused her love of watercolor
                    into an online course membership program.
                  </p>
                </div>
                <div className=" flex items-center relative bottom-[10px]  px-4 gap-6 pb-3">
                  <img src={pic61} alt="" />
                  <p>Angela Fehr</p>
                </div>
              </div>

              <div className=" max-w-[360px] h-full bg-cream  hover:border-2 border-black transition ease-out duration-300 cursor-pointer">
                <div>
                  <img src={pic57} alt="" className=" w-[360px] " />
                </div>
                <div className=" px-4">
                  <h1 className=" pt-4 pb-6 text-2xl">Hand Lettering</h1>
                  <p className=" pb-24">
                    What started out as a hobby grew into a freelance career in
                    illustration and lettering. Today, Lauren not only works
                    with big clients, she also teaches her skills online.
                  </p>
                </div>
                <div className=" flex items-center relative bottom-[10px] px-4 gap-6 pb-3">
                  <img src={pic62} alt="" />
                  <p>Lauren Hom</p>
                </div>
              </div>

              <div className=" max-w-[360px]   h-full bg-cream  hover:border-2 border-black transition ease-out duration-300 cursor-pointer">
                <div>
                  <img src={pic58} alt="" className=" w-[360px] " />
                </div>
                <div className=" px-4">
                  <h1 className=" pt-4 pb-6 text-2xl">Acrylic pouring</h1>
                  <p className=" pb-20">
                    Deby’s love for acrylic pouring has inspired her to not only
                    create as an artist, but also to share it with others via
                    her blog, community groups, books and an online course.
                  </p>
                </div>
                <div className=" flex items-center relative bottom-[10px] px-4 gap-6 pb-3">
                  <img src={pic63} alt="" />
                  <p>Deby Coles</p>
                </div>
              </div>

              <div className=" max-w-[360px]  h-full bg-cream  hover:border-2 border-black transition ease-out duration-300 cursor-pointer">
                <div>
                  <img src={pic59} alt="" className=" w-[360px] " />
                </div>
                <div className=" px-4">
                  <h1 className=" pt-4 pb-6 text-2xl">Make Fabulous Cake</h1>
                  <p className=" pb-24">
                    Darlene’s cake decorating adventure started when she first
                    became a mom. Now, she's a pastry chef, blogger, and online
                    course creator.
                  </p>
                </div>
                <div className=" flex items-center relative bottom-[10px]  px-4 gap-6 pb-3">
                  <img src={pic64} alt="" />
                  <p>Darlene Abarquez</p>
                </div>
              </div>

              <div className=" max-w-[360px]   h-full bg-cream  hover:border-2 border-black transition ease-out duration-300 cursor-pointer">
                <div>
                  <img src={pic60} alt="" className=" w-[360px] " />
                </div>
                <div className=" px-4">
                  <h1 className=" pt-4 pb-6 text-2xl">Paper Flower</h1>
                  <p className=" pb-24">
                    With a passion to spread the love and joy of paper flowers,
                    Catherine launched her online school Studio BOUQ to offer
                    courses in creating realistic flowers.
                  </p>
                </div>
                <div className=" flex items-center relative bottom-[10px] px-4 gap-6 pb-3">
                  <img src={pic65} alt="" />
                  <p>Catherine Oxley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-goal">
        <div className=" py-20">
          <div className=" text-center max-w-[500px] md:max-w-nice lg:max-w-no m-auto">
            <h1 className="text-4xl lg:text-5xl font-[350]">
              Start now and turn your knowledge into a profitable online course
            </h1>
            <div className=" pt-6  lg:pt-16">
              <button className=" bg-brown text-white py-4 px-8 rounded">
                <a href="#/">Start for free</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
