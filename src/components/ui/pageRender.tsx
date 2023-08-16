import React from "react";
import { Index, Skills, Projects, Contact } from "components/pages/imports";

const index: string = "index";
const skills: string = "skills";
const projects: string = "projects";
const contact: string = "contact";

const PageRender = (pageIdent: String) => {
  if (pageIdent === index) {
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
