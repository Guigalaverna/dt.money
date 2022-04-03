import { randomUUID } from "crypto";
import { createContext, ReactNode, useContext, useState } from "react";
import { Transaction } from "../../@types/Transaction";

interface TransactionsContextData {
  transactions: Transaction[];
  addTransaction: (
    type: "income" | "outcome",
    amountInCents: number,
    category: string,
    title: string
  ) => void;
  removeTransaction: (id: string) => void;
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

const Context = createContext({} as TransactionsContextData);

export function TransactionContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "2",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "3",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "4",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "5",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "6",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "7",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
    {
      id: "8",
      type: "income",
      amountInCents: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
  ]);

  async function addTransaction(
    type: "income" | "outcome",
    amountInCents: number,
    category: string,
    title: string
  ) {
    const data: Transaction = {
      id: randomUUID(),
      type,
      amountInCents,
      category,
      title,
      createdAt: new Date(),
    };

    setTransactions([...transactions, data]);
  }

  async function removeTransaction(id: string) {
    setTransactions(prevState => {
      if (prevState.length === 0) return prevState;

      return prevState.filter(transaction => transaction.id !== id);
    });
  }

  return (
    <Context.Provider
      value={{
        addTransaction,
        removeTransaction,
        transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTransactions() {
  return useContext(Context);
}
