
import React, { useEffect} from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Modal = ({ service, onClose }) => {

    useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="fixed w-full h-screen top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
      <div className="bg-white px-6 py-20 max-w-2xl rounded-lg lg:max-w-3xl h-auto  "  
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-3 uppercase font-serif">{service.title}</h2>
        <h2 className="text-sm lg:text-md mb-10 ">{service.heading}</h2>
        <p className="text-base mb-4 lg:leading-loose">{service.details}</p>
        {/* Add images or other details as needed */}
        <button className="fixed bottom-5 mt-20 cursor-pointer  flex items-center justify-center gap-2 px-3 py-2 outline outline-1 hover:bg-slate-900 hover:text-white" onClick={onClose}>
          Close <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Modal