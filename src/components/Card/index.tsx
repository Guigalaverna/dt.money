import { css, theme } from "../../styles";
import { formatCentsInReal } from "../../utils/formatCentsInReal";
import { Container } from "./styles";
import {
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiDollarSign,
} from "react-icons/fi";

interface CardProps {
  transactionType: "income" | "outcome" | "total";
  amountInCents: number;
}

const totalCss = css({
  background: "$green",
  color: "$shape",

  p: {
    color: "$shape",
  },
});

export function Card({ transactionType, amountInCents }: CardProps) {
  const cardTitle =
    transactionType === "income"
      ? "Entradas"
      : transactionType === "outcome"
      ? "Saídas"
      : "Total";

  const cardBackground = transactionType === "total" ? totalCss() : undefined;
  const CardIcon =
    transactionType === "income"
      ? FiArrowUpCircle
      : transactionType === "outcome"
      ? FiArrowDownCircle
      : FiDollarSign;
  const cardColor =
    transactionType === "income"
      ? theme.colors.green
      : transactionType === "outcome"
      ? theme.colors.red
      : theme.colors.shape;

  return (
    <Container className={cardBackground}>
      <header>
        <span>{cardTitle}</span>
        <CardIcon size={32} color={cardColor} />
      </header>
      <p>{formatCentsInReal(amountInCents)}</p>
    </Container>
  );
}
