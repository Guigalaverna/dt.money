import { v4 } from "uuid";
import { createContext, ReactNode, useContext, useState } from "react";
import { Transaction } from "../../@types/Transaction";

interface TransactionsContextData {
  transactions: Transaction[];
  addTransaction: (data: Transaction) => void;
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
      id: v4(),
      type: "income",
      amount: 1000,
      category: "Salário",
      title: "Salário",
      createdAt: new Date(),
    },
  ]);

  async function addTransaction(data: Transaction) {
    const formattedData = {
      ...data,
      id: v4(),
      createdAt: new Date(),
    };
    setTransactions([...transactions, formattedData]);
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
