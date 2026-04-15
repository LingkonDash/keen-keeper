'use client'

import React, { useContext, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { LuMessageSquareText } from 'react-icons/lu';
import { MdOutlineVideocam } from 'react-icons/md';
import { StateContext } from '../globalState/GlobalProvider';


const ActionButtons = ({ item }) => {
  
  const [localData, setLocalData] = useContext(StateContext);

  function handleData(id) {
    
    const CallData = {
      person: item.name,
      type: id,
      date: new Date().toDateString()
    }
    
    localStorage.setItem('timeline', JSON.stringify([CallData, ...localData]));

    setLocalData([CallData, ...localData]);
  }

  return (
    <div className='col-span-3 p-8 bg-white rounded-lg shadow-sm flex justify-between flex-col select-none gap-3'>
      <h2 className='font-medium text-xl text-primary-text'>Quick Check-In</h2>

      <div className='grid grid-cols-3 gap-4 [&>div]:border [&_div]:font-medium [&_div]:text-primary-text  [&>div]:border-gray-200'>
        <div
          onClick={() => handleData('Call')}
          className=' hover:bg-gray-200 shadow-sm bg-gray-100 cursor-pointer active:translate-y-[0.7px] rounded-md text-lg p-4 flex justify-center items-center flex-col'
        >
          <FiPhoneCall size={18} />
          call
        </div>
        <div
          onClick={() => handleData('Text')}
          className=' hover:bg-gray-200 shadow-sm bg-gray-100 cursor-pointer active:translate-y-[0.7px] rounded-md text-lg p-4 flex justify-center items-center flex-col'
        >
          <LuMessageSquareText size={18} />
          Text
        </div>
        <div
          onClick={() => handleData('Video')}
          className=' hover:bg-gray-200 shadow-sm bg-gray-100 cursor-pointer active:translate-y-[0.7px] rounded-md text-lg p-4 flex justify-center items-center flex-col'
        >
          <MdOutlineVideocam size={24} />
          Video
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;