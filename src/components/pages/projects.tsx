import { ProjectsDisplay } from "components/ui/pageComponents/projectComponents";
import AnimateTx from "components/utils/animateTx";
import React from "react";
import { ClassStyles } from "styles";

export const Projects = () => {
  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div
          className="md:grid md:grid-cols-24 lg:grid-cols-29
          xl:grid-cols-30 2xl:grid-cols-18"
        >
          <ProjectsDisplay />
        </div>
      </div>
    </AnimateTx>
  );
};

export default Projects;
