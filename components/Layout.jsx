import React, { useEffect } from "react";
import Head from "next/head";

import { Navbar, Footer } from "./index";
import { useStateContext } from "../context/StateContext";

const Layout = ({ children }) => {
  const { showCart } = useStateContext();

  useEffect(() => {
    showCart
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showCart]);

  return (
    <div className='layout'>
      <Head>
        <title>Vladyslav Plaksa</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
