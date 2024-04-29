import React from 'react';
import { Link } from 'react-router-dom';

import { FaCalendarAlt } from 'react-icons/fa';

const Calender = () => {
  return (
    <Link
      to='/calender'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <FaCalendarAlt size={25} />
      <div className='hidden md:block'>Calender</div>
    </Link>
  );
};

export default Calender;
