import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerHeight = 200; 

    setIsVisible(scrollY > triggerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed  bottom-4 right-4 bg-green-700   text-white p-4 rounded-full hover:bg-black"
        >
         <div className="">
            <FaArrowUp />

            </div>
        </button>
      )}
    </div>
  );
};

export default GoTop;
