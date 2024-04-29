import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillEmojiSunglassesFill } from 'react-icons/bs';

const Personal = () => {
  return (
    <Link
      to='/personal'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <BsFillEmojiSunglassesFill size={25} />
      <div className='hidden md:block'>Personal</div>
    </Link>
  );
};

export default Personal;
