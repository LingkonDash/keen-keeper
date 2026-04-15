import React from 'react';
import Loading from './Loading';
import Card from './Card';
import { getData } from '@/data/getData';
// export const dynamic = "force-static";

const Friends = async () => {

  const data = await getData();


  return (
    <div className='px-5'>
      <h2 className='text-2xl font-semibold text-primary-text'>Your Friends</h2>

      <div className='pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
        {
          data.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

export default Friends;