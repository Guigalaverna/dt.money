import { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}
