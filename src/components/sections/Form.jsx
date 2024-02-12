import React from 'react';
import { FiSend } from 'react-icons/fi';
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form className=" w-full lg:w-[700px] h-[600px]  px-5 flex flex-col justify-center gap-10" onSubmit={handleSubmit} >
      
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-black peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-back peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-black peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-back peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email Address
        </label>
      </div>

      <textarea
      id="message"
      rows="10"
      className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border-2 border-gray-400 focus:ring-black focus:border-black"
      placeholder="Your Message..."
    ></textarea>

     <button
                type="submit"
                className=' w-[50%] lg:w-[15%] mt-5 cursor-pointer  flex items-center justify-center gap-5 px-3 py-2 outline outline-1 bg-slate-900 text-white'
              
              >
                SEND   <FiSend />
                
              </button>
    </form>
  );
};

export default Form;
