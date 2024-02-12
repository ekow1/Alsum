import React ,{useEffect}from 'react'
import { FiArrowUpLeft ,FiArrowDownRight ,FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Actioncall = () => {
   useEffect(() => {
  AOS.init({
    
    duration: 2000,
    easing: 'ease-in-out'
  }
  ),[]});
  return (
    <div className='w-full h-[650px]  flex flex-col items-center justify-center py-16'   data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="5000"
            data-aos-offset="0">
        <FiArrowUpLeft className='  me-[60%] lg:me-[45%] md:me-[45%]' size={30}  data-aos ='fade-in'/>
        <div className=" w-[80%]  flex flex-col items-center justify-center gap-5 lg:w-[50%] md:[50%] mt-16 mb-16 ">
        <h1 className=' font-bold text-7xl  leading-smug  italic text-center  lg:text-9xl '>Want to work with us ?</h1>
        <Link to='/contact'>

        <button type="button" className='  mt-5 cursor-pointer  flex items-center justify-center rounded-full  gap-2  px-5 py-2 outline outline-1 hover:bg-slate-900 hover:text-white'>  lets talk <FiArrowUpRight /> </button>
        </Link>


        </div>
        <FiArrowDownRight  className='  ms-[60%] lg:ms-[45%] md:ms-[45%]  '  size={30}  data-aos='fade-in' data-aos-delay='5000' />
    

    </div>
  )
}

export default Actioncall