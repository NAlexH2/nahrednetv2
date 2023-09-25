import { ProjectsDisplay } from "components/ui/pageComponents/projectComponents";
import AnimateTx from "components/utils/animateTx";
import React from "react";
import { ClassStyles } from "styles";

export const Projects = () => {
  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div>
          <ProjectsDisplay />
        </div>
      </div>
    </AnimateTx>
  );
};

export default Projects;
