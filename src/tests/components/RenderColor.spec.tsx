import { render } from "@testing-library/react";
import { RenderColor } from "../../components/RenderColor";

describe("RenderColor component", () => {
  it("renders correctly", () => {
    const { container } = render(<RenderColor color="#eba417" />);

    expect(container).toBeInTheDocument();
  });
});
