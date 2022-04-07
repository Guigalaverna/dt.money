import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";
import { v4 } from "uuid";
import { Category } from "../../@types/Category";
import { UserContextData } from "../../@types/contexts/UserContextData";
import { Transaction } from "../../@types/Transaction";

const Context = createContext({} as UserContextData);

export function UserProvider(props: { children: ReactNode }) {
  // states
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const { data, status } = useSession();
  const loggedUser = data?.user;

  while (status === "loading") {
    return null;
  }

  const user = {
    data: {
      id: v4(),
      name: loggedUser?.name,
      email: loggedUser?.email,
      avatar: loggedUser?.image,
    },
    status,
  };

  // controllers
  const transactionController = {
    addTransaction: (data: Transaction) => {
      setTransactions(prevState => [
        ...prevState,
        {
          id: v4(),
          createdAt: new Date().toISOString(),
          ...data,
        },
      ]);
    },

    removeTransaction: (id: string) => {
      setTransactions(prevState =>
        prevState.filter(transaction => transaction.id !== id)
      );
    },

    resumeOfTransactions: () => {
      const totalOfIncomeTransactions = transactions.reduce((acc, cur) => {
        // get sum of all transactions that are income
        if (cur.type === "income") {
          return acc + cur.amount;
        }

        return acc;
      }, 0);

      const totalOfOutcomeTransactions = transactions.reduce((acc, cur) => {
        // get sum of all transactions that are outcome
        if (cur.type === "outcome") {
          return acc + cur.amount;
        }

        return acc;
      }, 0);

      // sum everything up
      const totalBalance =
        totalOfIncomeTransactions - totalOfOutcomeTransactions;

      return {
        totalBalance,
        totalOfIncomeTransactions,
        totalOfOutcomeTransactions,
      };
    },

    filterTransactionsByCategories: () => {
      // todo: implement a method to get all transactions by category
      const filteredTransactions = transactions.filter(t => {
        for (let i = 0; 0 < categories.length; i++) {
          if (categories[i].name === t.category) {
            return true;
          }

          return false;
        }
      });

      return filteredTransactions;
    },
  };

  const categoryController = {
    addCategory: (data: Category) => {
      setCategories(prevState => [...prevState, data]);
    },

    removeCategory: (id: string) => {
      setCategories(prevState =>
        prevState.filter(category => category.id !== id)
      );
    },
  };

  return (
    <Context.Provider
      value={{
        transactions,
        transactionController,
        categories,
        categoryController,
        user,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useUser() {
  return useContext(Context);
}
