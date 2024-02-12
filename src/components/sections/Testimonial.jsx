import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Testimony}  from '../../constants/testimonial';
import Plough from '../../image/plough.webp'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import AOS from 'aos';
import 'aos/dist/aos.css'
// import './App.css' // Import the fade effect
// Import required modules.
import { FreeMode, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect } from 'react';

const Testimonial = () => {

  useEffect(() => {
  AOS.init({
    
    duration: 2000,
    easing: 'ease-in-out'
  }
  ),[]});


  
  return (
    <div className='w-full h-[600px]  flex flex-col bg-cover bg-center  items-center justify-center  text-white  py-10  ' style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${Plough})`}}>
           <h1 className='font-serif font-bold text-5xl  mt-5 mb-5' 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="5000"
            data-aos-offset="0">testimonials</h1>
        <div className=" w-full lg:w-[60%] h-[70%] flex flex-col items-center justify-center  ">
            <Swiper
             breakpoints={{
          340: {
            slidesPerView: 1
          },
          700: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1
          },
        }}
        pagination={{
          dynamicBullets: true
        }}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay, EffectFade]}
        effect="fade" // Set the fade effect
        fadeEffect={{ crossFade: true }} // Enable crossFade for smooth transitions
        autoplay={{
          delay: 10000, // Time in milliseconds between slides
          disableOnInteraction: false, // Autoplay will not be disabled when interacting with the Swiper
        }}
        className='max-w-[100%] lg:max-w-[100%]'
        style={{
    '--swiper-pagination-color': 'yourDesiredColor',
    '--swiper-pagination-color-active': 'yourActiveColor',
  }}


            >


          {Testimony.map(item => (
            <SwiperSlide  key={item.name}>

            <article className="  mt-5   px-10 lg:px-40   text-white">
                <p className='mb-5 lg:mb-10  text-sm  leading-loose lg:text-xl ' data-aos='fade-up'> "{item.description}" </p>
                <p className='  text-lg lg:text-md mb-20 ' data-aos='fade-up'>{item.name} - {item.location}</p>
            </article>
            </SwiperSlide>
          ))}


            </Swiper>
         

        </div>

    </div>
  )
}

export default Testimonial