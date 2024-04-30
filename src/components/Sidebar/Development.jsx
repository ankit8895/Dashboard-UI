import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsFillLaptopFill } from 'react-icons/bs';

const Development = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/development';
  return (
    <Link
      to='/development'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-8 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <BsFillLaptopFill className='text-xs text-black' />
      <div className='hidden md:block text-xs'>Development</div>
    </Link>
  );
};

export default Development;
