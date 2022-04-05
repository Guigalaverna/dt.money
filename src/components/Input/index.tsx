import { Container } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <Container {...rest} type="text" />;
}
