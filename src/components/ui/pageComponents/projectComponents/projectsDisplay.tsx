import { ProjectButton } from "components/ui/nrnButtons";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import { projectLists } from "./projectList";
import { Box } from "@mui/material";
import { ClassStyles } from "styles";

function ButtonBuild() {
  return (
    <>
      <Box>
        <ul>
          {projectLists.map((project, index) => {
            return (
              <li key={index} className="flex justify-center">
                <Tab value={index + 1} className="w-[75%]">
                  <ProjectButton text={project} />
                </Tab>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
}

function TabPanelBuild() {
  return projectLists.map((project, index) => {
    return (
      <TabPanel key={index} value={index + 1}>
        {project}
      </TabPanel>
    );
  });
}

export const ProjectsDisplay = () => {
  const projListLen = projectLists.length;
  return (
    <>
      <Tabs defaultValue={1}>
        <TabsList>
          <div className="">
            <div className="flex justify-center">
              <div className={`w-80`}>
                <ButtonBuild />
              </div>
              <TabPanelBuild />
            </div>
          </div>
        </TabsList>
      </Tabs>
    </>
  );
};

export default ProjectsDisplay;
