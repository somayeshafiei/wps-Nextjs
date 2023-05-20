import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BreadCrumb from '../BreadCrumb';
import { useRouter } from 'next/router';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { Product } from '@/interfaces';

interface Props {
  children: ReactNode;
  title?: any;
  path?: string;
}
const Layout = ({ children, title, path }: Props) => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <>
      <main className="flex flex-col min-h-screen ">
        <Header />

        <BreadCrumb title={title} path={path}/>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
