import { render, screen } from "@testing-library/react";
import { ActiveLink } from "../../components/ActiveLink";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink component", () => {
  it("renders correctly", () => {
    render(
      <ActiveLink href="/">
        <a>Dashboard</a>
      </ActiveLink>
    );

    expect(screen.getByText("Dashboard")).toHaveStyle({
      color: "#5429CC !important",
    });
  });

  it("renders correctly if not selected", () => {
    render(
      <ActiveLink href="/atividade">
        <a>Atividade</a>
      </ActiveLink>
    );

    expect(screen.getByText("Atividade")).toHaveStyle({
      color: "#969CB2 !important",
    });
  });
});
