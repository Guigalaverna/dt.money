/* eslint-disable react/display-name */
import { useTransactions } from "../../contexts/TransactionsContext";
import { formatCentsInReal } from "../../utils/formatCentsInReal";
import { Container, Content, Header } from "./styles";

import { RiDeleteBin2Line } from "react-icons/ri";
import { css, theme } from "../../styles";
import { formatISOtoLocaleDate } from "../../utils/formatISOtoLocaleDate";
import { ForwardedRef, forwardRef, useRef } from "react";
import { Transaction } from "../../../@types/Transaction";

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = forwardRef(
  (
    props: TransactionTableProps,
    ref: ForwardedRef<HTMLTableSectionElement>
  ) => {
    const { removeTransaction, isFiltersEnabled } = useTransactions();
    const tableRef = ref;

    const outcomeCSS = css({
      color: "$red",
    });
    const incomeCSS = css({
      color: "$green",
    });

    return (
      <div style={{ height: 570, overflowY: "auto" }}>
        <Container>
          <Header>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </Header>
          <Content ref={tableRef}>
            {props.transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td
                    className={
                      transaction.type === "income" ? incomeCSS() : outcomeCSS()
                    }
                  >
                    {transaction.type === "outcome" && "-"}
                    {formatCentsInReal(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{formatISOtoLocaleDate(transaction.createdAt)}</td>
                  <td>
                    <button onClick={() => removeTransaction(transaction.id)}>
                      <RiDeleteBin2Line
                        size={24}
                        color={theme.colors.red.value}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </Content>
        </Container>
      </div>
    );
  }
);
