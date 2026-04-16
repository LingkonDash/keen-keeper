import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { HiOutlineHome } from 'react-icons/hi2';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-bg font-sans px-4 text-center">

      <h1 className="text-[100px] md:text-[150px] font-black text-secondary-bg leading-none">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold text-primary-text mt-4 mb-6">
        Page Not Found
      </h2>

      <p className="text-secondary-text md:text-xl max-w-md leading-relaxed mb-10">
        Looks like this friendship link is broken. The page you are looking for
        does not exist or has been moved.
      </p>

      <Link href='/'>
        <button className="flex items-center gap-2 btn bg-secondary-bg text-white px-8 py-7 rounded-md md:text-lg font-semibold">
          <HiOutlineHome className="text-xl md:text-2xl" />
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;