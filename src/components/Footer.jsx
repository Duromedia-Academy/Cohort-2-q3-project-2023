import React from "react";

const Footer = () => {
  return (
    <footer className="app bg-peak text-white px-[5%]">
      <div className="border-b border-white pt-16">
        <div className="max-w-ok mx-auto">
          <div className="md:flex">
            <div className="md:flex">
              <div className="pb-10">
                <h1 className="pl-1 text-3xl py-5 md:text-5xl">teach:able</h1>
                <p className="max-w-xl text-xl pt-6">
                  Join the more than 100,000 creators who use Teachable to share
                  their knowledge. Easily create an online course or coaching
                  business with our powerful yet simple all-in-one platform.
                </p>
              </div>
              <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:pl-12">
                <ul className="py-3 text-mag leading-9">
                  <h2 className="py-3">Explore</h2>
                  <li>
                    <a href="/f">Features</a>
                  </li>
                  <li>
                    <a href="/f">Pricing</a>
                  </li>
                  <li>
                    <a href="/f">Examples</a>
                  </li>
                  <li>
                    <a href="/f">Newsletter</a>
                  </li>
                  <li>
                    <a href="/f">teachable:hq</a>
                  </li>
                  <li>
                    <a href="/f">Podcast</a>
                  </li>
                </ul>

                <ul className="py-3  md:pl-10 text-mag leading-9">
                  <h2 className="py-3">Company</h2>
                  <li>
                    <a href="/f">About</a>
                  </li>
                  <li>
                    <a href="/f">Career</a>
                  </li>
                  <li>
                    <a href="/f">Blog</a>
                  </li>
                  <li>
                    <a href="/f">Press</a>
                  </li>
                  <li>
                    <a href="/f">Partners</a>
                  </li>
                </ul>

                <ul className="pt-3 pb-8  md:pl-10 text-mag leading-9">
                  <h2 className="py-3">Support</h2>
                  <li>
                    <a href="/f">Knowledge Base</a>
                  </li>
                  <li>
                    <a href="/f">Contact Support</a>
                  </li>
                  <li>
                    <a href="/f">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/f">Term of Use</a>
                  </li>
                  <li>
                    <a href="/f">Content Guidelines</a>
                  </li>
                  <li>
                    <a href="/f">House Rules</a>
                  </li>
                  <li>
                    <a href="/f">Cookies Policy</a>
                  </li>
                  <li>
                    <a href="/f">Ethics Line</a>
                  </li>
                  <li>
                    <a href="/f">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between py-10 px-16">
        <div className="flex justify-center pr-3 space-x-3">
          <div className="">
            <img
              src={require("../img/youtube.png")}
              alt=""
              className=" rounded-full border-2  w-8 "
            />
          </div>
          <div className="">
            <img
              src={require("../img/facebook.png")}
              alt=""
              className=" rounded-full  border-2 w-8"
            />
          </div>
          <div className="">
            <img
              src={require("../img/pinterset.png")}
              alt=""
              className=" rounded-full  border-2 w-8"
            />
          </div>
          <div className="">
            <img
              src={require("../img/insta.png")}
              alt=""
              className=" rounded-full  border-2 w-8 "
            />
          </div>
          <div className="">
            <img
              src={require("../img/twitter.gif")}
              alt=""
              className=" rounded-full  border-2 w-8 "
            />
          </div>
          <div className="">
            <img
              src={require("../img/linkeden.gif")}
              alt=""
              className=" rounded-full  border-2 w-8"
            />
          </div>
          <div className="">
            <img
              src={require("../img/tiktok.png")}
              alt=""
              className=" rounded-full  border-2   w-8"
            />
          </div>
        </div>
        <div>
          <p className="text-center max-w-2xl">
            Copyright © 2023 Teachable, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
