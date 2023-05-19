import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="flex flex-col min-h-screen ">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
