import { Container } from "./styles";

interface ButtonProps {
  type: "filled" | "outlined" | "transparent";
  title: string;
}

export function Button({ type, title }: ButtonProps) {
  return <Container buttonType={type}>{title}</Container>;
}
