import Layout from '@/components/kit/layout';
import { Product } from '@/interfaces';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
interface Props {
  product: Product;
}
const SingleProduct = ({ product }: Props) => {
  const router = useRouter();
  return (
    <Layout title={`Products/${product.title}`} path={product.title}>
      <div className="flex-1 grid grid-cols-12 px-20 py-10">
        <div className="flex col-span-12 md:col-span-6 w-full aspect-square h-[500px]">
          <img src={product.images[1]} alt="" className="h-full" />
        </div>
        <div className="col-span-12 md:col-span-6">
          <h1 className="font-bold text-4xl">{product.title}</h1>
          <p className="pt-2 text-md font-bold">${product.price}</p>
          <p className="pt-6">{product.description}</p>
          <div className="flex items-center gap-5 pt-10">
            <button
              className="bg-blue-500 text-white py-1 px-3"
              onClick={() => router.back()}
            >
              Back
            </button>
            <Link href="/products">
              <button className="bg-blue-500 text-white py-1 px-3">
                Navigate to products
              </button>
            </Link>
            <button
              className="bg-pink-500 text-white py-1 px-3"
              onClick={async () => {
                const res = await axios.post('/api/cart', {
                  id: `${product.id}`,
                });
                console.log(res.data);
              }}
            >
              add to cart
            </button>
            <button
              onClick={async () => {
                const res = await axios.get('/api/cart');
                console.log(res.data);
              }}
            >
              getCart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    `http://localhost:3000/api/products/${context?.params?.id}`
  );
  return { props: { product: response.data } };
};

export default SingleProduct;
