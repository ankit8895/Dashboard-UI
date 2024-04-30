import React from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsThreeDots } from 'react-icons/bs';
import { FaSquarePlus } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { CiClock2 } from 'react-icons/ci';

const TaskTable = () => {
  return (
    <table className='table-auto bg-[#F5F5F5] rounded-lg'>
      <thead>
        <tr>
          <th className='p-1'>
            <div className='flex justify-between items-center px-3 py-1 bg-white rounded-md'>
              <div className='flex justify-center items-center'>
                <p className='text-sm'>Todo</p>
                <RxDotFilled className='text-[#EB8D56]' />
              </div>
              <div className='flex justify-center items-center gap-1'>
                <BsThreeDots className='text-gray-400' />
                <FaSquarePlus className='text-gray-400' />
              </div>
            </div>
          </th>

          <th className='p-1'>
            <div className='flex justify-between items-center px-3 py-1 bg-white rounded-md'>
              <div className='flex justify-center items-center'>
                <p className='text-sm'>In Progress</p>
              </div>
              <div className='flex justify-center items-center gap-1'>
                <BsThreeDots className='text-gray-400' />
                <FaSquarePlus className='text-gray-400' />
              </div>
            </div>
          </th>

          <th className='p-1'>
            <div className='flex justify-between items-center px-3 py-1 bg-white rounded-md'>
              <div className='flex justify-center items-center'>
                <p className='text-sm'>Complete</p>
                <RxDotFilled className='text-[#5BBE88]' />
              </div>
              <div className='flex justify-center items-center gap-1'>
                <BsThreeDots className='text-gray-400' />
                <FaSquarePlus className='text-gray-400' />
              </div>
            </div>
          </th>

          <th className='p-1'>
            <div className='flex justify-between items-center px-3 py-1 bg-white rounded-md'>
              <div className='flex justify-center items-center'>
                <p className='text-sm'>Overdue</p>
              </div>
              <div className='flex justify-center items-center gap-1'>
                <BsThreeDots className='text-gray-400' />
                <FaSquarePlus className='text-gray-400' />
              </div>
            </div>
          </th>

          <th className='p-1'>
            <div className='flex justify-between items-center px-3 py-1 bg-white rounded-md'>
              <div className='flex justify-center items-center'>
                <BsThreeDots className='text-gray-400' />
              </div>
              <div className='flex justify-center items-center gap-1'>
                <GoPlus className='text-gray-400' />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#F5EBC8] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <IoMdStar className='text-[#E19141]' />
                  <p className='text-xs font-semibold'>Today</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Create a Visual Style Guide
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  09:00 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#F0DCC8] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <IoMdStar className='text-[#E19141]' />
                  <p className='text-xs font-semibold'>Today</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Testing and User Feedback
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  09:00 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#EBEBEB] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <CiClock2 />
                  <p className='text-xs font-semibold'>Today</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>Meetings with Client</p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  09:00 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#EBEBEB] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <CiClock2 />
                  <p className='text-xs font-semibold'>24 Feb 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Create Mockups for Dribble Shot
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-32'></td>
        </tr>

        <tr>
          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#CDE6F5] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <p className='text-xs font-semibold'>18 Feb 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>Slicing Landing Page</p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#D2F5CD] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <p className='text-xs font-semibold'>13 Feb 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>Analyze Research Data</p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#EBEBEB] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <CiClock2 />
                  <p className='text-xs font-semibold'>Today</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Develop Back-End Systems
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#EBEBEB] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <CiClock2 />
                  <p className='text-xs font-semibold'>24 Feb 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Optimize Web Performance
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-32'></td>
        </tr>

        <tr>
          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#F0DCC8] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <IoMdStar className='text-[#E19141]' />
                  <p className='text-xs font-semibold'>28 Feb 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Testing and User Feedback
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  09:00 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#F5EBC8] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <p className='text-xs font-semibold'>14 Feb 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  UX Research: Usability Testing
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#EBEBEB] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <CiClock2 />
                  <p className='text-xs font-semibold'>Today</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>
                  Implement Security Features
                </p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  07:30 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'></td>

          <td className='p-1 w-32'></td>
        </tr>

        <tr>
          <td className='p-1 w-60'>
            <div className='flex flex-col justify-between items-start gap-2 md:gap-4 p-3 bg-[#D2F5CD] rounded-2xl'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-1'>
                  <IoMdStar className='text-[#E19141]' />
                  <p className='text-xs font-semibold'>02 Mar 2023</p>
                </div>
                <div className='flex items-center justify-center'>
                  <BsArrowUpRightCircle size={22} />
                </div>
              </div>

              <div className='text-start w-40'>
                <p className='text-lg font-semibold'>Create User</p>
              </div>

              <div className='flex items-center justify-between w-full'>
                <p className='text-xs text-[#86959A] font-semibold'>
                  09:00 AM - 09:30 AM
                </p>
                <div className='flex -space-x-1 overflow-hidden'>
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <img
                    className='inline-block h-4 w-4 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </td>

          <td className='p-1 w-60'></td>

          <td className='p-1 w-60'></td>

          <td className='p-1 w-60'></td>

          <td className='p-1 w-32'></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TaskTable;
