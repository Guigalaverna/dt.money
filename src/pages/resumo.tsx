import { PieChart } from "../components/PieChart";
import { Layout } from "../styles/pages/global";
import { Container, Content } from "../styles/pages/_Resume";

export default function Resume() {
  return (
    <Layout>
      <h1>Resumo de Transações</h1>
      <Content>
        <PieChart />
        <section>
          <ul>
            <li>Faculdade</li>
            <li>Alimentos</li>
            <li>Casa</li>
          </ul>
        </section>
      </Content>
    </Layout>
  );
}