'use client'

import { StateContext } from '@/components/globalState/GlobalProvider';
import TimeLineCard from '@/components/timeline/TimeLineCard';
import { timeLineData } from '@/data/initialTimelineData'
import { useContext } from 'react';

const TimelinePage = () => {

  const [localData, setLocalData] = useContext(StateContext)

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

      {
        localData.length === 0 ?
          <div>
            <p className='text-lg text-secondary-text text-center mt-20'>No data found!</p>
          </div>
          :
          <div className='mt-10 space-y-6'>
            {
              localData.map((item, i) => <TimeLineCard key={i} item={item} />)
            }
          </div>
      }

      {/* NoDATA */}
      {/* <div>
        <p className='text-lg text-secondary-text text-center mt-20'>No data found!</p>
      </div> */}

    </div>
  );
};

export default TimelinePage;