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
              <li key={index}>
                <Tab value={index + 1} className="w-[100%]">
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
  const projListLength = projectLists.length;
  return (
    <>
      <Tabs defaultValue={1} className="mt-3 mx-5">
        <TabsList>
          <div
            className="grid max-lg:grid-cols-12 grid-cols-24 lg:grid-cols-29
          xl:grid-cols-30 2xl:grid-cols-18 min-w-[500px]"
          >
            <div className={` max-sm:col-span-4 md:col-span-3 col-span-8`}>
              <ButtonBuild />
            </div>
            <div />
            <div className="col-span-15">
              <TabPanelBuild />
            </div>
          </div>
        </TabsList>
      </Tabs>
    </>
  );
};

export default ProjectsDisplay;
