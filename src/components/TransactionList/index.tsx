import { useCallback, useMemo } from "react";

import { useTable, useFilters } from "react-table";
import { useTransactions } from "../../contexts/TransactionsContext";
import { formatCentsInReal } from "../../utils/formatCentsInReal";
import { formatISOtoLocaleDate } from "../../utils/formatISOtoLocaleDate";
import { ColumnFilter } from "../TransactionTable/ColumnFilter";
import { Container, Content, Header } from "./styles";

export function TransactionList() {
  const { transactions } = useTransactions();

  //   {
  //     id: "1",
  //     title: "Salário",
  //     type: "income",
  //     amount: 3000,
  //     category: "Salário",
  //     createdAt: "2020-01-01",
  //   },
  //   {
  //     id: "2",
  //     title: "Aluguel",
  //     type: "outcome",
  //     amount: 1500,
  //     category: "Imóveis",
  //     createdAt: "2020-01-01",
  //   },
  // ],

  const getTransactionData = useCallback(() => {
    return transactions.map(t => {
      return {
        title: t.title,
        amount: formatCentsInReal(t.amount),
        category: t.category,
        createdAt: formatISOtoLocaleDate(t.createdAt),
        id: t.id,
        type: t.type,
      };
    });
  }, [transactions]);

  const data = useMemo(() => {
    return getTransactionData();
  }, [getTransactionData]);

  const columns = useMemo(
    () => [
      {
        Header: "Título",
        accessor: "title",
        Filter: ColumnFilter,
      },
      {
        Header: "Preço",
        accessor: "amount",
        Filter: ColumnFilter,
      },
      {
        Header: "Categoria",
        accessor: "category",
        Filter: ColumnFilter,
      },
      {
        Header: "Data",
        accessor: "createdAt",
        Filter: ColumnFilter,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useFilters);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Container {...getTableProps()}>
      <Header>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </Header>
      <Content {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    role={`${cell.getCellProps().role}-${
                      cell.row.original.type
                    }`}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </Content>
    </Container>
  );
}
