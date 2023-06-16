import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./layout.module.css";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <Head>
        <title>La DAO</title>
        <meta
          name="description"
          content="Creado por La DAO para la comunidad Web3"
        />
        <link rel="icon" href="/ladao.svg" />
      </Head>
      <Header />
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <main className={`flex items-center bg-ldJetBlack ${styles.main}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
