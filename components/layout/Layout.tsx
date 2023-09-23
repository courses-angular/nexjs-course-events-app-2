import React, { Fragment } from "react";
import MainHeader from "@/components/layout/MainHeader";

const Layout = (props: any) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
