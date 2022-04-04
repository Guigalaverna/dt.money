// @ts-nocheck
import { useCallback, useMemo } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

import { useTable, useFilters } from "react-table";
import { useTransactions } from "../../contexts/TransactionsContext";
import { theme } from "../../styles";
import { formatCentsInReal } from "../../utils/formatCentsInReal";
import { formatISOtoLocaleDate } from "../../utils/formatISOtoLocaleDate";
import { ColumnFilter } from "../TransactionTable/ColumnFilter";
import { Container, Content, Header } from "./styles";

export function TransactionList() {
  const { transactions, removeTransaction } = useTransactions();

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
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={column.id} {...column.getHeaderProps()}>
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
            <tr key={row.original.id} {...row.getRowProps()}>
              {row.cells.map(cell => {
                console.log(row.original.id);
                return (
                  <td
                    key={cell.row.id}
                    {...cell.getCellProps()}
                    role={`${cell.getCellProps().role}-${
                      cell.row.original.type
                    }`}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}

              <button onClick={() => removeTransaction(row.original.id)}>
                <RiDeleteBin2Line size={24} color={theme.colors.red.value} />{" "}
              </button>
            </tr>
          );
        })}
      </Content>
    </Container>
  );
}
