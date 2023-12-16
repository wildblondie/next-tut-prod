// By defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
'use client'; // try without: ReactServerComponentsError❗

import { useState } from 'react';

const Client = () => {
  const [count, setCount] = useState(0);
  console.log('client component');

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  );
};

export default Client;
