import { render } from "@testing-library/react";
import { TransactionTable } from "../../components/TransactionTable";

describe("TransactionTable component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <TransactionTable
        transactions={[
          {
            id: "1",
            title: "Luz",
            amount: 100,
            type: "outcome",
            category: "Eletricidade",
            createdAt: new Date().toISOString(),
          },
        ]}
      />
    );
    expect(container).toBeInTheDocument;
  });
});
