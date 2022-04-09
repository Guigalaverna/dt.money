import { useEffect, useState } from "react";
import { PieChart } from "../components/PieChart";
import { Sidebar } from "../components/Sidebar";
import { useUser } from "../contexts/UserContext";
import { Layout } from "../styles/pages/global";
import { Container, Content } from "../styles/pages/_Resume";

export default function Resume() {
  const { transactions, categories } = useUser();
  const [chartData, setChartData] = useState<{} | null>(null);

  useEffect(() => {
    const data = {
      labels: categories.map(category => category.name),
      datasets: [
        {
          data: categories.map(category =>
            transactions.reduce((acc, curr) => {
              if (curr.category === category.name) {
                return acc + curr.amount;
              }
              return acc;
            }, 0)
          ),
          backgroundColor: categories.map(category => category.color),
        },
      ],
    };

    setChartData(data);
  }, []);

  while (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Sidebar />
      <Layout>
        <h1>Resumo de Transações</h1>
        <Content>
          <PieChart data={chartData} />
          <section>
            <ul>
              {categories.map(category => (
                <li
                  key={category.id}
                  style={{ borderLeftColor: category.color }}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </section>
        </Content>
      </Layout>
    </>
  );
}
