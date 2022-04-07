import { SessionContextValue, UseSessionOptions } from "next-auth/react";
import { Category } from "../Category";
import { Transaction } from "../Transaction";

export interface UserContextData {
  // states
  transactions: Transaction[];
  categories: Category[];

  // controllers

  /*
   ** This controller is used to manipulate all the things
   ** related of transactions in the user context.
   */

  transactionController: {
    addTransaction: (data: Transaction) => void;
    removeTransaction: (id: string) => void;
    resumeOfTransactions: () => {
      totalBalance: number;
      totalOfIncomeTransactions: number;
      totalOfOutcomeTransactions: number;
    };
    filterTransactionsByCategories: () => Transaction[];
  };

  /*
   ** This controller is used to manipulate all the things
   ** related of categories in the user context.
   */
  categoryController: {
    addCategory: (data: Category) => void;
    removeCategory: (id: string) => void;
  };

  user?: {
    data: {
      id?: string;
      name?: string;
      email?: string;
      avatar?: string;
    };
    status: SessionContextValue.status;
  };
}
