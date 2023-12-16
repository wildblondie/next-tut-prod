import Link from 'next/link';
import React from 'react';

const Homepage = () => {
  console.log('Home page'); // Do not show in browser console

  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>NextJS Tutorial</h1>
      <Link href='/client' className='btn btn-accent'>
        get started
      </Link>
    </div>
  );
};

export default Homepage;
