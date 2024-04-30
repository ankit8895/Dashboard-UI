import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaProjectDiagram } from 'react-icons/fa';

const ProjectOverview = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/';

  return (
    <Link
      to='/'
      className={`flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full gap-2 font-semibold md:mb-8 lg:mb-0 ${
        isActive ? 'bg-[#EB9B4B] text-white' : 'text-[#B3B3B3]'
      }`}
    >
      <FaProjectDiagram className='text-xs' />
      <div className='hidden md:block text-xs'>Project Overview</div>
    </Link>
  );
};

export default ProjectOverview;
