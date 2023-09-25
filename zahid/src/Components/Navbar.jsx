
import React from 'react';
import img from '../images/yasir.png';

const Navbar = () => {
  return (
    <div className='bg-blue-950 py-5 flex justify-between items-center mb-2'>
      <div className="flex items-center gap-x-2"> {/* Wrap img and h1 in a flex container */}
        <img src={img} alt="Profile" className="h-10 w-10 rounded-full" /> {/* Adjust image size */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] text-transparent bg-clip-text">
          HORSELUX
        </h1>
      </div>
      <ul className='flex list-none gap-x-6 text-white'>
        
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Other's</li>
      </ul>
        
      <div className='flex gap-x-4'>
        <button type='button' className='border bg-blue-950 text-white rounded-full px-4 py-1'>Sign in</button>
        <button type='button' className='border bg-blue-950 text-white rounded-full px-4 py-1 mr-2'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;

