import { render } from "@testing-library/react";
import { Input } from "../../components/Input";

describe("Input component", () => {
  it("renders correctly", () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });
});
