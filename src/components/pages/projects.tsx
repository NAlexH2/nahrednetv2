import { ProjectsDisplay } from "components/ui/pageComponents/projectComponents";
import React from "react";

export const Projects = () => {
  return (
    <div className="container mx-auto max-w-[880px] -mt-4">
      <div>
        <ProjectsDisplay />
      </div>
    </div>
  );
};

export default Projects;
