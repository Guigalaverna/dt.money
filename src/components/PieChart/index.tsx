// @ts-nocheck
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "./styles";
import { useUser } from "../../contexts/UserContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const { transactions } = useUser();

  // create a array with objects with key is the category and value is the all transaction of that category
  const categories = transactions.map(t => t.category);

  const transactionByCategory = transactions.map(transaction => {
    if (categories.includes(transaction.category)) {
      return {
        category: transaction.category,
        amount: transaction.amount,
      };
    }
  });

  console.log(categories);
  console.log(transactionByCategory);

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <Container>
      <Pie
        options={{
          maintainAspectRatio: 20,
        }}
        data={data}
      />
    </Container>
  );
}
