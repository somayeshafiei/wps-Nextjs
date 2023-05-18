import { Product } from '@/interfaces';
import Link from 'next/link';
interface Props {
  product: Product;
}
const Card = ({ product }: Props) => {
  return (
    <>
      <div className="flex flex-col max-w-sm col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border rounded-sm shadow-sm">
        <div className="w-full">
          <img src={product.images[0]} />
        </div>
        <div className="flex flex-col items-center w-full">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="w-full flex justify-between items-center">
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
export default Card;
