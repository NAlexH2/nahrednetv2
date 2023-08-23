import { useState } from "react";
import { styles } from "styles";
import NRNButton from "./nrnButton";

const index: string = "index";
const skills: string = "skills";
const projects: string = "projects";
const contact: string = "contact";

interface NavBarProps {
  onUpdate: (data: string) => void;
  thisPage: string;
}

export const NavBar = ({ onUpdate, thisPage }: NavBarProps) => {
  const updateCurrentNavStyle = (toChange: string) => {
    return thisPage === toChange ? styles.currentnav : styles.navtext;
  };
  return (
    <nav className={`${styles.mynav} flex justify-center mb-5`}>
      <NRNButton
        id={updateCurrentNavStyle(index)}
        onClick={() => onUpdate(index)}
      >
        Bio
      </NRNButton>
      <NRNButton
        id={updateCurrentNavStyle(skills)}
        onClick={() => onUpdate(skills)}
      >
        Skills
      </NRNButton>
      <NRNButton
        id={updateCurrentNavStyle(projects)}
        onClick={() => onUpdate(projects)}
      >
        Projects
      </NRNButton>
      <NRNButton
        id={updateCurrentNavStyle(contact)}
        onClick={() => onUpdate(contact)}
      >
        Contact
      </NRNButton>
    </nav>
  );
};

export default NavBar;
