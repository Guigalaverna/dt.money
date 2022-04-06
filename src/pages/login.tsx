import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  ButtonLogin,
  Container,
  Content,
  Header,
} from "../styles/pages/_Login";

import { RiGoogleFill } from "react-icons/ri";
import { useEffect } from "react";

export default function Login() {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data]); // eslint-disable-line

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
        <ButtonLogin>
          <RiGoogleFill size={24} color="#FFF" />
          Login com o Google
        </ButtonLogin>
      </Content>
    </Container>
  );
}
