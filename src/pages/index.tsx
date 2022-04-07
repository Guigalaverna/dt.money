/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useMemo, useState } from "react";
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
} from "../styles/pages/_Home";

import { RiCloseLine } from "react-icons/ri";
import Modal from "react-modal";
import { theme } from "../styles";
import { Sidebar } from "../components/Sidebar";

import { useSession } from "next-auth/react";
import { client } from "../lib/fauna";
import { query as q } from "faunadb";
import { useUser } from "../contexts/UserContext";

Modal.setAppElement("#__next");
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState<"income" | "outcome" | null>();
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  // const { data } = useSession();

  const { user, transactions, transactionController } = useUser();
  console.log(user);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // clear input states
    setTitle("");
    setType(null);
    setAmount(0);
    setCategory("");

    const data = {
      title,
      type,
      amount,
      category,
    };

    transactionController.addTransaction(data);
    closeModal();
  }

  const totalIncome = useMemo(() => {
    return transactionController.resumeOfTransactions()
      .totalOfIncomeTransactions;
  }, [transactions]);
  const totalOutcome = useMemo(() => {
    return transactionController.resumeOfTransactions()
      .totalOfOutcomeTransactions;
  }, [transactions]);
  const totalBalance = useMemo(() => {
    return transactionController.resumeOfTransactions().totalBalance;
  }, [transactions]);

  return (
    <>
      <Sidebar />

      <Container data-testid="home">
        <Header>
          <div>
            <Heading>Bem vindo, {user.data.name.split(" ")[0]}</Heading>
            <Button
              buttonType="filled"
              title="Nova transação"
              onClick={openModal}
            />
          </div>

          <Cards>
            <Card transactionType="income" amount={totalIncome} />
            <Card transactionType="outcome" amount={totalOutcome} />
            <Card transactionType="total" amount={totalBalance} />
          </Cards>
        </Header>
        <Content>
          <TransactionTable transactions={transactions} />
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
          <form onSubmit={handleSubmit}>
            <Fieldset>
              <div>
                <label htmlFor="title">Título da Transação</label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Aluguel da Casa"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="type">Tipo da transação</label>
                <select
                  name="type"
                  id="type"
                  value={type}
                  // @ts-ignore
                  onChange={e => setType(e.target.value)}
                >
                  <option value="default">Selecione uma Opção</option>
                  <option value="income">Entrada</option>
                  <option value="outcome">Saída</option>
                </select>
              </div>

              <div>
                <label htmlFor="amount">Valor da Transação</label>
                <label htmlFor="amount">Obs: digite apenas o número</label>
                <Input
                  name="amount"
                  type="number"
                  placeholder="10"
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                />
              </div>

              <div>
                <label htmlFor="category">Categoria</label>
                <Input
                  type="text"
                  placeholder="Casa"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </div>

              <ModalButton type="submit">Cadastrar</ModalButton>
            </Fieldset>
          </form>
        </Modal>
      </Container>
    </>
  );
}
