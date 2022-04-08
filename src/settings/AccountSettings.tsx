import { Input } from "../components/Input";
import { useUser } from "../contexts/UserContext";
import { Container, Fieldset, Label, Avatar } from "./styles/AccountSettings";

export function AccountSettings() {
  const { user } = useUser();

  return (
    <Container>
      <h2>Configurações da Conta</h2>

      <form>
        <Fieldset name="principal-informations">
          <main>
            <Label htmlFor="input-name">Nome Completo</Label>
            <Input id="input-name" placeholder={user.data.name} />

            <Label htmlFor="input-email">E-mail</Label>
            <Input
              id="input-email"
              placeholder={user.data.email}
              type="email"
            />
          </main>
          <Avatar src={user.data.avatar} alt="" />
        </Fieldset>
      </form>
    </Container>
  );
}
