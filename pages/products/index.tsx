import Layout from '@/components/kit/layout';
import ProductItem from '@/components/page/products/productItem';
import { Product } from '@/interfaces';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
interface Props {
  products?: Product[];
  error?: string;
}

const Products = ({ products, error }: Props) => {
  return (
    <Layout>
      <div className="flex-1">
        <h1>Products</h1>
        <div className="grid grid-cols-12 gap-5">
          {products?.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    return { props: { products: response.data } };
  } catch {
    return { props: { error: 'products not found' } };
  }
};
export default Products;
