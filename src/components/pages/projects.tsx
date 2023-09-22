import AnimateTx from "components/utils/animateTx";
import React from "react";
import { styles } from "styles";

export const Projects = () => {
  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div>
          <text className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
            <h1 className={styles.MyNav}>Projects page</h1>
          </text>
        </div>
      </div>
    </AnimateTx>
  );
};

export default Projects;
