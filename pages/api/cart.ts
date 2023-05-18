import products from "@/data/products";
import { Product } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

interface CartItem extends Product {
  quantity: number;
}

const cart: CartItem[] = [];

export default function addToCart(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(cart);
  if (req.method === "POST") {
    const cartItemIndex = cart.findIndex((ci) => ci.id === +req.body.id);
    if (cartItemIndex >= 0) {
      cart[cartItemIndex].quantity++;
      return res.status(200).json({ message: "ezafe shod" });
    }

    const product = products.find((p) => p.id === +req.body.id) as Product;

    cart.push({ ...product, quantity: 1 });
    return res.status(201).json({ message: "add shod" });
  }
}
