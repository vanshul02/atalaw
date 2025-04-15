import React, { useState } from 'react';
import BarsIcon from '../assets/img/bars.png';
import CloseIcon from '../assets/img/close.png';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='lg:hidden relative z-20'>
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt="Open menu" />
      </button>
      <ul
        className={`${isOpen ? 'right-0' : '-right-full'
          } bg-primary fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        <button onClick={() => setIsOpen(false)} className='absolute top-6 left-6'>
          <img src={CloseIcon} alt="Close menu" />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.href} onClick={() => setIsOpen(false)} className='hover:text-accent-hover transtion-all duration-300 cursor-pointer' spy={true} offset={-200} activeClass="active" smooth={true} duration={500}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
