import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BreadCrumb from '../BreadCrumb';
import { useRouter } from 'next/router';


interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>

        <main className="flex flex-col min-h-screen ">
          <Header />

          <BreadCrumb pathName={router.pathname} />
          {children}
          <Footer />
        </main>

    </>
  );
};

export default Layout;
