import Image from 'next/image';
import React from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { LuMessageSquareText } from 'react-icons/lu';
import { MdOutlineVideocam } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

const FriendDetails = async ({ params }) => {

  const { id } = await params;

  const res = await fetch('http://localhost:3000/friends.json')
  const data = await res.json();

  const item = data.find(obj => obj.id === parseInt(id))


  return (
    <div className='grid md:grid-cols-5 max-w-400 pt-30 pb-15 mx-auto px-5 gap-5'>

      {/* main box first row first col*/}
      <div className='flex justify-center items-center flex-col gap-3 col-span-3 md:col-span-2 row-span-2 p-6 bg-white shadow-sm rounded-md text-center'>
        <div className='overflow-hidden w-25 h-25 bg-gray-300 rounded-full relative'>
          <Image src={item.picture} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover' />
        </div>
        <div className=' flex justify-center items-center flex-col gap-2'>

          <h2 className='font-semibold text-primary-text text-xl'>{item.name}</h2>
          <div>
            {
              item.status === 'on-track' && <div className="badge badge-success font-medium ">On-Track</div> ||
              item.status === 'almost due' && <div className="badge badge-warning font-medium">Almost Due</div> ||
              item.status === 'overdue' && <div className="badge badge-error bg-[#EF4444] font-medium">Overdue</div>
            }
          </div>
          <div className='flex justify-center items-center gap-2 flex-wrap'>
            {
              item.tags.map((tag, i) => <div key={i} className="badge badge-soft badge-success text-xs bg-[#CBFADB] font-medium text-secondary-bg uppercase"> {tag} </div>)
            }
          </div>
        </div>

        <p className='font-medium italic text-secondary-text'>&quot;{item.bio}&quot;</p>

        <p className='text-sm text-secondary-text'>Preferred: {item.email}</p>
      </div>

      {/* side boxes //firs row */}
      <div className='col-span-3 md:col-span-1 text-center flex justify-center gap-3 items-center flex-col p-5 bg-white rounded-lg shadow-sm'>
        <h3 className='font-semibold text-3xl text-secondary-bg'>{item.days_since_contact}</h3>
        <p className='text-secondary-text'>Days Since Contact</p>
      </div>

      <div className='col-span-3 md:col-span-1 text-center flex justify-center gap-3 items-center flex-col p-5 bg-white rounded-lg shadow-sm'>
        <h3 className='font-semibold text-3xl text-secondary-bg'>{item.goal}</h3>
        <p className='text-secondary-text'>Goal (Days)</p>
      </div>

      <div className='col-span-3 md:col-span-1 text-center flex justify-center gap-3 items-center flex-col p-5 bg-white rounded-lg shadow-sm'>
        <h3 className='font-semibold text-3xl text-secondary-bg'>{item.next_due_date}</h3>
        <p className='text-secondary-text'>Next Due</p>
      </div>


      {/* second row */}
      <div className='col-span-3 text-center p-8 bg-white rounded-lg shadow-sm flex justify-around flex-col'>

        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-xl text-primary-text'>Relationship Goal</h2>
          <button className='btn'>Edit</button>
        </div>
        <p className='text-secondary-text text-lg text-left'>Connect every <span className='font-semibold text-primary-text'>{item.goal} days</span></p>
      </div>

      {/* third row */}
      <div className='col-span-3 md:col-span-2 flex justify-center items-center gap-3 flex-col [&>div]:cursor-pointer [&>div]:active:translate-y-[0.7px] [&>div]:hover:border-blue-500 [&>div]:border-transparent [&>div]:border'>
        <div className='text-center w-full py-4 bg-white rounded-md shadow-sm flex justify-center items-center gap-2 text-primary-text font-medium'>
          <HiOutlineBellSnooze size={20} />
          <p>Snooze 2 weeks</p>
        </div>
        <div className='text-center w-full py-4 bg-white rounded-md shadow-sm flex justify-center items-center gap-2 text-primary-text font-medium'>
          <FiArchive size={18} />
          <p>Archive</p>
        </div>
        <div className='text-center w-full py-4 bg-white rounded-md shadow-sm flex justify-center items-center gap-2 text-[#EF4444] font-medium'>
          <RiDeleteBin5Line size={18} />
          <p>Delete</p>
        </div>
      </div>

      {/* last row */}
      <div className='col-span-3 p-8 bg-white rounded-lg shadow-sm flex justify-between flex-col select-none gap-3'>

        <h2 className='font-medium text-xl text-primary-text'>Quick Check-In</h2>

        <div className='grid grid-cols-3 gap-4 [&>div]:border [&_div]:font-medium [&_div]:text-primary-text  [&>div]:border-gray-200'>
          <div className=' hover:bg-gray-200 shadow-sm bg-gray-100 cursor-pointer active:translate-y-[0.7px] rounded-md text-lg p-4 flex justify-center items-center flex-col'>
            <FiPhoneCall size={18}/>
            call
          </div>
          <div className=' hover:bg-gray-200 shadow-sm bg-gray-100 cursor-pointer active:translate-y-[0.7px] rounded-md text-lg p-4 flex justify-center items-center flex-col'>
            <LuMessageSquareText size={18}/>
            Text
          </div>
          <div className=' hover:bg-gray-200 shadow-sm bg-gray-100 cursor-pointer active:translate-y-[0.7px] rounded-md text-lg p-4 flex justify-center items-center flex-col'>
            <MdOutlineVideocam size={24}/>
            Video
          </div>
        </div>
      </div>

    </div>
  );
};

export default FriendDetails