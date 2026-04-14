import Image from 'next/image';
import React from 'react';
import faceBook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import keenKeeper from '../assets/logo-xl.png'


const Footer = () => {
  return (
    <footer className='bg-secondary-bg p-15 pb-5'>
      <div className='flex flex-col justify-center items-center space-y-3'>
        <div>
          <Image src={keenKeeper} alt='KeenKeeper' />
        </div>
        <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>

      <div className='space-y-2 mt-5'>
        <p className='font-medium text-xl text-white text-center'>Social Links</p>
        <div className='flex justify-center items-center gap-3'>
          <Image src={instagram} alt='facebook' width={40} height={40} />
          <Image src={faceBook} alt='facebook' width={40} height={40} />
          <Image src={twitter} alt='facebook' width={40} height={40} />
        </div>
      </div>

      <div className='divider mx-5'></div>

      <div className='grid grid-cols-2 text-gray-400'>
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className='flex justify-between items-center'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;