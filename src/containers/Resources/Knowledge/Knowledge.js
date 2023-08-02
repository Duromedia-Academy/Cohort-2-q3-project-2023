import React from "react";
import pic19 from "../../../img/img19.webp";
import pic24 from "../../../img/img24.svg";
import pic23 from "../../../img/img23.webp";
import pic22 from "../../../img/img22.webp";
import pic21 from "../../../img/img21.webp";
import pic20 from "../../../img/img20.webp";
import pic25 from "../../../img/img25.png";
import pic26 from "../../../img/img26.png";
import pic27 from "../../../img/img27.png";
import pic28 from "../../../img/img28.png";
import pic29 from "../../../img/img29.png";
import pic30 from "../../../img/img30.png";
import pic31 from "../../../img/img31.png";
import pic32 from "../../../img/img32.png";
import pic33 from "../../../img/img33.png";
const Knowledge = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${pic19})` }}
        className=" min-h-[50vh] md:min-h-[70vh] lg:min-h-screen bg-blend-overlay bg-cover bg-black bg-opacity-40 flex flex-col justify-end pb-12 md:pb-16 lg:pb-24 "
      >
        <div className="">
          <div className="md:max-w-[700px] max-w-[500px] px-3 md:px-0 text-center m-auto ">
            <div>
              <h1 className=" text-white lg:text-[3.5rem] md:text-[2.5rem] text-[1.8rem] pb-4">
                What can we help you with?
              </h1>
            </div>
            <div>
              <form>
                <div className=" flex  gap-6  ">
                  <img src={pic24} className="absolute pt-5  pl-3" alt="" />
                  <input
                    type="text"
                    required
                    placeholder="search our articles"
                    className=" py-4 pl-11 w-full rounded "
                  />
                  <button className=" lg:py-4 lg:px-10 bg-goal rounded hidden lg:flex hover:opacity-90">
                    <a href="#/">search</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-24">
        <div className="  grid md:grid-cols-2 lg:grid-cols-4  max-w-ok m-auto px-6  gap-6  min-h-[45vh] lg:min-h-[40vh] ">
          <div className=" w-full lg:max-w-[300px]  bg-badge rounded shadow-lg transform  hover:scale-[1.05] transition ease-out duration-300  hover:underline  decoration-goal cursor-pointer">
            <div className="">
              <div className=" max-w-[100px] m-auto pt-6">
                <img src={pic23} alt="" className=" w-24" />
              </div>
              <div className=" lg:max-w-[250px] max-w-[350px]  text-center m-auto">
                <ul className="  pb-6 ">
                  <li className=" text-xl pt-3 text-brown">
                    <a href="#/">join for free</a>
                  </li>
                  <li className=" text-sm  pt-6 ">
                    <a href="#/">
                      Ready to get started? create an account for free.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full lg:max-w-[300px]  bg-badge rounded shadow-lg transform  hover:scale-[1.05] transition ease-out duration-300 hover:underline  decoration-goal cursor-pointer">
            <div className="">
              <div className=" max-w-[100px] m-auto pt-6">
                <img src={pic22} alt="" className="  w-24" />
              </div>
              <div className=" max-w-[350px] lg:max-w-[250px] text-center m-auto">
                <ul className=" pb-6  ">
                  <li className=" text-xl pt-3 text-brown">
                    <a href="#/">Developer hub</a>
                  </li>
                  <li className=" text-sm pt-6">
                    <a href="#/">
                      Learn how to use advance features such as API and webhooks
                      to take your buisness to the next level.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="  w-full lg:max-w-[300px]  bg-badge rounded shadow-lg transform  hover:scale-[1.05] transition ease-out duration-300 hover:underline  decoration-goal cursor-pointer">
            <div className="">
              <div className=" max-w-[100px] m-auto pt-6">
                <img src={pic21} alt="" className=" w-24" />
              </div>
              <div className=" max-w-[350px] lg:max-w-[250px] text-center m-auto">
                <ul className=" pb-6 ">
                  <li className=" text-xl pt-3 text-brown">
                    <a href="#/">Community</a>
                  </li>
                  <li className=" text-sm pt-6">
                    <a href="#/">
                      Connect with other creators to swap best practices, get
                      feedback, and meet collaborators.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full lg:max-w-[300px]  bg-badge rounded shadow-lg transform  hover:scale-[1.05] transition ease-out duration-300 hover:underline  decoration-goal cursor-pointer">
            <div className="">
              <div className=" max-w-[100px] m-auto pt-6">
                <img src={pic20} alt="" className=" w-24" />
              </div>
              <div className=" max-w-[350px] lg:max-w-[250px] text-center m-auto">
                <ul className=" pb-6 ">
                  <li className=" text-xl pt-3 text-brown">
                    <a href="#/">Submit a request</a>
                  </li>
                  <li className=" text-sm pt-6">
                    <a href="#/">Need help? Contact our support team.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className=" pt-6  pb-16">
          <div className="    pb-6 lg:pb-20">
            <h1 className=" text-5xl lg:text-6xl text-gap text-center  font-[350]">
              Knowledge Base
            </h1>
          </div>
          <div className="  grid md:grid-cols-2 lg:grid-cols-3 max-w-ok m-auto px-6  gap-6  ">
            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic25} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Get Started</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Setup your account and dive into customer resources.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic26} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Create & Setup Products</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Discover how to create and build products your students
                        will love.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic27} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Customize Your Site</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Personalize the look and feel of your school.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic28} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">User Management</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Manage and support student, affliates, authors, and
                        other roles in your school.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic29} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Manage Your School</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Manage your school behind-the-scenes administrative
                        details.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic30} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Sell & Grow</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Understand paments, transactions, and taxes, plus learn
                        about features that will help grow your audience.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic31} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Accounts & Billing</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Learn how to update your account and billing
                        information.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic32} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Apps</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Administer your school more efficiently by integrating
                        with third-party services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[400px]  bg-lemon rounded  cursor-pointer shadow-md hover:bg-sky  transition ease-in duration-100">
              <div>
                <div className="max-w-[80px] m-auto pt-6">
                  <img src={pic33} alt="" className=" w-20" />
                </div>
                <div className="  max-w-[520px] md:max-w-[320px]  text-center m-auto">
                  <ul className="  pb-12 ">
                    <li className=" text-xl pt-3 text-gap">
                      <a href="#/">Student Guides</a>
                    </li>
                    <li className=" text-sm  pt-3 ">
                      <a href="#/">
                        Get answers to the questions you have about being a
                        student
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-12 lg:pt-24">
            <h2 className=" text-xl text-center ">
              Already a customer?{" "}
              <span className=" underline">
                <a href="#/" className=" ">
                  {" "}
                  Contact Support
                </a>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
