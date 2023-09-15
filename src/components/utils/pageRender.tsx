import React from "react";
import { Index, Experience, Projects, Contact } from "components/pages";

const Bio: string = "Bio";
const experience: string = "Experience";
const projects: string = "Projects";
const contact: string = "Contact";

const PageRender = (pageIdent: String) => {
  if (pageIdent === Bio) {
    return <Index />;
  } else if (pageIdent === experience) {
    return <Experience />;
  } else if (pageIdent === projects) {
    return <Projects />;
  } else if (pageIdent === contact) {
    return <Contact />;
  }
};

export default PageRender;
