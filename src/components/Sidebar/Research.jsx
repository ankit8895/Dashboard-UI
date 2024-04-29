import React from 'react';
import { Link } from 'react-router-dom';

import { GiNotebook } from 'react-icons/gi';

const Research = () => {
  return (
    <Link
      to='/research'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <GiNotebook size={25} />
      <div className='hidden md:block'>Research</div>
    </Link>
  );
};

export default Research;
