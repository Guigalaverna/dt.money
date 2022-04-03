import { useRef } from "react";
import { TransactionTable } from "../components/TransactionTable";
import { Container, Content, Header } from "./_styles/Activity";
import * as XLSX from "xlsx";
import { useTransactions } from "../contexts/TransactionsContext";
import { formatCentsInReal } from "../utils/formatCentsInReal";

export default function Activity() {
  const tableRef = useRef(null);
  const { transactions } = useTransactions();

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

    XLSX.writeFileXLSX(workbook, "Report.xlsx");
  }

  return (
    <Container>
      <Header>
        <h1>Relatório de Atividades</h1>

        <div>
          <button onClick={downloadXLSX}>Exportar para Excel</button>
        </div>
      </Header>
      <Content>
        <TransactionTable ref={tableRef} />
      </Content>
    </Container>
  );
}
