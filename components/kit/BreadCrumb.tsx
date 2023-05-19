import React, { useEffect } from 'react';

interface Props {
  pathName: string;
}

const BreadCrumb = ({ pathName }: Props) => {
  console.log(pathName);
  const splitedPath = pathName.split('/');
  splitedPath[0] = 'Home';
  const title = splitedPath[splitedPath.length - 1];
  return (
    <div className="flex items-center justify-between w-full p-5 bg-gray-200">
      <h2>{title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Home'}</h2>
      <div className="flex">
        {pathName !== '/' && <span>{splitedPath.join('/')}</span>}
      </div>
    </div>
  );
};

export default BreadCrumb;
