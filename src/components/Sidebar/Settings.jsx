import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdSettings } from 'react-icons/io';

const Settings = () => {
  return (
    <Link
      to='/settings'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <IoMdSettings size={25} />
      <div className='hidden md:block'>Settings</div>
    </Link>
  );
};

export default Settings;
