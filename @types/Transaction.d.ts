export interface Transaction {
  id: string;
  title: string;
  type: "income" | "outcome";
  amountInCents: number;
  category: string;
  createdAt: Date;
}
