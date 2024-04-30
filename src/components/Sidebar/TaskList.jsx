import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsListTask } from 'react-icons/bs';

const TaskList = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/tasklist';
  return (
    <Link
      to='/tasklist'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-8 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <BsListTask className='text-xs' />
      <div className='hidden md:block text-xs'>Task List</div>
    </Link>
  );
};

export default TaskList;
