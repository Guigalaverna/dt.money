// @ts-nocheck
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "../contexts/UserContext";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </SessionProvider>
    </>
  );
}
