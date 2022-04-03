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
  amount: number;
}

const totalCss = css({
  background: "$green",
  color: "$shape",

  p: {
    color: "$shape",
  },
});

export function Card({ transactionType, amount }: CardProps) {
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
      ? theme.colors.green.value
      : transactionType === "outcome"
      ? theme.colors.red.value
      : theme.colors.shape.value;

  return (
    <Container
      className={cardBackground}
      data-testid={`card-test-${transactionType}`}
    >
      <header>
        <span>{cardTitle}</span>
        <CardIcon size={32} color={cardColor} />
      </header>
      <p data-testid={`card-test-${transactionType}-result`}>
        {formatCentsInReal(amount)}
      </p>
    </Container>
  );
}
