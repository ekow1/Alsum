import  { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from '../../constants/data';
import { FiArrowDown } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import { FreeMode, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out'
    });
  }, []);

  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='w-full flex flex-col items-center h-[850px] lg:h-[1070px] text-black lg:mb-5'>

      <div className="w-full lg:w-[90%] rounded-lg p-8 text-left mt-24 py-10">
        <h1 className="font-serif text-3xl lg:text-6xl font-bold mb-4" data-aos='fade-zoom-in' data-aos-delay='5000'>Alsum Farms Ghana</h1>
        <p className="text-md lg:text-lg " data-aos='fade-right'>Revolutionizing Agriculture, One Innovation at a Time!</p>
      </div>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1
          },
          500: {
            slidesPerView: 1
          },
          700: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1
          },
          1200: {
            slidesPerView: 1
          },
        }}

        pagination={{
          dynamicBullets: true
        }}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        className='max-w-[100%] lg:max-w-[100%]'
        style={{
          '--swiper-pagination-color': 'yourDesiredColor',
          '--swiper-pagination-color-active': 'yourActiveColor',
        }}
      >

        {HeroSlide.map(item => (
          <SwiperSlide key={item.title}>
            <div className="w-full flex flex-col group relative text-white overflow-hidden bg-black">
              <div className='w-full h-[550px] lg:h-[830px] relative'>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%)',
                  }}
                />
                <img
                  className='object-cover w-full h-full'
                  src={item.imgUr}
                  alt={item.title}
                />
                <div className="w-full absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-32 lg:items-center lg:justify-start md:items-center md:justify-start   ">
                  <div className="text-left w-full lg:w-[60%]  py-5 px-5  lg:px-16">
                    <h2
                      className="text-2xl lg:text-6xl font-bold mb-2"
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="5000"
                      data-aos-offset="0"
                    >
                      {item.title}
                    </h2>
                    <p className="text-md lg:text-xl  " data-aos='fade-up'>{item.description}</p>
                  </div>

      <button
        className=' lg:w-[300px]  lg:ml-[30%] lg:mt-[20%] cursor-pointer  text-sm lg:text-xl flex items-center justify-end gap-2 py-2 px-2 lg:px-3 lg:py-2  '
        onClick={handleScrollDown}
         style={{ transform: 'rotate(90deg)' }}
         data-aos='fade-down'
      >
        Scroll Down <FiArrowDown   style={{ transform: 'rotate(270deg)' }}  className='   animate-pulse'/>
         <FiArrowDown   style={{ transform: 'rotate(270deg)' }}  className='   animate-pulse'/>
      </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}

export default Hero;
