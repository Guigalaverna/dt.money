import { v4 } from "uuid";
import { Transaction } from "../../../@types/Transaction";

interface Props {
  title: string;
  amount: number;
  type: "income" | "outcome";
  category: string;
}

export function generateTransaction(props: Props) {
  const transaction = {
    id: v4(),
    title: props.title,
    amount: props.amount,
    type: props.type,
    category: props.category,
    createdAt: new Date().toISOString(),
  };

  return transaction;
}
