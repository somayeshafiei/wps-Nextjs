import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="h-24 text-white bg-black ">
      <div className="flex items-center justify-between w-full">
        <img src="" alt="" />
        <nav>
          <Link href={'/'}>
            <button>Home</button>
          </Link>
          <Link href={'about'}>
            <button>About</button>
          </Link>
          <Link href={'products'}>
            <button>Products</button>
          </Link>
          <Link href={'posts'}>
            <button>Posts</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
