import React from "react";
import background from "../../../img/img1.webp";
import pic2 from "../../../img/img2.webp";
import pic3 from "../../../img/img3.webp";
import pic4 from "../../../img/img4.webp";
import pic5 from "../../../img/img5.webp";
import pic6 from "../../../img/img6.webp";

const Podcast = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className=" bg-no-repeat bg-cover bg-center"
      >
        <div className=" lg:pt-72 lg:max-w-no lg:pl-8 m-auto lg:relative lg:bottom-[-30px]">
          <div className="bg-white lg:max-w-xl pl-3 py-8 lg:min-h-bot lg:pl-12 ">
            <div className="max-w-sit md:max-w-nice m-auto px-4 lg:px-0">
              <h1 className="text-4xl  pb-8 lg:text-6xl md:text-5xl  ">
                Everything is Teachable{" "}
              </h1>
              <p className="lg:max-w-yes ">
                A weekly deep dive into the minds and work lives of your
                favorite creators. Join host Haleigh Fullilove to uncover the
                real stories behind the successes, failures, best practices, and
                biggest moments for creators making a living sharing what they
                know.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gap text-white text-center py-8 lg:py-24">
          <div className="lg:max-w-yh m-auto md:max-w-nice max-w-yes ">
            <h1 className="text-3xl lg:text-5xl pb-10 pt-3  md:text-5xl">
              Listen to the newest episode on your favorite streaming service
            </h1>
            <h2 className="text-3xl lg:text-4xl pb-8  md:text-4xl">
              Subscribe below wherever you listen to podcasts.
            </h2>
          </div>
          <div className=" space-x-8">
            <button className="bg-goal py-3 px-6 rounded text-black hover:bg-green-300 transition ease-out duration-300">
              <a href="#/">Apple</a>
            </button>
            <button className="bg-goal py-3 px-6 rounded text-black  hover:bg-green-300  transition ease-out duration-300">
              <a href="#/">Spotify</a>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:md:py-24 pt-0 md:pt-12 px-12 md:px-0">
        <div className="flex flex-col-reverse lg:flex-row md:max-w-nice lg:max-w-no md:m-auto items-center justify-around">
          <div className="hidden md:flex ">
            <img
              src={pic2}
              width={540}
              height={680}
              alt=""
              className="md:w-pad lg:w-[580px] lg:h-[680] "
            />
          </div>
          <div className="">
            <h2 className="text-4xl text-gap">Meet your host:</h2>
            <h2 className="text-4xl text-gap">Haleigh Fullilove</h2>
            <p className="lg:max-w-md py-10 text-mag  max-w-sit m-auto md:max-w-nice text-gap">
              I’m Haleigh Fullilove, Teachable’s senior social media strategist
              and new host of the Everything Is Teachable podcast. A little
              about me personally: I live in New York City, I’m obsessed with
              astrology, and you can usually find me deep in the clothing racks
              at an obscure thrift store with an iced coffee in hand.
            </p>
            <p className="lg:max-w-md text-mag md:pb-12 lg:pb-0 max-w-sit m-auto md:max-w-nice text-gap">
              Aside from being able to bring content to life to educate and
              entertain you on Teachable’s social media channels, I absolutely
              love interacting with all of you on a day-to-day basis. Now, I’m
              really grateful to also have the opportunity to connect with
              creators on a deeper level as Everything Is Teachable’s new host.
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${background})` }}>
        <div className="pb-40">
          <div className=" bg-brown text-white">
            <div className=" lg:flex lg:pl-48 lg:py-28 py-10">
              <div>
                <h1 className=" lg:text-5xl lg:pb-6 text-center text-4xl font-light lg:font-normal pb-6 lg:py-0">
                  Stay in the know
                </h1>
                <p className=" lg:max-w-tin lg:text-sm max-w-sit md:max-w-nice m-auto lg:m-0 pb-10 lg:pb-0 px-3 lg:px-0">
                  Want to read even more from your favorite creators (plus
                  marketing tips, product news, goal-setting strategies, and
                  more)? Sign up for our weekly newsletter, In The Know, and get
                  it all delivered straight to your inbox.
                </p>
              </div>
              <div className=" lg:pt-28  max-w-sit md:max-w-nice m-auto lg:m-0 px-3 lg:px-0">
                <form className="">
                  <label>Enter your email:</label>
                  <br />
                  <div className=" lg:space-x-2 lg:pb-3 flex flex-col md:flex-row gap-6 py-2">
                    <input
                      type="Email"
                      required
                      placeholder="hello@example.com"
                      className="py-4 pl-4 lg:pr-24 text-black pr-60"
                    />
                    <button className="lg:py-4 lg:px-8 bg-goal text-brown rounded px-8 py-3  hover:bg-green-300  transition ease-out duration-300">
                      <a href="#/">sign up</a>
                    </button>
                  </div>
                </form>
                <p className=" lg:max-w-sm text-lit max-w-sit">
                  *By submitting your email address, you agree to Teachable's
                  Terms of use and{" "}
                  <span className=" underline"> Privacy Policy.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:md:py-24  pt-8 md:pt-12 px-12 md:px-0">
        <div className="flex lg:max-w-no md:m-auto flex-col lg:flex-row  items-center justify-around  md:max-w-nice ">
          <div className="lg:max-w-sit">
            <h2 className="lg:max-w-md  max-w-sit m-auto md:max-w-nice text-2xl md:text-3xl text-gap">
              Catch up on the latest: Rewilding entrepreneurship with Lindsay
              Mack of Tarot for the Wild Soul
            </h2>
            <p className="lg:max-w-md pt-10 pb-6 text-mag  max-w-sit m-auto md:max-w-nice text-gap">
              What happens when spirituality and tarot meet at the intersection
              of entrepreneurship? In the first episode of Season 4, we’re
              taking a deep dive into the challenges and inspirations Lindsay
              Mack of Tarot for the Wild Soul has experienced during their time
              as an online business owner, and why sharing your voice is one of
              the most important things you can do as an online creator.
            </p>
            <a href="#/" className=" underline text-gap">
              Listen now
            </a>
          </div>
          <div className="hidden md:flex md:pt-12 lg:pt-0">
            <img
              src={pic3}
              width={540}
              height={680}
              alt=""
              className="md:w-pad lg:w-[580px] lg:h-[680] "
            />
          </div>
        </div>
      </div>

      <div className="bg-cream ">
        <div className=" lg:ml-48  ml-40">
          <h1 className=" lg:text-6xl lg:py-20 text-gap text-3xl py-11 md:text-4xl">
            Get caught up
          </h1>
          <div className="lg:pb-12 pb-8">
            <a
              href="#/"
              className="lg:text-4xl underline text-gap text-3xl md:text-4xl"
            >
              See all
            </a>
          </div>
        </div>
        <div className="">
          <div className="border border-black  grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 ">
            <div className="lg:pr-8 lg:col-span-2 lg:ml-auto border-b md:border-b-0 border-black md:border-r lg:border-r-0">
              <div className=" lg:border-r border-black lg:pr-12  max-w-omo lg:max-w-none m-auto">
                <h2 className=" text-mag lg:pt-20 pt-10 md:pt-16">
                  : season 2
                </h2>
                <h1 className=" lg:text-4xl lg:py-12 text-2xl md:text-3xl  py-6">
                  Cheryl Porter
                </h1>
                <h2 className="lg:pb-8 pb-8">
                  Vocal coaching, Cheryl Porter Vocal Method
                </h2>
                <div className="">
                  <img src={pic4} alt="" className=" w-[300px] h-[330px] " />
                </div>
                <div className=" lg:pt-10 lg:pb-28 pt-12 pb-12">
                  <a href="#/" className="">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className=" border-b md:border-b-0 border-black">
              <div className="lg:col-span-1  max-w-omo lg:max-w-none m-auto">
                <h2 className=" text-mag lg:pt-20 pt-10 md:pt-16">
                  : season 2
                </h2>
                <h1 className=" lg:text-4xl lg:py-12 text-2xl md:text-3xl  py-6">
                  Tiago Forte
                </h1>
                <h2 className="lg:pb-8  pb-10 md:pb-14">
                  Digital Productivity, Forte Labs.
                </h2>
                <div className="">
                  <img src={pic5} alt="" className="w-[300px] h-[330px] " />
                </div>
                <div className="lg:pt-10 lg:pb-28 pt-12 pb-8">
                  <a href="#/">Learn more</a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:pl-8 ">
              <div className=" max-w-omo lg:max-w-none m-auto">
                <div className="lg:border-l border-black lg:pl-12 ">
                  <h2 className=" text-mag lg:pt-20 pt-16 md:pt-20">
                    : season 2
                  </h2>
                  <h1 className=" lg:text-4xl lg:py-12 text-2xl md:text-3xl py-6">
                    Luisa Zhou
                  </h1>
                  <h2 className="pb-10 lg:pb-0">
                    Employee to Entrepreneur, LuisaZhou.com
                  </h2>
                  <div className="lg:pt-12">
                    <div className=" ">
                      <img src={pic6} alt="" className=" w-[300px] h-[330px]" />
                    </div>
                    <div className="lg:pt-10 lg:pb-24 pt-12 pb-8">
                      <a href="#/">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brown">
        <div className=" text-center py-24">
          <h1 className=" lg:text-5xl text-4xl pb-6 text-white">
            Subscribe today
          </h1>
          <h2 className=" lg:text-4xl text-3xl py-6 lg:pb-16 text-white">
            wherever you listen to podcasts.
          </h2>
          <div className=" space-x-6">
            <button className="bg-goal py-3 px-6 lg:py-4 lg:px-8 rounded  hover:bg-green-300  transition ease-out duration-300">
              <a href="#/" className=" text-mag">
                Apple
              </a>
            </button>
            <button className="bg-goal py-3 px-6 lg:py-4 lg:px-8 rounded hover:bg-green-300  transition ease-out duration-300">
              <a href="#/" className=" text-mag">
                Spotify
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-cream ">
        <div className=" lg:max-w-no md:max-w-nice max-w-tin m-auto lg:py-24 pt-8 pb-24 border-b   border-brown ">
          <h1 className=" lg:text-7xl text-gap lg:pb-10 md:text-4xl text-3xl pb-5">
            About Teachable
          </h1>
          <p className=" lg:text-4xl text-gap lg:pt-8 md:text-3xl pt-5 text-2xl">
            We’re Teachable: your go-to platform for course creation. Since
            2014, we’ve helped more than 100,000 creators earn over $1 billion
            from online courses and coaching products. How do we do it? By
            managing all the logistics (like coding and payment processing) to
            make it easier than ever for you to share your knowledge online.
          </p>
          <div>
            <button className="lg:pt-3 pt-2">
              <a href="#/" className=" lg:text-4xl underline text-gap text-3xl">
                Learn more
              </a>
            </button>
          </div>
        </div>
        <div className=" grid md:grid-cols-2  lg:grid-cols-3  lg:place-items-center lg:mx-24 py-16 md:py-20 lg:py-28">
          <div className=" text-center">
            <h2 className=" text-2xl pb-8">For press inquiries</h2>
            <div>
              <a href="#/" className=" underline">
                vera@teachable.com
              </a>
            </div>
          </div>
          <div className=" text-center">
            <h2 className=" text-2xl pb-8 pt-10 md:pt-0">For advertising</h2>
            <div>
              <a href="#/" className=" underline">
                bethany@teachable.com
              </a>
            </div>
          </div>
          <div className=" text-center">
            <h2 className=" text-2xl pb-8 pt-10 lg:pt-0">To be featured</h2>
            <div>
              <a href="#/" className=" underline">
                podcast@teachable.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
