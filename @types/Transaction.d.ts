export interface Transaction {
  id?: string;
  title: string;
  type: "income" | "outcome";
  amount: number;
  category: string;
  createdAt?: Date;
}
