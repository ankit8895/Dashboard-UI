import React from 'react';
import { Link } from 'react-router-dom';

import { FaProjectDiagram } from 'react-icons/fa';

const ProjectOverview = () => {
  return (
    <Link
      to='/project-overview'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <FaProjectDiagram size={25} />
      <div className='hidden md:block'>Project Overview</div>
    </Link>
  );
};

export default ProjectOverview;
