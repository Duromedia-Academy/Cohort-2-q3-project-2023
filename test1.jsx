import pic48 from '../img/img48.webp'
import pic49 from '../img/img49.webp'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const Carousel = ({ head, description, image }) => {
    return (
        <div className=' relative'>
            <div
            >
                <div className=''>

                    <div className=' flex   max-w-no m-auto items-center justify-evenly py-24  lg:py-48 text-white'>
                        <div className='md:max-w-nice lg:max-w-[480px] text-center px-3 md:px-0' >
                            <div className=' border-t-4 max-w-[150px] m-auto border-white'>
                                <p>{head}</p>
                            </div>
                            <h3 className=' text-[2rem] lg:text-[2.1rem] py-10'>{description}</h3>
                        </div>

                        <div className=' hidden lg:flex'>
                            <img src={image} alt="" className=' h-[600px]' />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Carousel

