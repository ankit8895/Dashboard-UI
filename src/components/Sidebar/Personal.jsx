import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsFillEmojiSunglassesFill } from 'react-icons/bs';

const Personal = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/personal';
  return (
    <Link
      to='/personal'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-8 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <BsFillEmojiSunglassesFill className='text-xs text-yellow-500' />
      <div className='hidden md:block text-xs'>Personal</div>
    </Link>
  );
};

export default Personal;
