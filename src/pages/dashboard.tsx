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

import { getSession, useSession } from "next-auth/react";
import { useUser } from "../contexts/UserContext";
import { generateTransaction } from "../utils/user/generateTransaction";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

Modal.setAppElement("#__next");
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [transactionTitle, setTransactionTitle] = useState("");
  const [transactionType, setTransactionType] = useState<
    "income" | "outcome" | null
  >();
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionCategory, setTransactionCategory] = useState("");
  const router = useRouter();

  const { data } = useSession();

  const { user, transactions, categories, transactionController } = useUser();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const transaction = generateTransaction({
      title: transactionTitle,
      type: transactionType,
      amount: transactionAmount,
      category: transactionCategory,
    });

    transactionController.addTransaction(transaction);

    // clear input states
    setTransactionTitle("");
    setTransactionType(null);
    setTransactionAmount(0);
    setTransactionCategory("");
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
                  value={transactionTitle}
                  onChange={e => setTransactionTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="type">Tipo da transação</label>
                <select
                  name="type"
                  id="type"
                  value={transactionType}
                  // @ts-ignore
                  onChange={e => setTransactionType(e.target.value)}
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
                  value={transactionAmount}
                  onChange={e => setTransactionAmount(Number(e.target.value))}
                />
              </div>

              <div>
                <label htmlFor="category">Categoria</label>
                <select
                  name="category"
                  id="category"
                  value={transactionCategory}
                  onChange={e => setTransactionCategory(e.target.value)}
                >
                  <option value="default">Selecione uma Opção</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <ModalButton type="submit">Cadastrar</ModalButton>
            </Fieldset>
          </form>
        </Modal>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  return {
    props: {},
  };
};
