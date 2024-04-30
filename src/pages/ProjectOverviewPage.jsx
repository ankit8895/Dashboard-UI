import React from 'react';

import { FaAngleDown, FaPlus } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import TaskTable from '../components/TaskTable/TaskTable';

const ProjectOverviewPage = () => {
  return (
    <div className='container'>
      <div className='w-full h-40 flex justify-between items-end bg-[#C88241] text-white'>
        <div className='flex flex-col p-5'>
          <div className='text-sm '>Projects / My Project</div>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-3xl'>My Project</p>
            <FaAngleDown className='pt-1' />
          </div>
        </div>
        <div className='flex items-center justify-end gap-2 p-5'>
          <FaCalendarAlt />
          <p className='text-sm'>12 Feb 2023</p>
        </div>
      </div>

      <div className='flex justify-between items-start px-5 pt-5'>
        <div className='flex justify-start items-center gap-2 md:gap-8'>
          <div className='flex flex-col justify-start items-start gap-2 md:gap-6'>
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
              <p className='text-xs font-semibold p-1.5 bg-[#CDE6F5] rounded-md'>
                Development
              </p>
              <p className='text-xs font-semibold p-1.5 bg-[#D2F5CD] rounded-md'>
                UX Research
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
              <div className='border rounded-xl flex items-center gap-1 p-1'>
                <img
                  className='inline-block h-4 w-4 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <p className='text-xs font-semibold'>Hatypo Studio</p>
              </div>
              <div className='border rounded-xl flex items-center gap-1 p-1'>
                <p className='text-xs font-semibold'>+2 more</p>
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
              name='price'
              id='price'
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs placeholder:font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
              placeholder='Search task or project'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              {/* <select
                id='currency'
                name='currency'
                className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select> */}
              {/* <CiSearch className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm' /> */}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center p-5'>
        <button className='flex justify-center items-center gap-1 bg-[#EB9B4B] rounded-md p-3'>
          <p className='text-xs text-white font-semibold'>New task</p>
          <IoIosArrowDown className='rounded-full bg-[#F0AF6E] text-white' />
        </button>
        <div className='flex justify-around items-center gap-2'>
          <button className='flex justify-between items-center gap-2 rounded-md border border-gray-400 py-1 px-2'>
            <p className='text-gray-400 text-xs'>Filter</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
          <button className='flex justify-between items-center rounded-md border border-gray-400 py-1 px-2 gap-2'>
            <p className='text-gray-400 text-xs'>Sort</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
          <button className='flex justify-between items-center rounded-md border border-gray-400 py-1 px-2 gap-2'>
            <p className='text-gray-400 text-xs'>Label</p>
            <IoIosArrowDown className='text-gray-400 text-xs' />
          </button>
          <button className='flex justify-between items-center rounded-md border border-gray-400 py-1 px-2 gap-2'>
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
