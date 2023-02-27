import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
