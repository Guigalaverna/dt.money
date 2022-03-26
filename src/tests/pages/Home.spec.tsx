import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home />);
    const homeContainer = screen.getByTestId("home");

    expect(homeContainer).toBeInTheDocument();
  });
});
