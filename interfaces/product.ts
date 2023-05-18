export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
  creationAt: string;
  updatedAt: string;
  category: Category;
}
