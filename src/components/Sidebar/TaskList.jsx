import React from 'react';
import { Link } from 'react-router-dom';

import { BsListTask } from 'react-icons/bs';

const TaskList = () => {
  return (
    <Link
      to='/tasklist'
      className='flex items-center justify-center md:justify-start gap4 rounded-md p-2 w-10 md:w-full'
    >
      <BsListTask size={25} />
      <div className='hidden md:block'>Task List</div>
    </Link>
  );
};

export default TaskList;
