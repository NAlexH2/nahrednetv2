import React from "react";

import {
  knownLangs,
  knownTools,
  softSkills,
  technicalSkills,
  completedCourses,
} from "components/ui/skillsElements/skillsLists";
import { List, ListItem } from "@mui/material";
import { styles } from "styles";
import SkillsBox from "components/ui/skillsElements/skillsBox";
import AnimateTx from "components/utils/animateTx";
import WorkAccordion from "components/ui/skillsElements/workAccordion";
import accordionData from "components/ui/skillsElements/accordionData";

const skillsGroupsList: [string, string[]][] = [
  ["Languages", knownLangs],
  ["Tools", knownTools],
  ["Soft Skills", softSkills],
  ["Technical Skills", technicalSkills],
  ["Completed Courses", completedCourses],
];

export const Experience = () => {
  function skillsBoxBuilder() {
    let boxes = [];
    for (let i = 0; i < skillsGroupsList.length; ++i) {
      const groupListName: string = skillsGroupsList[i][0];
      const listOfSkills: string[] = skillsGroupsList[i][1];

      boxes.push(
        <ListItem>
          <div className="pl-1.5 pb-5">
            <div className="flex justify-center text-3xl pb-2">
              {groupListName}
            </div>
            <SkillsBox listedItems={listOfSkills} />
          </div>
        </ListItem>
      );
    }
    return boxes;
  }
  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div className="flex justify-center md:mx-12 mb-7 max-md:px-10">
          {/* <div className="content-center"> convert to invis column/padding*/}

          <div className="flex justify-center">
            <div className="md:mx-12 mb-7 max-md:px-10">
              <h1 className={`${styles.mynav} flex justify-center pb-2`}>
                Skills
              </h1>
              <List className="overflow-y-auto SkillsBoxContainer">
                {skillsBoxBuilder()}
              </List>
            </div>
          </div>
          <div className="flex justify-center md:mx-12 mb-7 max-md:px-10 max-lg:hidden">
            <WorkAccordion sections={accordionData} />
          </div>
        </div>
        <div className="flex justify-center md:mx-12 mb-7 max-md:px-10 lg:hidden">
          <WorkAccordion sections={accordionData} />
        </div>
      </div>
    </AnimateTx>
  );
};

export default Experience;
