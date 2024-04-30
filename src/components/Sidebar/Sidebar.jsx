import React from 'react';
import { Link } from 'react-router-dom';

import SidebarItems from './SidebarItems';

import { IoIosArrowDown } from 'react-icons/io';
import { GoSun } from 'react-icons/go';
import { IoMoonOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className='h-screen border-r-[1px] py-4 sticky top-0 left-0 px-2 md:px-4 bg-[#F5F5F5]'>
      <div className='flex flex-col gap-6 md:gap-2 w-full h-full'>
        <Link to='/' className='pl-2 hidden md:block cursor-pointer'>
          <p className='text-lg font-extrabold'>
            <span className='text-[#EB9B6E]'>Task</span>mate
          </p>
          <p className='text-[#B7B7B7] text-xs'>Focus.Prioritize.Execute</p>
        </Link>
        <Link
          to='/'
          className='pl-2 hidden md:flex cursor-pointer rounded-lg border items-center justify-start gap-2'
        >
          <div className='py-2'>
            <img
              className='inline-block h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <p className='text-xs font-medium flex items-center gap-1'>
              Irvan Moses <IoIosArrowDown />
            </p>
            <p className='text-xs font-medium text-[#B1B1B1]'>
              irvanmoses10@gmail.com
            </p>
          </div>
        </Link>
        <Link
          to='/'
          className='block md:hidden rounded-md w-10 cursor-pointer text-xs font-bold'
        >
          <span className='text-[#EB9B6E]'>Task</span>mate
        </Link>
        <Link
          to='/'
          className='pl-2 flex md:hidden cursor-pointer items-center justify-start gap-2'
        >
          <div className=''>
            <img
              className='inline-block h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </div>
        </Link>
        <div className='flex flex-col gap-1 md:gap-4 lg:gap-1 cursor-pointer md:mt-4'>
          <SidebarItems />
        </div>
        <div className='flex items-center gap4 rounded-md w-10 md:w-full mt-auto justify-center md:justify-start'>
          <label
            htmlFor='Toggle'
            className='flex flex-col md:flex-row items-center p-1 rounded-xl cursor-pointer dark:text-black text-xs bg-[#EBEBEB]'
          >
            <input id='Toggle' type='checkbox' className='hidden peer' />
            <span className='px-3 py-1 dark:bg-[#FAFAFA] peer-checked:dark:bg-[#EBEBEB] flex items-center gap-1 rounded-xl'>
              <GoSun />
              <p className='hidden md:block'>Light</p>
            </span>
            <span className='px-3 py-1 dark:bg-[#EBEBEB] peer-checked:dark:bg-[#FAFAFA] flex items-center gap-1 rounded-xl'>
              <IoMoonOutline />
              <p className='hidden md:block'>Dark</p>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
