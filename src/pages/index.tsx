import { Card } from "../components/Card";
import { styled } from "../styles";
import { Cards, Container, Header, Heading } from "./_styles/Home";

export default function Home() {
  return (
    <Container data-testid="home">
      <Header>
        <div>
          <Heading>Bem vindo, Guilherme</Heading>
          <button>Nova transação</button>
        </div>

        <Cards>
          <Card transactionType="income" amountInCents={1000} />
          <Card transactionType="outcome" amountInCents={500} />
          <Card transactionType="total" amountInCents={500} />
        </Cards>
      </Header>
    </Container>
  );
}
