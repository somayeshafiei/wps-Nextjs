import React from 'react';
import Nav from './layout/Nav';

const Footer = () => {
  return (
    <footer className="text-white bg-black bg-opacity-90 h-52 flex items-center justify-center pb-16">
      <div className="flex flex-col ">
        <Nav />
        <span> © 2022 WebStylePress-All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
