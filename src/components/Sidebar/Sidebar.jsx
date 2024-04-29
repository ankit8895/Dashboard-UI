import React from 'react';
import { Link } from 'react-router-dom';

import SidebarItems from './SidebarItems';

const Sidebar = () => {
  return (
    <div className='h-screen border-r-[1px] py-8 sticky top-0 left-0 px-2 md:px-4'>
      <div className='flex flex-col gap-10 w-full h-full'>
        <Link to='/' className='pl-2 hidden md:block cursor-pointer'>
          Licon
        </Link>
        <Link
          to='/'
          className='p-2 block md:hidden rounded-md w-10 cursor-pointer'
        >
          Sicon
        </Link>
        <div className='flex flex-col gap-5 cursor-pointer'>
          <SidebarItems />
        </div>
        <div className='flex items-center gap4 rounded-md p-2 w-10 md:w-full mt-auto justify-center md:justify-start'>
          <button className='hidden md:block'>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
