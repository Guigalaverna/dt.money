import Link from "next/link";
import { Container } from "../styles/pages/_404";

export default function NotFound() {
  return (
    <Container>
      <img src="/dt.money-logo.svg" alt="dt.money logo" />
      <h1>Oops!</h1>
      <h2>Parece que este lugar não existe!</h2>

      <Link href="/">
        <a>Voltar para o dashboard</a>
      </Link>
    </Container>
  );
}
