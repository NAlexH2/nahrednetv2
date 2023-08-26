import React, { useState } from "react";
import Head from "next/head";
import styles from "styles/styles.module.css";
import { NavBar, PageHeader, Josefin } from "./ui";

import PageRender from "./utils/pageRender";

export const siteTitle = "nah-red.net";

const index: string = "index";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(index);
  const updateParentState = (newPage: string) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={`${styles.container} ${Josefin.className}`}>
      <Head>
        <title>nah-red.net</title>
        <link rel="nrnlogo" href="images/logo192.png" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <PageHeader onUpdate={updateParentState} />
      <NavBar onUpdate={updateParentState} thisPage={currentPage} />
      <span>{PageRender(currentPage)}</span>
      <main>{children}</main>
    </div>
  );
}
