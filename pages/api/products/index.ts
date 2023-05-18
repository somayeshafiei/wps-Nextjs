import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@interfaces";
import products from "@/data/products";

export default function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
