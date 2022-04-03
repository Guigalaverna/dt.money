import { render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";
import { theme } from "../../styles";

describe("Button component", () => {
  it("renders correctly", () => {
    render(<Button title="Test button" buttonType="filled" />);

    const button = screen.getByTestId("test-button");
    expect(button).toBeInTheDocument();
  });
});
