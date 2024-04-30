import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IoMdSettings } from 'react-icons/io';

const Settings = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/settings';
  return (
    <Link
      to='/settings'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-4 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <IoMdSettings className='text-xs' />
      <div className='hidden md:block text-xs'>Settings</div>
    </Link>
  );
};

export default Settings;
