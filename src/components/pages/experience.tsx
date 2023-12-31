import React from "react";

import {
  knownLangs,
  knownTools,
  softSkills,
  technicalSkills,
  completedCourses,
} from "components/ui/pageComponents/experienceComponents/skillsLists";
import {
  accordionData,
  SkillsBox,
  WorkAccordion,
} from "components/ui/pageComponents/experienceComponents";
import { ListItem } from "@mui/material";
import { ClassStyles } from "styles";
import AnimateTx from "components/utils/animateTx";

const skillsGroupsList: [string, string[]][] = [
  ["Languages", knownLangs],
  ["Tools", knownTools],
  ["Technical Skills", technicalSkills],
  ["Soft Skills", softSkills],
  ["Completed Courses", completedCourses],
];

export const Experience = () => {
  function skillsBoxBuilder() {
    // Generate the boxes with all the skills listed in skillsList.ts
    // with a map.
    const boxes = skillsGroupsList.map((group, i) => {
      const groupListName: string = group[0];
      const listOfSkills: string[] = group[1];
      return (
        <ListItem key={i}>
          <div className="pl-2 pb-5">
            <div className="flex justify-center text-3xl pb-2">
              {groupListName}
            </div>
            <SkillsBox listedItems={listOfSkills} />
          </div>
        </ListItem>
      );
    });

    return (
      <>
        <div className="flex justify-center">
          <h1 className={`${ClassStyles.MyNav} pb-2`}>Skills</h1>
        </div>
        <div className="flex justify-center">
          <div className={`${ClassStyles.SkillBoxContainer} overflow-y-auto`}>
            {boxes}
          </div>
        </div>
      </>
    );
  }

  return (
    <AnimateTx>
      <div className="container mx-auto">
        <div
          className="lg:px-10 md:grid md:grid-cols-24 lg:grid-cols-29
          xl:grid-cols-30 2xl:grid-cols-18"
        >
          <div className="max-xl:hidden xl:col-span-2 2xl:col-span-2" />
          <div
            className="max-md:mx-auto md:col-span-10 lg:col-span-10 xl:col-span-8 
            2xl:col-span-4"
          >
            {skillsBoxBuilder()}
          </div>
          <div
            className="max-lg:hidden lg:col-span-2 xl:col-span-2
            2xl:col-span-2"
          />
          <div
            className="max-lg:px-3 max-md:pt-10 max-md:pb-5 md:col-span-14
            lg:col-span-17 xl:col-span-17 2xl:col-span-9"
          >
            <WorkAccordion sections={accordionData} />
          </div>
        </div>
      </div>
    </AnimateTx>
  );
};

export default Experience;
