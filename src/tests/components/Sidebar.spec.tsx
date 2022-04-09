import { render } from "@testing-library/react";
import { Sidebar } from "../../components/Sidebar";

jest.mock("next/router", () => {
  return {
    useRouter: () => ({
      asPath: "/",
    }),
  };
});

describe("Sidebar component", () => {
  it("renders correctly", () => {
    const { container } = render(<Sidebar />);

    expect(container).toBeInTheDocument();
  });
});
