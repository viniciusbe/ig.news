import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import NextNProgress from "nextjs-progressbar";

import { Header } from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <NextNProgress color="var(--yellow-500)" />
      <Header />

      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
