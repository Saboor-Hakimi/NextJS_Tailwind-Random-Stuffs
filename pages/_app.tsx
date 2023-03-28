import "../styles/globals.css";
import type { AppProps } from "next/app";

import "./../style.scss";

import store from "../store/index";

import { Provider } from "react-redux";

import "typeface-poppins";

import { MedusaProvider } from "medusa-react";

import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
const baseURL = process.env.NEXT_PUBLIC_MEDUSA_BASE_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={baseURL as string}
    >
      <Component {...pageProps} />
    </MedusaProvider>
  );
}

export default MyApp;
