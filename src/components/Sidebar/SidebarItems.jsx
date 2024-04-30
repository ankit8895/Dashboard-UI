import React, { useState } from 'react';

import Overview from './Overview';
import TaskList from './TaskList';
import ProjectOverview from './ProjectOverview';
import Calender from './Calender';
import Settings from './Settings';
import Personal from './Personal';
import Design from './Design';
import Development from './Development';
import Research from './Research';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SidebarItems = () => {
  const [isHiddenFirst, setIsHiddenFirst] = useState(false);
  const [isHiddenSecond, setIsHiddenSecond] = useState(false);

  const toggleDropdownFirst = () => {
    setIsHiddenFirst(!isHiddenFirst);
  };

  const toggleDropdownSecond = () => {
    setIsHiddenSecond(!isHiddenSecond);
  };

  return (
    <>
      <div className='hidden md:block flex-none p-2'>
        <button
          className='flex flex-row items-center justify-between w-48 px-2 focus:outline-none'
          onClick={toggleDropdownFirst}
        >
          <span className='select-none text-xs text-[#B3B3B3] font-semibold'>
            Menu
          </span>

          <MdOutlineKeyboardArrowUp
            size={20}
            className={`text-[#B3B3B3] ${
              isHiddenFirst ? 'hidden' : ''
            } text-xs font-semibold`}
          />

          <MdKeyboardArrowDown
            size={20}
            className={`text-[#B3B3B3] ${
              isHiddenFirst ? '' : 'hidden'
            } text-xs font-semibold`}
          />
        </button>
        <div
          className={`px-2 md:mt-8 lg:mt-2 ${isHiddenFirst ? 'hidden' : ''}`}
        >
          <Overview />
          <TaskList />
          <ProjectOverview />
          <Calender />
          <Settings />
        </div>
      </div>

      <div className='hidden md:block flex-none p-2'>
        <button
          className='flex flex-row items-center justify-between w-48 px-2 focus:outline-none'
          onClick={toggleDropdownSecond}
        >
          <span className='select-none text-xs text-[#B3B3B3] font-semibold'>
            List
          </span>
          <MdOutlineKeyboardArrowUp
            size={20}
            className={`text-[#B3B3B3] ${
              isHiddenSecond ? 'hidden' : ''
            } text-xs font-semibold`}
          />
          <MdKeyboardArrowDown
            size={20}
            className={`text-[#B3B3B3] ${
              isHiddenSecond ? '' : 'hidden'
            } text-xs font-semibold`}
          />
        </button>
        <div
          className={`px-2 md:mt-8 lg:mt-2 ${isHiddenSecond ? 'hidden' : ''}`}
        >
          <Personal />
          <Design />
          <Development />
          <Research />
        </div>
      </div>
      <div className='flex flex-col md:hidden gap-6 cursor-pointer'>
        <Overview />
        <TaskList />
        <ProjectOverview />
        <Calender />
        <Settings />
        <Personal />
        <Design />
        <Development />
        <Research />
      </div>
    </>
  );
};

export default SidebarItems;
