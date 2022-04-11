import { collection, doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import { db } from "../../../lib/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end("Method Not Allowed");
    return;
  }

  const { userId, title, type, amount, category } = req.body;

  try {
    const transactionsCollectionRef = collection(db, "transactions");

    await setDoc(doc(transactionsCollectionRef, v4()), {
      id: v4(),
      title,
      type,
      amount,
      category,
      createdAt: new Date().toISOString(),
      refersTo: userId,
    });

    res.status(201).json({
      message: "Transaction created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).end("Internal Server Error");
  }
}
