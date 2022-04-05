import { useEffect, useRef, useState } from "react";
import { TransactionTable } from "../components/TransactionTable";
import { Container, Content, Header } from "../styles/pages/_Activity";
import * as XLSX from "xlsx";
import { useTransactions } from "../contexts/TransactionsContext";
import { formatCentsInReal } from "../utils/formatCentsInReal";
import { css } from "../styles";
import { TransactionList } from "../components/TransactionList";
import { Layout } from "../styles/pages/global";

export default function Activity() {
  const tableRef = useRef(null);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { transactions } = useTransactions();

  useEffect(() => {
    if (transactions.length === 0) {
      setButtonDisabled(true);
    }
  }, [transactions]);

  const buttonDisabledCSS = css({
    cursor: "not-allowed !important",
    filter: "brightness(0.8)",
  });

  function downloadXLSX() {
    // @ts-ignore
    const data = transactions.map(t => {
      return {
        Título: t.title,
        Valor: formatCentsInReal(t.amount),
        Categoria: t.type === "income" ? "Entrada" : "Saída",
        Data: new Date(t.createdAt).toLocaleDateString(),
      };
    });

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

    XLSX.writeFileXLSX(
      workbook,
      `dt.money - Relatório de Atividades - ${new Date().toLocaleDateString()}.xlsx`
    );
  }

  return (
    <Layout>
      <Header>
        <h1>Relatório de Atividades</h1>

        <div>
          <button
            className={buttonDisabled && buttonDisabledCSS()}
            disabled={buttonDisabled}
            onClick={downloadXLSX}
          >
            Exportar para Excel
          </button>
        </div>
      </Header>
      <Content>
        <TransactionList />
      </Content>
    </Layout>
  );
}
