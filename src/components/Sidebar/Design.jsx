import React from 'react';
import { Link } from 'react-router-dom';

import { IoColorPalette } from 'react-icons/io5';

const Design = () => {
  return (
    <Link
      to='/design'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <IoColorPalette size={25} />
      <div className='hidden md:block'>Design</div>
    </Link>
  );
};

export default Design;
