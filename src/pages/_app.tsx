import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { token } = parseCookies();

  if (!token && router.pathname !== "/auth/login") {
    if (typeof window !== "undefined") {
      router.push("/auth/login");
    }
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
