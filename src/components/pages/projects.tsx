import { ProjectNav } from "components/ui/pageComponents/projectComponents";
import AnimateTx from "components/utils/animateTx";
import React from "react";
import { styles } from "styles";

export const Projects = () => {
  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
          <h1 className={styles.MyNav}>Projects page</h1>
        </div>
        <ProjectNav />
      </div>
    </AnimateTx>
  );
};

export default Projects;
