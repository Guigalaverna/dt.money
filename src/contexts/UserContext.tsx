/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from "next-auth/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 } from "uuid";
import { Category } from "../../@types/Category";
import { UserContextData } from "../../@types/contexts/UserContextData";
import { Transaction } from "../../@types/Transaction";

import { setCookie, parseCookies } from "nookies";
import { api } from "../lib/api";

const Context = createContext({} as UserContextData);

export function UserProvider(props: { children: ReactNode }) {
  // states
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const { data, status } = useSession();
  const loggedUser = data?.user;

  // // effects to load data from cookies
  // useEffect(() => {
  //   const cookies = parseCookies(null);
  //   const transactions = cookies["@dt-money-transactions"];
  //   const parsedTransactions = JSON.parse(transactions);
  //   setTransactions(parsedTransactions);
  // }, []);

  // useEffect(() => {
  //   const cookies = parseCookies(null);
  //   const categories = cookies["@dt-money-categories"];
  //   const parsedCategories = JSON.parse(categories);
  //   setCategories(parsedCategories);
  // }, []);

  // // effects to save data in cookies
  // useEffect(() => {

  // }, [transactions]);

  // useEffect(() => {
  //   const stringifiedCategories = JSON.stringify(categories);
  //   setCookie(null, "@dt-money-categories", stringifiedCategories, {
  //     maxAge: 30 * 24 * 60 * 60,
  //     path: "/",
  //   });
  // }, [categories]);

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
    addTransaction: async (data: Transaction) => {
      // setTransactions(prevState => [
      //   ...prevState,
      //   {
      //     id: v4(),
      //     createdAt: new Date().toISOString(),
      //     ...data,
      //   },
      // ]);
      await api.post("transaction/create", {
        userId: "data.user",
        ...data,
      });
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
      console.log(id);
      const filteredCategories = categories.filter(category => {
        return category.id !== id;
      });
      setCategories(filteredCategories);
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
