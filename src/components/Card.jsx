import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ item }) => {
  return (
    <Link href={`/friend/${item.id}`} className='h-full'>
      <div className='p-6 w-80 sm:w-full mx-auto h-full text-center space-y-3 bg-white shadow-sm rounded-lg flex justify-center items-center flex-col hover:-translate-y-1 hover:shadow-md cursor-pointer border transition-all border-transparent hover:border-blue-500'>

        <div className='overflow-hidden w-25 h-25 bg-gray-300 rounded-full relative'>
          <Image src={item.picture} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover' />
        </div>

        <div className='space-y-2'>

          <h2 className='font-semibold text-primary-text text-xl'>{item.name}</h2>
          <p className='text-secondary-text text-sm'>{item.days_since_contact}d ago</p>
          <div className='flex justify-center items-center gap-2 flex-wrap'>
            {
              item.tags.map((tag, i) => <div key={i} className="badge badge-soft badge-success text-xs bg-[#CBFADB] font-medium text-secondary-bg uppercase"> {tag} </div>)
            }
          </div>
          <div>
            {
              item.status === 'on-track' && <div className="badge badge-success font-medium ">On-Track</div> ||
              item.status === 'almost due' && <div className="badge badge-warning font-medium">Almost Due</div> ||
              item.status === 'overdue' && <div className="badge badge-error bg-[#EF4444] font-medium">Overdue</div>
            }
          </div>

        </div>
      </div>
    </Link>
  );
};

export default Card;