import React, { useState } from "react";
import { styles } from "styles";
import PageRender from "./pageRender";
import { Button } from "@mui/material";
import MButton from "./mButton";

const beard = "images/beard.svg";
const index = "index";
const skills = "skills";
const projects = "projects";
const contact = "contact";

const NavDriver = () => {
  const [currentPage, setCurrentPage] = useState(index); // 'home' or 'contact'

  const setCurrentNav = (toChange: string) => {
    return currentPage === toChange ? styles.currentnav : styles.navtext;
  };

  return (
    <div>
      <div className={"flex justify-center"}>
        <MButton onClick={() => setCurrentPage(index)}>
          <img id={styles.mynavlogo} src={beard} alt="website logo" />
          <div id={styles.imagenavtext}>Alex Harris</div>
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
      <main>{PageRender(currentPage)}</main>
    </div>
  );
};

export default NavDriver;
