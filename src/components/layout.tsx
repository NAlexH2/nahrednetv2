import React, { useState } from "react";
import Head from "next/head";
import styles from "styles/styles.module.css";
import { PageHeader } from "./ui/pageHeader";
import { NavBar, SmNavBar } from "./ui/navBar";
import { PageRender } from "./utils";
import { PageFooter } from "./ui/pageFooter";
import { navBarItems } from "./ui/navBar/navItemConsts";
import AnimateTx from "./utils/animateTx";

const siteTitle = "nah-red.net";
const logo = "images/logo192.png";
const favicon = "images/favicon.png";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(navBarItems[0]);
  const updateParentState = (newPage: string) => {
    setCurrentPage(newPage);
  };

  //Building the nav bar and updating its style depending on active page
  function barBuilder() {
    // return a particular style depending on the page currently on
    const updateCurrentNavStyle = (toChange: string) => {
      return currentPage === toChange ? styles.CurrentNav : styles.NavText;
    };
    //Return a map of buttons from my array, using the style depending on
    // the currently selected one.
    return navBarItems.map((item, index) => (
      <NavBar
        key={index}
        onUpdate={updateParentState}
        thisPage={item}
        id={updateCurrentNavStyle(item)}
      />
    ));
  }

  //The layout actually being rendered
  return (
    <div className={styles.Container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="nrnlogo" href={logo} />
        <link rel="icon" href={favicon} />
      </Head>
      <AnimateTx>
        <div className="flex justify-center">
          <PageHeader onUpdate={updateParentState} />
          <div className="md:hidden visible">
            {<SmNavBar onUpdate={updateParentState} thisPage={currentPage} />}
          </div>
        </div>
        <nav
          className={`${styles.MyNav} flex justify-center mb-7 ml-7 max-md:hidden`}
        >
          {barBuilder()}
        </nav>
      </AnimateTx>
      <main>{children}</main>
      <span className="">{PageRender(currentPage)}</span>
      <div>{<PageFooter />}</div>
    </div>
  );
}
