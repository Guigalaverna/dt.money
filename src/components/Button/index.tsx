import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "filled" | "outlined" | "transparent";
  title: string;
}

export function Button({ buttonType, title, ...rest }: ButtonProps) {
  return (
    <Container data-testid="test-button" buttonType={buttonType} {...rest}>
      {title}
    </Container>
  );
}
