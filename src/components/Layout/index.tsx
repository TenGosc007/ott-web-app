import React from "react";
// import { Helmet } from "react-helmet";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title = "", children }: Props) => {
  return (
    <>
      {/* <Helmet>
        <title>OTT Player {title && `| ${title}`}</title>
      </Helmet> */}
      <main className="layout">{children}</main>
    </>
  );
};

export default Layout;
