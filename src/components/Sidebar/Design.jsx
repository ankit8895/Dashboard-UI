import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IoColorPalette } from 'react-icons/io5';

const Design = () => {
  const { pathname } = useLocation();

  const isActive = pathname === '/design';
  return (
    <Link
      to='/design'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-8 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <IoColorPalette className='text-xs text-yellow-500' />
      <div className='hidden md:block text-xs'>Design</div>
    </Link>
  );
};

export default Design;
