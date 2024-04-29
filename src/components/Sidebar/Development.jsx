import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillLaptopFill } from 'react-icons/bs';

const Development = () => {
  return (
    <Link
      to='/development'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <BsFillLaptopFill size={25} />
      <div className='hidden md:block'>Development</div>
    </Link>
  );
};

export default Development;
