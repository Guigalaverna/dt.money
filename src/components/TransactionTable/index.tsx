/* eslint-disable react/display-name */
import { formatCentsInReal } from "../../utils/formatCentsInReal";
import { Container, Content, Header } from "./styles";

import { RiDeleteBin2Line } from "react-icons/ri";
import { css, theme } from "../../styles";
import { formatISOtoLocaleDate } from "../../utils/formatISOtoLocaleDate";
import { ForwardedRef, forwardRef, useRef } from "react";
import { Transaction } from "../../../@types/Transaction";
import { useUser } from "../../contexts/UserContext";

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = forwardRef(
  (
    props: TransactionTableProps,
    ref?: ForwardedRef<HTMLTableSectionElement>
  ) => {
    const { transactionController } = useUser();
    const tableRef = ref ? ref : null;

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
            <tr>
              <td>Título</td>
              <td>Preço</td>
              <td>Categoria</td>
              <td>Data</td>
              <td>Ações</td>
            </tr>
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
                    <button
                      onClick={() =>
                        transactionController.removeTransaction(transaction.id)
                      }
                    >
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
