import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/styles.module.css";
import beard from "/public/images/beard.svg";
import { SquarePegTrue, Josefin } from "../fonts/fonts";
import PageRender from "./pageRender";
import MButton from "./ui/nrnButton";

export const siteTitle = "nah-red.net";

const index: string = "index";
const skills: string = "skills";
const projects: string = "projects";
const contact: string = "contact";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(index);

  const setCurrentNav = (toChange: string) => {
    return currentPage === toChange ? styles.currentnav : styles.navtext;
  };

  return (
    <div className={`${styles.container} ${Josefin.className}`}>
      <Head>
        <title>nah-red.net</title>
        <link rel="nrnlogo" href="images/logo192.png" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <div className={"flex justify-center"}>
        <MButton onClick={() => setCurrentPage(index)}>
          <Image id={styles.mynavlogo} src={beard} alt="website logo" />
          <div className={SquarePegTrue.className} id={styles.imagenavtext}>
            Alex Harris
          </div>
        </MButton>
      </div>
      <span className={`${styles.mynav} flex justify-center`}>
        <MButton
          id={setCurrentNav(index)}
          onClick={() => setCurrentPage(index)}
        >
          Bio
        </MButton>
        <MButton
          id={setCurrentNav(skills)}
          onClick={() => setCurrentPage(skills)}
        >
          Skills
        </MButton>
        <MButton
          id={setCurrentNav(projects)}
          onClick={() => setCurrentPage(projects)}
        >
          Projects
        </MButton>
        <MButton
          id={setCurrentNav(contact)}
          onClick={() => setCurrentPage(contact)}
        >
          Contact
        </MButton>
      </span>
      <span>{PageRender(currentPage)}</span>
      <main>{children}</main>
    </div>
  );
}
