import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { GiNotebook } from 'react-icons/gi';

const Research = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/research';
  return (
    <Link
      to='/research'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-4 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <GiNotebook className='text-xs text-gray-500' />
      <div className='hidden md:block text-xs'>Research</div>
    </Link>
  );
};

export default Research;
