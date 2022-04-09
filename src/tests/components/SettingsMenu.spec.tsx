import { render, screen } from "@testing-library/react";
import { RiAB } from "react-icons/ri";
import { SettingsMenu } from "../../components/SettingsMenu";

describe("SettingsMenu component", () => {
  const links = [
    {
      name: "Settings",
      url: "/settings",
      icon: () => <RiAB />,
    },
  ];
  it("renders correctly", () => {
    const { container } = render(<SettingsMenu links={links} />);

    expect(container).toBeInTheDocument();
    expect(screen.getByTestId("Settings")).toBeInTheDocument();
  });
});
