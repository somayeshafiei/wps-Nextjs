import Link from 'next/link';
import React from 'react';

interface Props {
  title?: string;
  path?: string;
}

const BreadCrumb = ({ title = '', path = '' }: Props) => {
  const splitedPath = title.split('/');
  // splitedPath[0] = 'Home';
  // const titler = splitedPath[splitedPath.length - 1];
  return (
    <div className="flex items-center justify-between w-full p-12 bg-gray-200">
      <h2 className="text-3xl font-bold">
        {/* {titler ? titler.charAt(0).toUpperCase() + titler.slice(1) : 'Home'} */}
        {/* {title !== 'home'} */}
        {path ? path : title !== '' && `${title}`}
      </h2>
      <div className="flex max-w-sm">
        {title !== 'WELLCOME TO WEBSTYLEPRESS' && (
          <span>
            <Link href="/">Home</Link>/<span>{title}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
