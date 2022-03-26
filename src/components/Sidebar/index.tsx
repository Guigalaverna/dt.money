import { Link } from "../Link";
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
          <Link href="/">
            <a>
              <RiHome2Line size={24} />
              Dashboard
            </a>
          </Link>

          <Link href="/atividade">
            <a>
              <RiCalendar2Line size={24} />
              Atividade
            </a>
          </Link>

          <Link href="/resumo">
            <a>
              <RiPieChart2Line size={24} />
              Relatório
            </a>
          </Link>
        </NavigationWrapper>
      </div>
      <div>
        <NavigationWrapper>
          <Link href="/configuracoes">
            <a>
              <RiSettings2Line size={24} />
              Configurações
            </a>
          </Link>
        </NavigationWrapper>
      </div>
    </Container>
  );
}
