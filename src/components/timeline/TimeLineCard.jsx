import Image from 'next/image';
import React from 'react';
import callPng from '../../assets/call.png';
import textPng from '../../assets/text.png';
import videoPng from '../../assets/video.png';

const TimeLineCard = ({ item }) => {
  return (
    <div className='flex justify-start items-center gap-5 px-5 py-3 bg-white rounded-xl border border-gray-200 shadow-sm'>
      <div>
        <Image src={item.type === 'Call' && callPng || item.type === 'Text' && textPng || item.type === 'Video' && videoPng} alt='callPng' width={40} height={40} />
      </div>

      <div className='space-y-1'>
        <p className='text-secondary-text'><span className='font-medium text-lg text-primary-text'>{item.type}</span> With with {item.person}</p>
        <p className='text-secondary-text'>{item.date}</p>
      </div>
    </div>
  );
};

export default TimeLineCard;