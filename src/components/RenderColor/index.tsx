import { Container } from "./styles";

interface Props {
  color: string;
}

export function RenderColor({ color }: Props) {
  return (
    <Container
      style={{
        backgroundColor: color,
      }}
    />
  );
}
