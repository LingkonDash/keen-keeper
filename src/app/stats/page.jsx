'use client'

import usePieData from '@/data/usePieData';
import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const StatePage = () => {

  const data = usePieData();

  let dataValue = 0;
  data.forEach(item => dataValue += item.value)
  

  return (
    <div className='px-5 md:px-15 lg:px-30 py-25'>
      <h1 className='font-bold text-4xl'>Friendship Analytics</h1>


      <div className=' bg-white shadow-sm mt-10 rounded-lg py-10'>

        {
          dataValue === 0 ?
            <p className='text-secondary-text my-10 text-center'>No data found!</p>
            :
            <>
              <div className='flex justify-center items-center'>
                <div className='w-full h-75'>

                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={100}
                        outerRadius={140}
                        cornerRadius={6}
                        paddingAngle={2}
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>

                </div>
              </div>
              <div className='flex justify-center items-center gap-6 mt-6'>
                <div className='flex justify-center items-center text-lg gap-1 text-secondary-text'>
                  <div className='rounded-full w-3 h-3 bg-[#7E35E1]'></div>
                  <p>Text</p>
                </div>
                <div className='flex justify-center items-center text-lg gap-1 text-secondary-text'>
                  <div className='rounded-full w-3 h-3 bg-secondary-bg'></div>
                  <p>Call</p>
                </div>
                <div className='flex justify-center items-center text-lg gap-1 text-secondary-text'>
                  <div className='rounded-full w-3 h-3 bg-[#37A163]'></div>
                  <p>Video</p>
                </div>
              </div>
            </>
        }
      </div>
    </div>
  );
};

export default StatePage;