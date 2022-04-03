import { render, screen } from "@testing-library/react";
import { Card } from "../../components/Card";

describe("Card test", () => {
  it("renders correctly", () => {
    render(<Card transactionType="total" amount={10} />);

    expect(screen.getByTestId("card-test-total")).toBeInTheDocument();
  });

  it("renders correctly when card is income type", () => {
    render(<Card transactionType="income" amount={10} />);

    expect(screen.getByTestId("card-test-income")).toBeInTheDocument();
    expect(screen.getByText("R$ 10,00")).toBeInTheDocument();
  });

  it("renders correctly when card is outcome type", () => {
    render(<Card transactionType="outcome" amount={10} />);

    expect(screen.getByTestId("card-test-outcome")).toBeInTheDocument();
    expect(screen.getByText("R$ 10,00")).toBeInTheDocument();
  });
});
