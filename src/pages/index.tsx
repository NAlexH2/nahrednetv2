import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(() => import("../components/layout"), { ssr: false });

export const Index = () => {
  return <Layout />;
};

export default Index;
