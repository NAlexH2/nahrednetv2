import { TechnicalSkills } from "components/ui/skillsElements";
import React from "react";
import { styles } from "styles";

export const Skills = () => {
  return (
    <div className="container mx-auto">
      <div>
        <text className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
          <h1 className={styles.mynav}>Skills page</h1>
        </text>
      </div>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
};

export default Skills;
