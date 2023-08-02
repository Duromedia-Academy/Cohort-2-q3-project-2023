import pic47 from '../img/img47.webp'
import pic48 from '../img/img48.webp'
import pic49 from '../img/img49.webp'
import { Pagination, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const Carousel = () => {
    return (
        <div className=' relative'>
            <Swiper
                modules={[Pagination, A11y]}

                spaceBetween={100}
                effect={'crossfade'}
                speed={1000}

                slidesPerView={1}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}



            >


                <SwiperSlide className=''>

                    <div className=' flex   max-w-no m-auto items-center justify-evenly py-24  lg:py-48 text-white'>
                        <div className='md:max-w-nice lg:max-w-[480px] text-center px-3 md:px-0' >
                            <div className=' border-t-4 max-w-[150px] m-auto border-white'>
                                <p>Now for some buzz</p>
                            </div>
                            <h1 className=' text-[2rem] lg:text-[2.1rem] py-10'>I really love teachable:hq! teachable:hq is like having a mastermind group in your back pocket 24/7. the give and take format is a big win for me and my buisness</h1>
                            <p className=' text-[1rem] lg:text-xl'>Jen W, Digital scrapper</p>
                        </div>
                        <div className=' hidden lg:flex'>
                            <img src={pic47} alt="" className=' h-[600px]' />
                        </div>
                    </div>



                </SwiperSlide>



                <SwiperSlide className=' '>

                    <div className=' flex   max-w-no m-auto items-center  justify-evenly py-24  lg:py-48 text-white'>
                        <div className='md:max-w-nice lg:max-w-[480px] text-center px-3 md:px-0' >
                            <div className=' border-t-4 max-w-[150px] m-auto border-white'>
                                <p>Now for some buzz</p>
                            </div>
                            <h1 className=' text-[2rem] lg:text-[2.1rem] py-10'>The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities.</h1>
                            <p className=' text-[1rem] lg:text-xl'>Jen W, Digital scrapper</p>
                        </div>
                        <div className=' hidden lg:flex'>
                            <img src={pic48} alt="" className=' h-[600px]' />
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className=' '>

                    <div className=' flex   max-w-no m-auto items-center  justify-evenly py-24  lg:py-48 text-white'>
                        <div className='md:max-w-nice lg:max-w-[480px] text-center px-3 md:px-0' >
                            <div className=' border-t-4 max-w-[150px] m-auto border-white'>
                                <p>Now for some buzz</p>
                            </div>
                            <h1 className=' text-[2rem] lg:text-[2.1rem] py-10'>"At first, I thought I was really going to be out on this island by myself. But there’s so much support within Teachable, and I’m really, really happy about that. Because in the community of the course creators, and the founders community, I know that I’m not alone."</h1>
                            <p className=' text-[1rem] lg:text-xl'>Jen W, Digital scrapper</p>
                        </div>
                        <div className=' hidden lg:flex'>
                            <img src={pic49} alt="" className=' h-[600px]' />
                        </div>
                    </div>
                </SwiperSlide>



                <div className=" w-full lg:w-0  absolute lg:right-24 lg:top-[480px] lg:p-12  lg:space-y-5 left-0 lg:left-auto">
                    <div className="swiper-pagination lg:gap-10 block  lg:flex flex-col lg:justify-between "></div>
                </div>




            </Swiper>
        </div>
    )
}

export default Carousel

