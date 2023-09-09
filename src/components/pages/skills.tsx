import React from "react";
import SkillsBox from "components/ui/skillsElements/skillsBox";
import { styles } from "styles";
import {
  knownLangs,
  knownTools,
  softSkills,
  technicalSkills,
  completedCourses,
} from "components/ui/skillsElements/skillsLists";
import { List, ListItem } from "@mui/material";

const skillsGroupsList: [string, string[]][] = [
  ["Languages", knownLangs],
  ["Tools", knownTools],
  ["Soft Skills", softSkills],
  ["Technical Skills", technicalSkills],
  ["Completed Courses", completedCourses],
];

export const Skills = () => {
  function skillsBoxBuilder() {
    let boxes = [];
    for (let i = 0; i < skillsGroupsList.length; ++i) {
      let groupListName: string = skillsGroupsList[i][0];
      let listOfSkills: string[] = skillsGroupsList[i][1];

      boxes.push(
        <ListItem>
          <div className="pr-2">
            {groupListName}
            <SkillsBox listedItems={listOfSkills} />
          </div>
        </ListItem>
      );
    }
    return boxes;
  }
  return (
    <div className="container mx-auto ">
      <div className="md:flex justify-center md:mx-12 mb-7 max-md:px-10">
        <h1 className={styles.mynav}>Skills page</h1>
      </div>

      {/* <div className="content-center"> convert to invis column/padding*/}
      <List className="grid grid-cols-3 content-center">
        {skillsBoxBuilder()}
      </List>
      {/* </div> */}
    </div>
  );
};

export default Skills;
