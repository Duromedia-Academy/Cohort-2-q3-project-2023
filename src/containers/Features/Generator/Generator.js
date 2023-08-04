import pic66 from "../../../img/img66.webp";
import pic67 from "../../../img/img67.webp";
import pic68 from "../../../img/img68.webp";
import { BiPlay } from "react-icons/bi";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
const Generator = () => {
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
      <div className=" bg-cream">
        <div className="  max-w-sit md:max-w-nice lg:max-w-no m-auto  text-center px-3 md:px-0 py-6 lg:py-20">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl text-gap font-[350] lg:pt-6">
            Build your course curriculum with AI
          </h1>
          <p className=" text-2xl py-6">
            Introducing Teachable’s course curriculum generator.
          </p>
          <p className=" text-2xl">
            Unblock yourself. Get creative. Build faster.
          </p>
          <div className=" pt-6 lg:pt-12">
            <button className="  bg-goal lg:px-8 lg:py-4 px-6 py-3 rounded">
              <a href="#/" className=" text-[1.2rem]">
                Start for free
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-gap">
        <div className=" flex md:flex-col lg:flex-row max-w-ok m-auto justify-around items-center text-white py-12 lg:py-24 px-4 md:px-0">
          <div className=" max-w-[480px] md:max-w-[700px] lg:max-w-[420px] md:pb-12 lg:pb-0">
            <h1 className=" text-3xl lg:text-4xl font-[350]">
              All in one place
            </h1>
            <p className=" pt-5 text-[1.15rem] ">
              It’s the power of AI—now inside your Teachable experience. With
              the curriculum generator, get your course outline then start
              building on it right away.
            </p>
          </div>
          <div className=" hidden md:flex">
            <div className=" ">
              <img src={pic66} alt="" className="w-[700px]  lg:w-[500px]" />
              <div className=" flex items-center  pt-5">
                <p className="text-[1.15rem]">
                  See our course curriculum generator in action
                </p>
                <BiPlay className=" text-3xl  text-goal" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-8 pb-16 lg:py-24">
        <div className=" max-w-[350px] md:max-w-nice lg:max-w-[800px] m-auto text-center">
          <h1 className=" text-4xl lg:text-5xl font-[350] pb-10 lg:pb-14">
            Creativity, minus the writer's block
          </h1>
          <p className=" text-[1.25rem] lg:pb-14 pb-10 md:pb-8">
            Sometimes getting started is the hardest part—until now. Just follow
            these steps
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[700px] place-items-center md:place-items-start lg:max-w-no m-auto">
          <div className=" max-w-[320px]">
            <h1 className=" text-2xl">Step 1: Name your course</h1>
            <p className=" py-6  text-[1.05rem]">
              When naming your new course, check "Help me generate a course
              outline."
            </p>
          </div>
          <div className=" max-w-[320px]">
            <h1 className=" text-2xl">Step 2: Get your outline</h1>
            <p className=" py-6  text-[1.05rem]">
              Enter a brief description of your course. The generator will
              create an outline for you in just a few moments.
            </p>
          </div>
          <div className=" max-w-[320px]">
            <h1 className=" text-2xl">Step 3: Make it yours</h1>
            <p className=" py-6  text-[1.05rem]">
              Keep the momentum going. Use our flexible curriculum builder to
              rearrange, edit, and make it yours.
            </p>
          </div>
        </div>
        <div className=" text-center">
          <button className="py-3 px-6 md:py4 lg:px-8 rounded bg-goal">
            <a href="#/" className=" text-[1.2rem]">
              Start for free
            </a>
          </button>
        </div>
      </div>

      <div className="  bg-brown text-white">
        <div className=" py-12 lg:py-24">
          <div className="  text-center m-4">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl">
              Harness the power of AI
            </h1>
            <p className=" text-[1.2rem]">
              Our course curriculum generator is about working smarter, not
              harder.
            </p>
          </div>
          <div className=" ">
            <div className=" flex flex-col lg:flex-row  lg:max-w-no m-auto justify-around  max-w-[700px] items-center py-12">
              <div className=" md:max-w-[700px]  lg:max-w-[400px] md:pb-6 lg:pb-0  max-w-[520px] m-auto px-4 md:px-0">
                <h1 className=" text-2xl md:text-3xl">Your starting point</h1>
                <p className=" text-[1.1rem] pt-5">
                  Even experts sometimes struggle with trasnlating their
                  expertise into a course. The curriculum generator is designed
                  to help
                </p>
              </div>
              <div className=" hidden md:flex">
                <img src={pic67} alt="" className=" w-[700px] lg:w-[500px]" />
              </div>
            </div>
            <div className=" flex  flex-col-reverse lg:flex-row  lg:max-w-no m-auto justify-around  max-w-[700px] items-center py-12">
              <div className=" hidden md:flex">
                <img src={pic68} alt="" className=" w-[700px] lg:w-[500px]" />
              </div>
              <div className=" md:max-w-[700px] lg:max-w-[400px] md:pb-6 lg:pb-0 max-w-[520px] m-auto px-4 md:px-0">
                <h1 className=" text-2xl md:text-3xl">Build from there</h1>
                <p className=" text-[1.1rem] pt-5">
                  Your AI-powered curriculum gives you an idea of what your
                  course could look like. You can customize however you
                  want—have fun with it!
                </p>
              </div>
            </div>
            <div className=" text-center">
              <button className="py-3 px-6 md:py4 lg:px-8 rounded bg-goal">
                <a href="#/" className=" text-[1.2rem] text-black">
                  Start for free
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-14 bg-cream">
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
                    How exactly does it work?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      It’s easy. The course curriculum generator incorporates AI
                      directly into Teachable. From your course admin, enter
                      your course title and select an author, check “Help me
                      generate a course outline,” and enter a course description
                      between 1–1,000 characters. Once the outline is generated,
                      you’ll have the option to drop the outline directly into
                      the curriculum builder and edit from there—or start again
                      with a new course description.
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
                    How exactly does it work?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      It’s easy. The course curriculum generator incorporates AI
                      directly into Teachable. From your course admin, enter
                      your course title and select an author, check “Help me
                      generate a course outline,” and enter a course description
                      between 1–1,000 characters. Once the outline is generated,
                      you’ll have the option to drop the outline directly into
                      the curriculum builder and edit from there—or start again
                      with a new course description.
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
                    What makes Teachable’s AI tool different?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      We designed the course curriculum generator to help you
                      work more effectively—that’s why it’s integrated into the
                      platform. Your AI-generated course outline is uploaded
                      into the curriculum builder so you can use it immediately.
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
                    What makes Teachable’s AI tool different?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      We designed the course curriculum generator to help you
                      work more effectively—that’s why it’s integrated into the
                      platform. Your AI-generated course outline is uploaded
                      into the curriculum builder so you can use it immediately.
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
                    Who can use this feature?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Anyone on any Teachable plan, including the free plan. (Is
                      that not you? Join for free here.)
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
                    Who can use this feature?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      Anyone on any Teachable plan, including the free plan. (Is
                      that not you? Join for free here.)
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
                    Why else should I join a free plan?
                  </h1>
                  <BiPlus className=" cursor-pointer text-2xl" />
                </div>
                <div className="hidden">
                  <li>
                    <p className=" text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      A free plan on Teachable allows you to start growing your
                      business by selling online knowledge products—not just
                      courses, but online coaching and digital downloads too.
                      Get access to payment processing, course design templates,
                      core student engagement tools, and more.
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
                    Why else should I join a free plan?
                  </h1>
                  <BiMinus className=" cursor-pointer text-2xl" />
                </div>
                <div className="">
                  <li>
                    <p className=" text-[1rem]   md:text-[1.1rem] lg:text-[1.3rem] font-[350] pt-8">
                      A free plan on Teachable allows you to start growing your
                      business by selling online knowledge products—not just
                      courses, but online coaching and digital downloads too.
                      Get access to payment processing, course design templates,
                      core student engagement tools, and more.
                    </p>
                  </li>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Generator;
