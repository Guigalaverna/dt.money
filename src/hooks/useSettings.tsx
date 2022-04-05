import { useRouter } from "next/router";

interface LinksProps {
  url: string;
  subPage: () => JSX.Element;
}

export function useSettings(links: LinksProps[]) {
  const { asPath } = useRouter();

  const activeLink = links.find(link => link.url === asPath);
  console.log(asPath);

  console.log(activeLink);
  const ActiveSubPage = activeLink?.subPage;

  return {
    ActiveSubPage,
  };
}
