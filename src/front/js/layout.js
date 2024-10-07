import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = ({ Component, pageProps }) => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BrowserRouter basename={basename} {...pageProps}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default injectContext(Layout);
