import { RiAccountCircleLine, RiHome2Line } from "react-icons/ri";

export const links = [
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
];
