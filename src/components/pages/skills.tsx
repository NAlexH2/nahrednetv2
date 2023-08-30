import React from "react";
import SkillsBox from "components/ui/skillsElements/skillsBox";
import { styles } from "styles";
import {
  knownLangs,
  knownTools,
  softSkills,
  hardSkills,
  completedCourses,
} from "components/ui/skillsElements/skillsLists";

export const Skills = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
          <h1 className={styles.mynav}>Skills page</h1>
        </div>
      </div>
      <li className="flex justify-center">
        <div className="pr-2">
          Languages
          <SkillsBox listedItems={knownLangs} />
        </div>
        <div className="pr-2">
          Tools
          <SkillsBox listedItems={knownTools} />
        </div>
        <div>
          Soft Skills
          <SkillsBox listedItems={softSkills} />
        </div>
      </li>
      <li className="flex justify-center mt-4">
        <div className="pr-2">
          Technical Skills
          <SkillsBox listedItems={hardSkills} />
        </div>
        <div>
          Courses Completed
          <SkillsBox listedItems={completedCourses} />
        </div>
      </li>
    </div>
  );
};

export default Skills;
