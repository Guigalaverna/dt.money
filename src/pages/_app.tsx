import { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";
import { TransactionContextProvider } from "../contexts/TransactionsContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <TransactionContextProvider>
        <Component {...pageProps} />
      </TransactionContextProvider>
    </>
  );
}
