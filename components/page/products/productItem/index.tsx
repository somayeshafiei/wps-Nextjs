import { Product } from '@/interfaces';
import Link from 'next/link';
import React from 'react';
interface Props {
  product: Product;
}
const ProductItem = ({ product }: Props) => {
  return (
    <>
      <div className="flex flex-col  col-span-12 md:col-span-6 lg:col-span-4  border rounded-sm shadow-md">
        <div className="w-full h-72">
          <img src={product.images[0]} className="h-full w-full" />
        </div>
        <div className="flex flex-col items-center w-full justify-between">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="w-full flex justify-between items-center ">
            <span>{`Price:$${product.price}`}</span>
            <Link href={`products/${product.id}`}>
              <button className="bg-blue-600 text-white p-2">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
