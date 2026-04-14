import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='max-w-400 mx-auto'>
      <div className='flex justify-center items-center flex-col text-center pt-28 p-5'>
        <h2 className='font-bold text-5xl text-primary-text'>Friends to keep close in your life</h2>
        <p className='text-secondary-text mt-4 mb-8 max-w-xl'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>

        <button className='btn bg-secondary-bg text-white'><FaPlus /> Add a Friend</button>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-5 mt-5 [&_h3]:mb-2'>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>10</h3>
          <p className='text-secondary-text'>Total Friends</p>
        </div>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>3</h3>
          <p className='text-secondary-text'>On Track</p>
        </div>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>6</h3>
          <p className='text-secondary-text'>Need Attention</p>
        </div>
        <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
          <h3 className='font-semibold text-3xl text-secondary-bg'>12</h3>
          <p className='text-secondary-text'>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;