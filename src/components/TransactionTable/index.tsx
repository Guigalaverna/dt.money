import { Container, Content, Header } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <Header>
        <th>Título</th>
        <th>Preço</th>
        <th>Categoria</th>
        <th>Data</th>
      </Header>
      <Content>
        <tr>
          <td>Desenvolvimento de Site</td>
          <td>R$ 1.500,00</td>
          <td>Trabalho</td>
          <td>15/03/2022</td>
        </tr>
        <tr>
          <td>Hamburger</td>
          <td>-R$ 25,00</td>
          <td>Alimentação</td>
          <td>15/03/2022</td>
        </tr>
        <tr>
          <td>Supermercado</td>
          <td>-R$ 300,00</td>
          <td>Alimentação</td>
          <td>15/03/2022</td>
        </tr>
      </Content>
    </Container>
  );
}
