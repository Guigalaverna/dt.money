import { render } from "@testing-library/react";
import { PieChart } from "../../components/PieChart";

describe("PieChart component", () => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  it("renders correctly", () => {
    const { container } = render(<PieChart data={data} />);

    expect(container).toBeInTheDocument();
  });
});
