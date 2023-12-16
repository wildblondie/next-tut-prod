import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>NextJS Tutorial</h1>
      <Link href='/client' className='text-2xl'>
        home page
      </Link>
    </div>
  );
};

export default AboutPage;
