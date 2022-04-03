import { useTransactions } from "../../contexts/TransactionsContext";
import { formatCentsInReal } from "../../utils/formatCentsInReal";
import { Container, Content, Header } from "./styles";

import { RiDeleteBin2Line } from "react-icons/ri";
import { theme } from "../../styles";

export function TransactionTable() {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <div style={{ height: 570, overflowY: "auto" }}>
      <Container>
        <Header>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </Header>
        <Content>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td>{formatCentsInReal(transaction.amount)}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt.toLocaleDateString()}</td>
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
