'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import { RiHome4Line, RiMenu3Fill } from 'react-icons/ri';

const navItems = [
  { name: 'Home', path: '/', icon: RiHome4Line },
  { name: 'Timeline', path: '/timeline', icon: IoTimeOutline },
  { name: 'Stats', path: '/stats', icon: ImStatsDots },
];

const Navbar = () => {
  
  const pathName = usePathname();
  const [dropDown, setDropDown] = useState(false);

  return (
    <nav className='max-w-400 mx-auto flex justify-between items-center p-5 md:px-10 relative'>
      <h1 className='font-bold text-2xl text-primary-text'>Keen<span className='font-semibold text-secondary-bg'>Keeper</span></h1>

      <button onClick={() => setDropDown(!dropDown)} className='sm:hidden active:translate-y-[0.5px]'>
        {
          dropDown ? <MdOutlineCancel size={24}/> : <RiMenu3Fill size={20} />
        }
      </button>

      <div className='hidden sm:flex justify-center items-center gap-2'>
        {
          navItems.map((item, i) => {
            const Icon = item.icon

            return <Link key={i} href={item.path} className={`btn flex justify-center items-center ${pathName === item.path && 'bg-secondary-bg text-primary-bg'}`}><Icon size={16} /> {item.name}</Link>
          })
        }
      </div>

      <div className={`flex flex-col sm:hidden gap-3 bg-white absolute top-20 transition-all duration-200 ${dropDown ? '-right-1' : '-right-50'} p-5 rounded-md shadow-sm`}>
        {
          navItems.map((item, i) => {
            const Icon = item.icon

            return <Link key={i} href={item.path} className={`btn flex justify-center items-center ${pathName === item.path && 'bg-secondary-bg text-primary-bg'}`}><Icon size={16} /> {item.name}</Link>
          })
        }
      </div>
    </nav>
  );
};

export default Navbar;