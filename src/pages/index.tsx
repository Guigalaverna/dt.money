import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { TransactionTable } from "../components/TransactionTable";
import {
  Cards,
  Container,
  Header,
  Heading,
  Content,
  Fieldset,
  ModalHeader,
  Input,
  ModalButton,
} from "./_styles/Home";

import { RiCloseLine } from "react-icons/ri";
import Modal from "react-modal";
import { theme } from "../styles";

Modal.setAppElement("#__next");
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Container data-testid="home">
      <Header>
        <div>
          <Heading>Bem vindo, Guilherme</Heading>
          <Button
            buttonType="filled"
            title="Nova transação"
            onClick={openModal}
          />
        </div>

        <Cards>
          <Card transactionType="income" amountInCents={1000} />
          <Card transactionType="outcome" amountInCents={500} />
          <Card transactionType="total" amountInCents={500} />
        </Cards>
      </Header>
      <Content>
        <TransactionTable />
      </Content>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            paddingLeft: 40,
            paddingTop: 64,
            paddingBottom: 64,
            paddingRight: 48,
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <ModalHeader>
          <h2>Nova transação</h2>
          <button onClick={closeModal}>
            <RiCloseLine size={24} color={theme.colors.red.value} />
          </button>
        </ModalHeader>
        <form>
          <Fieldset>
            <div>
              <label htmlFor="title">Título da Transação</label>
              <Input id="title" type="text" placeholder="Aluguel da Casa" />
            </div>

            <div>
              <label htmlFor="type">Tipo da transação</label>
              <select name="type" id="type">
                <option value="default">Selecione uma Opção</option>
                <option value="income">Entrada</option>
                <option value="outcome">Saída</option>
              </select>
            </div>

            <div>
              <label htmlFor="amount">Valor da Transação</label>
              <label htmlFor="amount">Obs: digite apenas o número</label>
              <Input name="amount" type="number" placeholder="10" />
            </div>

            <div>
              <label htmlFor="category">Categoria</label>
              <Input type="text" placeholder="Casa" />
            </div>

            <ModalButton type="submit">Cadastrar</ModalButton>
          </Fieldset>
        </form>
      </Modal>
    </Container>
  );
}
