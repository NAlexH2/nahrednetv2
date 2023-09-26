import { ProjectButton } from "components/ui/nrnButtons";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import projectLists from "./projectList";
import { ClassStyles } from "styles";
import { AnimatePresence } from "framer-motion";

function HorizontalButtonBuild() {
  return (
    <ul
      className={`${ClassStyles.HorizontalProjectListBox} flex flex-row gap-8 
        overflow-y-auto w-full`}
    >
      <li className="ml-1" />
      {projectLists.map((project, index) => {
        return (
          <Tab key={index} value={index + 1} className="">
            <li className="w-48">
              <ProjectButton text={project[0]} className="" />
            </li>
          </Tab>
        );
      })}
      <li className="mr-1" />
    </ul>
  );
}

function GridButtonBuild() {
  return (
    <div className="flex flex-wrap justify-center">
      {projectLists.map((project, index) => (
        <Tab
          key={index}
          value={index + 1}
          className="md:w-[30%] md:max-w-[220px]"
        >
          <ProjectButton text={project[0]} />
        </Tab>
      ))}
    </div>
  );
}

function TabPanelBuild() {
  return projectLists.map((project, index) => {
    return (
      <TabPanel key={index} value={index + 1}>
        {project[1]}
      </TabPanel>
    );
  });
}

export const ProjectsDisplay = () => {
  return (
    <>
      <Tabs defaultValue={1} className="mt-3 mx-5">
        <TabsList>
          <div className="lg:min-w-[500px]">
            <div className="sm:md:hidden">
              <HorizontalButtonBuild />
            </div>
            <div className="max-md:hidden">
              <GridButtonBuild />
            </div>

            <div
              className={`${ClassStyles.ProjectContentBox} 
                 flex justify-center mt-5 md:mx-12`}
            >
              <AnimatePresence>
                <TabPanelBuild />
              </AnimatePresence>
            </div>
          </div>
        </TabsList>
      </Tabs>
    </>
  );
};

export default ProjectsDisplay;
