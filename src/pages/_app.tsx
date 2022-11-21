import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>ぽミュニティ</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
