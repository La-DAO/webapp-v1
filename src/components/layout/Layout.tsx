import React from "react";
import Header from "./Header";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
