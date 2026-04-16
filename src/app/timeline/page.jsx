'use client'

import { StateContext } from '@/components/globalState/GlobalProvider';
import TimeLineCard from '@/components/timeline/TimeLineCard';
import { useContext, useEffect, useState } from 'react';

const TimelinePage = () => {

  const [localData] = useContext(StateContext)

  const [data, setData] = useState([]);

  
  useEffect(() => {
    setData(localData);
  }, [localData]);


  function handleSort(id) {
    if (id === 'text') {
      const newData = localData.filter(item => item.type === 'Text');
      setData(newData);
    } else if (id === 'call') {
      const newData = localData.filter(item => item.type === 'Call')
      setData(newData)
    } else if (id === 'video') {
      const newData = localData.filter(item => item.type === 'Video')
      setData(newData)
    } else setData(localData);
  }

  return (
    <div className='px-5 md:px-15 lg:px-30 py-30'>

      <div className='space-y-6'>
        <h2 className='font-bold text-primary-text text-4xl'>Timeline</h2>
        <div>
          <select onChange={(e) => handleSort(e.target.value)} defaultValue="Pick a color" className="select">
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
            <p className='text-lg text-secondary-text text-center mt-20'>
              No data found!
            </p>
          </div>
         : data.length === 0 ? 
          <div>
            <p className='text-lg text-secondary-text text-center mt-20'>
              No matching results!
            </p>
          </div>
         : 
          <div className='mt-10 space-y-6'>
            {
              data.map((item, i) => (<TimeLineCard key={i} item={item} />))
            }
          </div>
      }

    </div>
  );
};

export default TimelinePage;