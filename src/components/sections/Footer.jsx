
import { FooterNav } from '../../constants/nav';
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const Footer = () => {
     const currentYear = new Date().getFullYear();
     
  return (
    <div className='w-full h-20px flex flex-col  items-center justify-between  py-5 '
    >
        <div className=" w-full   lg:w-full flex flex-col-reverse lg:flex-col  items-center justify-center  ">
            <div className=" w-full lg:w-[90%] h-[5%] flex flex-col  items-center justify-center gap-5 lg:gap-0 lg:flex-row  lg:justify-between ">
            
                 <div className=" flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-10 order-2 lg:order-1 ">
                <h1 className=' font-bold  lg:text-xl'>Alsum Farms Ghana</h1>
                <p className=' lg:text-xl'> <span className='font-bold text-2xl'> &copy;</span> {currentYear}  All rights reserved.</p>

                 
                
                </div>
                <div className=" w-full  lg:w-[70%]    lg:text-md  flex flex-col lg:flex-row items-center  justify-center lg:gap-10  gap-5 lg:justify-end   order-1 lg:order-2 ">
                    <ul className=' w-full flex items-center justify-center lg:justify-end gap-5 font-thin '>
                {
                    FooterNav.map(nav =>(
                      <NavLink to={nav.link} key={nav.name}
                      className={({ isActive, isPending, isTransitioning }) => `
        ${isActive ? 'font-bold border-b-2 border-green-700 text-green-600' : ''}
        ${isPending ? 'text-red-500' : 'text-black'}
        ${isTransitioning ? 'transform translate-x-4 opacity-0 duration-100' : 'transition-slide'}
      `} 
                      
                      
                      
                      >

                        <li >{nav.name}</li>
                      </NavLink>

                            ))
                        }
                        </ul>
            <ul className="flex items-center gap-5 ">
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
            </div>
        </div>

    </div>
  )
  
}

export default Footer