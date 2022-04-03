import { v4 } from "uuid";
import { createContext, ReactNode, useContext, useState } from "react";
import { Transaction } from "../../@types/Transaction";

interface TransactionsContextData {
  transactions: Transaction[];
  addTransaction: (data: Transaction) => void;
  removeTransaction: (id: string) => void;
  totalBalance: number;
  totalIncome: number;
  totalOutcome: number;
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

const Context = createContext({} as TransactionsContextData);

export function TransactionContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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

  const incomeTransactions = transactions.filter(transaction => {
    if (transaction.type === "income") {
      return transaction;
    }
  });

  const outcomeTransactions = transactions.filter(transaction => {
    if (transaction.type === "outcome") {
      return transaction;
    }
  });

  const totalIncome = incomeTransactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalOutcome = outcomeTransactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalBalance = totalIncome - totalOutcome;

  return (
    <Context.Provider
      value={{
        addTransaction,
        removeTransaction,
        transactions,
        totalBalance,
        totalIncome,
        totalOutcome,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTransactions() {
  return useContext(Context);
}
