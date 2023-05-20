import Link from 'next/link';
import React from 'react';
import Nav from './layout/Nav';

const Header = () => {
  return (
    <header className="h-24 text-white bg-black bg-opacity-90 flex items-center justify-between w-full p-4 px-10">
      <img src="" alt="" />
      
      <Nav />
    </header>
  );
};

export default Header;
