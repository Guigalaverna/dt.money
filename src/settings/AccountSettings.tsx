import { Input } from "../components/Input";
import { Container, Fieldset, Label } from "./styles/AccountSettings";

export function AccountSettings() {
  return (
    <Container>
      <h2>Configurações da Conta</h2>

      <form>
        <Fieldset name="principal-informations">
          <Label htmlFor="input-name">Nome Completo</Label>
          <Input id="input-name" placeholder="John Doe" />

          <Label htmlFor="input-email">E-mail</Label>
          <Input
            id="input-email"
            placeholder="john.doe@example.com"
            type="email"
          />
        </Fieldset>
      </form>
    </Container>
  );
}
