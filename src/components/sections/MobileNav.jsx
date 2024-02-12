import React, { useState } from 'react';
import { TopNav } from '../../constants/nav';
import { NavLink } from 'react-router-dom';
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram, TiMail, TiPhone } from 'react-icons/ti';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-[80px]  flex items-center  justify-between lg:hidden text-black px-5 '  onClick={toggleMenu}>
      <div className=''>
        <NavLink to='/'>

          <img src="/video/alsum.png " alt=" logo" width={150} height={150} />
        </NavLink>
      </div>
      <nav
          className={`w-[70%] md:w-[50%] fixed top-0 right-0 h-screen z-10 flex flex-col bg-white items-center justify-start md:justify-center md:gap-20 shadow-xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          type='button'
          onClick={toggleMenu}
          className='mt-5 cursor-pointer  flex items-center justify-center rounded-full bg-black text-white p-2 outline outline-1 outline-black'
        >
          close
        </button>

        <ul className='flex flex-col gap-8  text-md bg-white mt-20'>
          {TopNav.map((nav) => (
            <NavLink to={nav.link} key={nav.name} className={()=>`hover:text-green-500 duration-500`}> 
                 <li >{nav.name}</li>
             </NavLink>
          ))}
        </ul>

        <div className='w-full flex flex-col items-center text-sm gap-5 px-10  mt-20 '>
          <p className='flex items-center gap-2'>
          
            <TiPhone size={20} /> +233 550-000-000
          </p>
          <p className='flex items-center gap-2'>
            {' '}
            <TiPhone size={20} /> +233 550-000-000
          </p>
          <p className='flex items-center gap-2'>
            <TiMail size={20} /> info@alsumfarmsghana.com
          </p>

          <ul className='flex items-center gap-5 '>
            <li>
              <TiSocialFacebook size={20} />
            </li>
            <li>
              <TiSocialInstagram size={20} />
            </li>
            <li>
              <TiSocialLinkedin size={20} />
            </li>
          </ul>
        </div>
      </nav>
      <button
        type='button'
        onClick={toggleMenu}
        className='mt-5 cursor-pointer font-mono flex items-center justify-center gap-2 px-3 py-2 outline outline-1 outline-black hover:bg-slate-900 hover:text-white'
      >
         menu
      </button>
    </div>
  );
};

export default MobileNav;
