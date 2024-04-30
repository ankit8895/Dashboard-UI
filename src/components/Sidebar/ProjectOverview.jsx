import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaProjectDiagram } from 'react-icons/fa';

const ProjectOverview = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to='/'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <FaProjectDiagram />
      <div className='hidden md:block'>Project Overview</div>
    </Link>
  );
};

export default ProjectOverview;
