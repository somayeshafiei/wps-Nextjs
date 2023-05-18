import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@interfaces";
import products from "@/data/products";

const getSingleProduct = (req: NextApiRequest, res: NextApiResponse) => {
  if (isNaN(+req.query.id!))
    return res.status(400).json({ error: "bad request" });
  const product = products.find((p) => p.id === +req.query.id!);
  if (!product) return res.status(404).json({ error: "not found" });
  res.status(200).json(product);
};

export default getSingleProduct;
