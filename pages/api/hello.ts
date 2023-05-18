// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(users);
  if (req.method === "PUT") {
    const { id, name } = req.body;
    const userIndex = users.findIndex((u) => u.id === +id);
    users[userIndex].name = name;
    return res.status(200).json({message: "edit shod"})
  }
}
