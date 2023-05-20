import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center gap-5  p-2">
      <button className=" p-2 " onClick={() => router.push('/')}>
        Home
      </button>
      <button onClick={() => router.push('/about')}>About</button>
      <button onClick={() => router.push('/products')}>Products</button>
      <button onClick={() => router.push('/posts')}>Posts</button>
    </nav>
  );
};

export default Nav;
