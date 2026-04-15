import TimeLineCard from '@/components/timeline/TimeLineCard';
import React from 'react';

import { timeLineData } from '@/data/initialTimelineData'


const TimelinePage = () => {
  return (
    <div className='px-5 md:px-15 lg:px-30 py-30'>

      <div className='space-y-6'>
        <h2 className='font-bold text-primary-text text-4xl'>Timeline</h2>
        <div>
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Filter Timeline</option>
            <option value="all">All</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </div>
      </div>

      <div className='mt-10 space-y-6'>
        {
          timeLineData.map((item, i) => <TimeLineCard key={i} item={item} />)
        }
      </div>

    </div>
  );
};

export default TimelinePage;