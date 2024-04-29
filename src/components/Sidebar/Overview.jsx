import React from 'react';
import { Link } from 'react-router-dom';

import { LuGalleryHorizontal } from 'react-icons/lu';

const Overview = () => {
  return (
    <Link
      to='/overview'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <LuGalleryHorizontal size={25} />
      <div className='hidden md:block'>Overview</div>
    </Link>
  );
};

export default Overview;
