import { ActiveLink } from "../ActiveLink";
import { Container, NavigationWrapper } from "./styles";

import {
  RiHome2Line,
  RiCalendar2Line,
  RiPieChart2Line,
  RiSettings2Line,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Container>
      <div>
        <img src="/dt.money-logo.svg" alt="Logo DT money" />
        <NavigationWrapper>
          <ActiveLink href="/">
            <a>
              <RiHome2Line size={24} />
              Dashboard
            </a>
          </ActiveLink>

          <ActiveLink href="/atividade">
            <a>
              <RiCalendar2Line size={24} />
              Atividade
            </a>
          </ActiveLink>

          <ActiveLink href="/resumo">
            <a>
              <RiPieChart2Line size={24} />
              Relatório
            </a>
          </ActiveLink>
        </NavigationWrapper>
      </div>
      <div>
        <NavigationWrapper>
          <ActiveLink href="/configuracoes">
            <a>
              <RiSettings2Line size={24} />
              Configurações
            </a>
          </ActiveLink>
        </NavigationWrapper>
      </div>
    </Container>
  );
}
