import React from "react";
import { Index, Skills, Projects, Contact } from "components/pages";

const Bio: string = "Bio";
const skills: string = "Skills";
const projects: string = "Projects";
const contact: string = "Contact";

const PageRender = (pageIdent: String) => {
  if (pageIdent === Bio) {
    return <Index />;
  } else if (pageIdent === skills) {
    return <Skills />;
  } else if (pageIdent === projects) {
    return <Projects />;
  } else if (pageIdent === contact) {
    return <Contact />;
  }
};

export default PageRender;
