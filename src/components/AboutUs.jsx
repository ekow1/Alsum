
import { Swiper, SwiperSlide } from 'swiper/react';
import Actioncall from './sections/Actioncall'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutSlide } from '../constants/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import { FreeMode, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const AboutUs = () => {


  return (
    <div className='w-full min-h-screen flex flex-col items-center    py-32' >
        
        <div className=" w-full lg:w-[80%] h-[90%] lg:h-[70%] grid grid-cols-1 md:grid-cols-2   justify-center  gap-4 px-8 py-5 lg:py-5 lg:px-16">
        <div className="w-full h-[1300px] lg:h-[900px] flex  flex-col items-center  justify-center  " >
          <div className=" w-full h-[100%] lg:w-[100%] lg:h-[95%] flex flex-col text-sm justify-start  gap-2 lg:gap-10  rounded-xl p-4 lg:p-8  "  data-aos='fade-zoom-in' data-aos-delay='5000'>
            <h1 className=" w-[20%] font-serif font-bold lg:text-2xl uppercase border-b-2 border-black py-2">Background</h1>
            <p className='font-serif text-md font-semibold'>Rooted in Tradition, Growing Tomorrow: Unveiling the Story of Alsum Farms.</p>
            <p className='  mt-5'>
              Alsum Farms and Produce (US) and Hopeline Institute (Ghana) have collaborated in the Agriculture sector since 2010, addressing gaps in service delivery across various agriculture value chains in Ghana. Key interventions include promoting Irish Potato cultivation, supporting organic vegetable farming, and engaging stakeholders to enhance local rice production
             
              
            </p>
            <p>
              In 2017, the partners identified a gap in Agriculture Mechanization for rice farming in Ghana, leading to the establishment of Alsum Farms Ghana (AFG) as a limited liability company. AFG, leveraging Hopeline Institute's network, focused on providing mechanization services to Southern Ghana communities, benefiting over 128,000 smallholder farmers, with a special emphasis on women.

            </p>
            <p>
            From 2017 to 2022, AFG and Hopeline Institute collaborated with the Ministry of Food and Agriculture, forming Farm Based Groups, implementing a tracking platform, and linking farmers to markets and extension workers. They also supported mechanization service providers, rice processors, and empowered women with advanced parboiling technology training. The success of these strategies led to the expansion of mechanization services across Ghana, contributing to increased rice yields and sustainable agricultural growth.
              </p>
            <p>
              Building on this success, AFG extended its collaboration with Hopeline Institute to provide Agriculture Mechanization services in Northern Ghana, specifically in the Tono Rice Irrigation Scheme and Fumbisi rain-fed rice farms in the Upper East Region. This expansion aims to replicate the successful model and further contribute to agricultural development in the region.
              </p>
            
          </div>
        
        </div>
        <div className="w-full h-[900px] lg:h-[900px] flex  flex-col items-center  justify-center    ">
          <div className=" w-full h-[500px] lg:w-[100%] lg:h-[95%] flex flex-col items-center justify-center gap-4  rounded-xl">
            <div className="w-full h-[50%] bg-slate-400  bg-cover bg-center rounded-3xl shadow-xl"  data-aos='fade-down'>
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
        effect="fade" // Set the fade effect
        fadeEffect={{ crossFade: true }} // Enable crossFade for smooth transitions
        autoplay={{
          delay: 8000, // Time in milliseconds between slides
          disableOnInteraction: false, // Autoplay will not be disabled when interacting with the Swiper
        }}
        className='max-w-[100%] lg:max-w-[100%]'
        style={{
    '--swiper-pagination-color': 'yourDesiredColor',
    '--swiper-pagination-color-active': 'yourActiveColor',
  }}
      >

{AboutSlide.map(item => (
  <SwiperSlide key={item.id}>
    <div className="w-full flex flex-col group relative text-white overflow-hidden rounded-3xl">
      <div className='w-full h-[100%] lg:h-[50%] relative'>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)',
          }}
        />
        <img
          className='object-cover w-full h-full'
          src={item.imgUr}
          alt={item.title}
        />
        <div className=" w-full absolute inset-0 flex items-center justify-center lg:items-center lg:justify-start md:items-center md:justify-start   ">
          <div className="text-left w-full lg:w-[60%]  py-5 px-5  lg:px-16">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2" 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="5000"
            data-aos-offset="0">{item.title} </h2>
            <p className="text-md lg:text-lg " data-aos='fade-up'>{item.description}</p>
            {/* <button type="button" className='  mt-5 cursor-pointer  flex items-center justify-center   gap-2  px-3 py-2 outline outline-1 hover:bg-white hover:text-black' data-aos='fade-up'>  view more <FiArrowUpRight /> </button> */}

          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>
            </div>
            <div className="w-full h-[100%] lg:h-[50%] grid grid-col-1 lg:grid-cols-2   place-items-center bg-slate-50 rounded-3xl lg:py-8 lg:px-8 px-2 py-2  shadow-xl" data-aos='fade-up' data-aos-delay='500'>
              <div className="w-[250px] h-[80px] lg:w-[350px] lg:h-[160px] lg:bg-slate-100 flex flex-col justify-center px-8 rounded-2xl" >
                <h1 className='font-serif font-bold  lg:text-6xl lg:mb-4 flex items-center'>7 <span className='lg:text-4xl'>+</span></h1>
                <p className=' text-lg lg:text-lg'>Years Experience</p>
              </div>
              
              <div className=" w-[250px] h-[80px] lg:w-[350px] lg:h-[160px] lg:bg-slate-100 flex flex-col justify-center px-8 rounded-2xl">
                <h1 className='font-serif font-bold  lg:text-6xl lg:mb-4 flex items-center'>50<span className='lg:text-4xl'>+</span></h1>
                <p className=' text-lg lg:text-lg'>Projects</p>
              </div>
              
              <div className="w-[250px] h-[80px] lg:w-[350px] lg:h-[160px] lg:bg-slate-100 flex flex-col justify-center px-8 rounded-2xl">
                <h1 className='font-serif font-bold lg:text-6xl lg:mb-4 flex items-center'>50<span className=' lg:text-4xl'>+</span></h1>
                <p className=' lg:text-lg'>Trusted Clients</p>
              </div>
              
              <div className="w-[250px] h-[80px] lg:w-[350px] lg:h-[160px] lg:bg-slate-100 flex flex-col justify-center px-8 rounded-2xl">
                <h1 className='font-serif font-bold lg:text-6xl lg:mb-4 flex items-center'>100<span className='lg:text-4xl'>+</span></h1>
                <p className=' lg:text-lg'>Postitive Reviews</p>
              </div>
              
             
              
            </div>
          </div>
        
        </div>
       
        
      </div>
        
        <div className=" w-[80%] h-[90%] lg:h-[70%] grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-0  place-items-center mt-10    py-5 lg:py-5 lg:px-16">
         <div className="  w-[ 100px] lg:w-[400px] min-h-[250px] bg-slate-50 rounded-xl shadow-xl p-5" data-aos='fade-zoom-in' data-aos-delay='5000'>
          <h1 className=" w-[20%] font-serif font-bold border-b-2 border-black py-2 mb-6">Vision</h1>
          <p className=' '>Alsum Farms Ghana and Hopeline Institute collaborate to revolutionize agriculture in Ghana, addressing service gaps, promoting sustainable practices, and empowering smallholder farmers through mechanization, training, and market linkages.</p>

         </div>
         <div className="w-[ 100px] lg:w-[400px] min-h-[250px] bg-slate-50  rounded-xl shadow-xl p-5" data-aos='fade-zoom-in' data-aos-delay='1000'>
          <h1 className=" w-[20%] font-serif font-bold border-b-2 border-black py-2 mb-6">Mission</h1>
           <p className=' '>Our vision is to be leaders in transforming Ghana's agriculture sector, fostering inclusive growth, and ensuring food security. Through strategic collaborations and innovative solutions, we aim to empower communities and elevate the nation's agricultural landscape.</p>

         </div>
         <div className="w-[ 100px] lg:w-[400px] min-h-[250px] bg-slate-50  rounded-xl shadow-xl p-5" data-aos='fade-zoom-in' data-aos-delay='1500'>
          <h1 className=" w-[40%] font-serif font-bold border-b-2 border-black py-2  mb-6">Core Values</h1>
          <p className=' '>Our core values center on collaboration, innovation, and sustainability. We are committed to fostering strong partnerships, implementing cutting-edge solutions in agriculture, and promoting practices that contribute to the long-term well-being of communities and the environment.</p>

         </div>
        
          
         
        
      </div>
        <div className=" w-[80%] h-[80%] lg:h-[60%] grid grid-cols-1 md:grid-cols-1  gap-5 lg:gap-0  place-items-center mt-32    py-5 lg:py-5 lg:px-10">
         <Actioncall />
        
          
         
        
      </div>
      
    </div>
  )
}

export default AboutUs