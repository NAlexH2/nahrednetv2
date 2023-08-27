import React, { useState } from "react";
import Head from "next/head";
import styles from "styles/styles.module.css";
import { Josefin } from "./ui/fonts";
import { PageHeader } from "./ui/pageHeader";
import { NavBar, SmNavBar } from "./ui/navBar";
import { PageRender } from "./utils";
import { PageFooter } from "./ui/pageFooter";

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

      <div className="flex justify-center">
        <PageHeader onUpdate={updateParentState} />
        <div className="md:hidden visible">
          {<SmNavBar onUpdate={updateParentState} thisPage={currentPage} />}
        </div>
      </div>
      <div className="max-md:hidden">
        <NavBar onUpdate={updateParentState} thisPage={currentPage} />
      </div>
      <main>{children}</main>
      <span>{PageRender(currentPage)}</span>
      <div>{<PageFooter />}</div>
    </div>
  );
}
