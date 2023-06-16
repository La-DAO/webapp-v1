import React from "react";
import Head from "next/head";
import Header from "./Header";

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
      <main>{children}</main>
    </>
  );
};

export default Layout;
