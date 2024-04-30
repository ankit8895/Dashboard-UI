import React from 'react';
import Loading from '../constant/animationComponent/Loading';

const DevelopmentPage = () => {
  return (
    <div className='h-full w-full flex flex-col gap-4 items-center justify-center'>
      <Loading />
      <p className='text-lg font-extrabold'>Move to Project Overview</p>
    </div>
  );
};

export default DevelopmentPage;
