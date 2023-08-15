import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css";
import beard from "../../public/images/beard.svg";
import { SquarePegTrue, Josefin } from "./fonts";
import { Index, Skills, Projects, Contact } from "@/pages/imports";

export const siteTitle = "nah-red.net";

const index = "index";
const skills = "skills";
const projects = "projects";
const contact = "contact";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState(index); // 'home' or 'contact'

  const renderContent = () => {
    if (currentPage == index) {
      return <Index />;
    } else if (currentPage == skills) {
      return <Skills />;
    } else if (currentPage == projects) {
      return <Projects />;
    } else if (currentPage == contact) {
      return <Contact />;
    }
  };

  const setCurrentNav = (toChange) => {
    return currentPage == toChange ? styles.currentnav : styles.navtext;
  };

  return (
    <div className={`${styles.container} ${Josefin.className}`}>
      <Head>
        <title>nah-red.net</title>
        <link rel="nrnlogo" href="images/logo192.png" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <button
        className={SquarePegTrue.className}
        id={styles.imagenavtext}
        onClick={() => setCurrentPage(index)}
      >
        <Image id={styles.mynavlogo} src={beard} alt="website logo" />
        Alex Harris
      </button>
      <span className={`${styles.mynav} flex justify-center`}>
        <button id={setCurrentNav(index)} onClick={() => setCurrentPage(index)}>
          Bio
        </button>
        <button
          id={setCurrentNav(skills)}
          onClick={() => setCurrentPage(skills)}
        >
          Skills
        </button>
        <button
          id={setCurrentNav(projects)}
          onClick={() => setCurrentPage(projects)}
        >
          Projects
        </button>
        <button
          id={setCurrentNav(contact)}
          onClick={() => setCurrentPage(contact)}
        >
          Contact
        </button>
      </span>
      <main>{renderContent()}</main>
    </div>
  );
}
