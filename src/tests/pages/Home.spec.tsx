import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <div id="__next">
        <Home />
      </div>
    );
    const homeContainer = screen.getByTestId("home");

    expect(homeContainer).toBeInTheDocument();
  });
});
