import { useMemo } from "react";
import { SettingsMenu } from "../../components/SettingsMenu";
import { styled } from "../../styles";
import { Layout } from "../../styles/pages/global";

import { RiHome2Line, RiAccountCircleLine } from "react-icons/ri";
import { useSettings } from "../../hooks/useSettings";
import { GeneralSettings } from "../../settings/GeneralSettings";
import { AccountSettings } from "../../settings/AccountSettings";

const Container = styled(Layout, {
  "> section": {
    display: "grid",
    gridTemplateColumns: "220px auto",

    marginTop: "2rem",
    padding: "0 2rem",

    main: {
      marginLeft: "1rem",
    },
  },
});

export default function Settings() {
  const links = useMemo(
    () => [
      {
        name: "Geral",
        url: "/configuracoes/geral",
        icon: () => <RiHome2Line />,
      },
      {
        name: "Conta",
        url: "/configuracoes/conta",
        icon: () => <RiAccountCircleLine />,
      },
    ],
    []
  );

  const { ActiveSubPage } = useSettings([
    {
      url: "/configuracoes/geral",
      subPage: GeneralSettings,
    },
    {
      url: "/configuracoes/conta",
      subPage: AccountSettings,
    },
  ]);

  return (
    <Container>
      <h1>Configurações</h1>
      <section>
        <SettingsMenu links={links} />
        <main>
          <ActiveSubPage />
        </main>
      </section>
    </Container>
  );
}
