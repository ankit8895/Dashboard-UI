import React from 'react';

import { FaAngleDown, FaPlus } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import TaskTable from '../components/TaskTable/TaskTable';

const ProjectOverviewPage = () => {
  return (
    <div className='container'>
      <div className='w-full h-40 flex flex-col md:flex-row justify-between md:items-end bg-[url("/background.png")] bg-cover text-white'>
        <div className='flex flex-col p-5'>
          <div className='text-xs md:text-sm '>Projects / My Project</div>
          <div className='flex md:justify-center items-center gap-2'>
            <p className='text-2xl md:text-3xl'>My Project</p>
            <FaAngleDown className='pt-1' />
          </div>
        </div>
        <div className='flex items-center md:justify-end gap-2 p-5'>
          <FaCalendarAlt />
          <p className='text-sm'>12 Feb 2023</p>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-4 md:gap-10 lg:flex-row lg:flex-nowrap justify-between items-start px-5 pt-5 md:mb-8 lg:mb-0'>
        <div className='flex justify-start items-center gap-4 md:gap-8'>
          <div className='flex flex-col justify-start items-start gap-4 md:gap-6'>
            <p className='text-xs text-slate-400'>Priority</p>
            <p className='text-xs text-slate-400'>Due Date</p>
            <p className='text-xs text-slate-400'>Tags</p>
            <p className='text-xs text-slate-400'>Assignees</p>
          </div>
          <div className='flex flex-col justify-start items-start gap-2 md:gap-4'>
            <div className='text-xs text-center p-1.5 font-semibold bg-[#F0F0F0] w-min rounded-md'>
              Medium
            </div>
            <div className='text-xs font-semibold'>28 Feb 2023</div>
            <div className='flex justify-center items-center gap-2'>
              <p className='text-xs font-semibold p-1.5 bg-[#F0DCC8] rounded-md'>
                Meetings
              </p>
              <p className='text-xs font-semibold p-1.5 bg-[#F5EBC8] rounded-md'>
                UI Design
              </p>
              <p className='text-xs font-semibold p-1.5 bg-[#CDE6F5] rounded-md hidden md:block'>
                Development
              </p>
              <p className='text-xs font-semibold p-1.5 bg-[#D2F5CD] rounded-md hidden md:block'>
                UX Research
              </p>
              <p className='md:hidden text-xs font-semibold rounded-full p-1.5 bg-[#EBEBEB]'>
                <FaPlus size={12} />
              </p>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <div className='border rounded-xl flex items-center gap-1 p-1'>
                <img
                  className='inline-block h-4 w-4 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <p className='text-xs font-semibold'>Irvan Moses</p>
              </div>
              <div className='border rounded-xl items-center gap-1 p-1 hidden md:flex'>
                <img
                  className='inline-block h-4 w-4 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <p className='text-xs font-semibold'>Hatypo Studio</p>
              </div>
              <div className='border rounded-xl flex items-center gap-1 p-1'>
                <p className='hidden md:block text-xs font-semibold'>+2 more</p>
                <p className='md:hidden text-xs font-semibold'>+3 more</p>
              </div>
              <div className='border rounded-full flex items-center gap-1 p-0.5 bg-[#EBEBEB]'>
                <FaPlus size={12} />
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='relative rounded-md shadow-sm'>
            <input
              type='text'
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs placeholder:font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
              placeholder='Search task or project'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <svg
                className='text-gray-400 h-5 w-5 absolute top-2 right-3 fill-current dark:text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 56.966 56.966'
                xmlSpace='preserve'
              >
                <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start gap-2 md:items-center p-5'>
        <button className='flex justify-center items-center gap-1 bg-[#EB9B4B] rounded-md p-2 md:p-3'>
          <p className='text-xs text-white font-semibold'>New task</p>
          <IoIosArrowDown className='rounded-full bg-[#F0AF6E] text-white' />
        </button>
        <div className='flex justify-around items-center gap-2'>
          <button className='flex justify-between items-center gap-2 rounded-md border border-gray-400 p-1.5 md:py-1 md:px-2'>
            <p className='text-gray-400 text-xs'>Filter</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
          <button className='flex justify-between items-center rounded-md border border-gray-400 p-1.5 md:py-1 md:px-2'>
            <p className='text-gray-400 text-xs'>Sort</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
          <button className='flex justify-between items-center rounded-md border border-gray-400 p-1.5 md:py-1 md:px-2'>
            <p className='text-gray-400 text-xs'>Label</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
          <button className='flex justify-between items-center rounded-md border border-gray-400 p-1.5 md:py-1 md:px-2'>
            <p className='text-gray-400 text-xs'>Category</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
        </div>
      </div>

      <div className='px-5 overflow-auto'>
        <TaskTable />
      </div>
    </div>
  );
};

export default ProjectOverviewPage;
