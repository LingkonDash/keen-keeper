import { getData } from '@/data/getData';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = async () => {

  const data = await getData();

  let ontrack = 0;

  for(let obj of data) {
    if(obj.status === 'on-track') ontrack++
  }
  

  return (
    <div>
      <div className='flex justify-center items-center flex-col text-center pt-28 p-5'>
        <h2 className='font-bold text-4xl md:text-5xl text-primary-text'>Friends to keep close in your life</h2>
        <p className='text-secondary-text text-sm md:text-[1rem] mt-4 mb-8 max-w-lg md:max-w-xl'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>

        <button className='btn bg-secondary-bg text-white'><FaPlus /> Add a Friend</button>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-5 mt-5 [&_h3]:mb-2 [&>div]:border [&>div]:border-transparent [&>div]:hover:border-green-500 [&>div]:hover:-translate-y-[0.5px] [&>div]:transition-all'>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>{data.length}</h3>
          <p className='text-secondary-text'>Total Friends</p>
        </div>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>{ontrack}</h3>
          <p className='text-secondary-text'>On Track</p>
        </div>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>{data.length - ontrack}</h3>
          <p className='text-secondary-text'>Need Attention</p>
        </div>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>15</h3>
          <p className='text-secondary-text'>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;