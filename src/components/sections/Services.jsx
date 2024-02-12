import React, { useEffect, useState } from 'react';
import { ServicesData } from '../../constants/services';
import { FiArrowUpRight } from "react-icons/fi";
import Modal from './Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {
  const [modalService, setModalService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out'
    });
  }, []);

  const openModal = (service) => {
    setModalService(service);
  };

  const closeModal = () => {
    setModalService(null);
  };

  return (
    <div className='w-full min-h-auto flex flex-col lg:flex-row  md:flex-col items-center justify-center  lg:px-10 lg:py-20 mt-10 mb-20'>
      <div className=' w-full lg:w-[30%] flex flex-col items-center justify-center mb-20 lg:mb-0'>
        <h1 className=" text-5xl :text-6xl font-bold text-black font-serif" data-aos='fade-zoom-in'>what we do</h1>
         <p className=' text-black lg:text-sm mt-5' data-aos='fade-in'>- Unveiling Alsum Farms' Agricultural Expertise - </p>

      </div>

      <section className=" flex items-center justify-center w-[90%] lg:w-[70%]  mx-40  lg:border-s-2 border-r-black">
        <div className=' w-[85%] grid grid-cols-1 lg:grid-cols-2 sm-grid-col-2 md:grid-1  gap-28 px-5 py-2'>
          {ServicesData.map(data => (
            <article key={data.title}>
              <p className="font-semibold uppercase tracking-wide text-md lg:text-2xl font-serif" data-aos='fade-in'>{data.title}</p>
              <p className="mt-4 leading-loose text-left " data-aos='fade-up'>{data.description}</p>

              <button
                type="button"
                className='mt-5 cursor-pointer  flex items-center justify-center gap-2 px-3 py-2 outline outline-1 hover:bg-slate-900 hover:text-white'
                data-aos='fade-up'
                onClick={() => openModal(data)}
              >
                View more <FiArrowUpRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      {modalService && <Modal service={modalService} onClose={closeModal}  />}
    </div>
  );
};

export default Services;
