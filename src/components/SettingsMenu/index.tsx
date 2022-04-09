import Link from "next/link";
import { IconType } from "react-icons";
import { theme } from "../../styles";
import { Container } from "./styles";

interface SettingsMenuProps {
  links: Array<{
    name: string;
    url: string;
    icon: IconType;
  }>;
}

export function SettingsMenu({ links }: SettingsMenuProps) {
  return (
    <Container>
      <ul>
        {links.map(link => {
          return (
            <li key={link.url} data-testid={link.name}>
              <link.icon size={24} color={theme.colors.shape.value} />
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
