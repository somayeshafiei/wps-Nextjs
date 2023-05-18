import { Product } from '@/interfaces';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import ProductItem from '@/components/page/products/productItem';
interface Props {
  products?: Product[];
  error?: string;
}

function Products({ products, error }: Props) {
  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-12 gap-5">
        {products?.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    return { props: { products: response.data } };
  } catch {
    return { props: { error: 'products not found' } };
  }
};

export default Products;
