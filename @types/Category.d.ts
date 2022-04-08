import { Transaction } from "./Transaction";

export interface Category {
  id: string;
  name: string;
  color: string;
  transactions: Transaction[];
}
