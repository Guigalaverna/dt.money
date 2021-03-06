import { getSession, signIn } from "next-auth/react";
import {
  ButtonLogin,
  Container,
  Content,
  Header,
} from "../styles/pages/_Login";

import { RiGoogleFill } from "react-icons/ri";
import { GetServerSideProps } from "next";

export default function Login() {
  return (
    <Container>
      <Header>
        <img src="/dt.money-logo-alt.svg" alt="dt.money logo" />
        <h1>
          A melhor maneira de <br />
          controlar suas <br />
          finanças
        </h1>
      </Header>
      <Content>
        <ButtonLogin onClick={() => signIn("google")}>
          <RiGoogleFill size={24} color="#FFF" />
          Login com o Google
        </ButtonLogin>
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (session.user) {
    return {
      props: {},
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
};
