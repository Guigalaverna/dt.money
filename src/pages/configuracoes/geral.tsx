import { useMemo } from "react";
import { SettingsMenu } from "../../components/SettingsMenu";
import { styled } from "../../styles";
import { Layout } from "../../styles/pages/global";

import { RiHome2Line, RiAccountCircleLine } from "react-icons/ri";
import { GeneralSettings } from "../../settings/GeneralSettings";
import { links } from "../../settings/links";
import { Sidebar } from "../../components/Sidebar";

const Container = styled(Layout, {
  "> section": {
    display: "grid",
    gridTemplateColumns: "220px auto",

    marginTop: "2rem",
    padding: "0 2rem",

    main: {},
  },
});

export default function Settings() {
  return (
    <>
      <Sidebar />
      <Container>
        <h1>Configurações</h1>
        <section>
          <SettingsMenu links={useMemo(() => links, [])} />
          <main>
            <GeneralSettings />
          </main>
        </section>
      </Container>
    </>
  );
}
