import { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";
import { TransactionContextProvider } from "../contexts/TransactionsContext";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Sidebar />
        <TransactionContextProvider>
          <Component {...pageProps} />
        </TransactionContextProvider>
      </SessionProvider>
    </>
  );
}
