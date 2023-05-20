import Layout from '@/components/kit/layout';

import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import { CartItem } from '../api/cart';

interface Props {
  carts: CartItem[];
  error?: string;
}
const Cart = ({ carts, error }: Props) => {
  console.log(carts);

  return (
    <Layout title="Cart">
      <div className="flex-1">Cart</div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/cart');
    return { props: { carts: response.data } };
  } catch {
    return { props: { error: 'products not found' } };
  }
};
export default Cart;
