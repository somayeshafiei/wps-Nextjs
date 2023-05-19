import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import Layout from '@/components/kit/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get("/api/products/2");
  //     console.log(res.data);
  //   })();
  // });
  return (
    <>
      <Layout>
        <div className="flex-1">home</div>
      </Layout>
    </>
    // <>
    //   <h1>test</h1>
    //   <button
    //     onClick={async () => {
    //       const res = await axios.get("/api/cart");
    //       console.log(res.data);
    //     }}
    //   >
    //     get
    //   </button>
    //   <button
    //     onClick={async () => {
    //       const res = await axios.post("/api/cart", { id: 2 });
    //       console.log(res.data);
    //     }}
    //   >
    //     post
    //   </button>

    //   <button
    //     onClick={async () => {
    //       const res = await axios.get("/api/hello");
    //       console.log(res.data);
    //     }}
    //   >
    //     getUSers
    //   </button>
    //   <button
    //     onClick={async () => {
    //       const res = await axios.put("/api/hello", {
    //         id: 2,
    //         name: "mamad",
    //       });
    //       console.log(res.data);
    //     }}
    //   >
    //     edit user
    //   </button>
    // </>
  );
}

// export const getServerSideProps = () => {
//   // ...
//   process.env.NODE_ENV === "developement" ?
//   "http://localhost:port/api/endpoint" :
//   "felan.vercel.com"
// }
