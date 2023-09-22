import { NRNButton } from "components/ui/nrnButtons";
import { projectLists } from "./projectList";
import { ReactNode } from "react";

function ButtonBuild() {
  const buttons: ReactNode[] = [];
  for (const proj of projectLists) {
    buttons.push(
      <NRNButton text={proj} className="flex mr-[100px] w-[400px]" />
    );
  }
  return buttons;
}

export const ProjectNav = () => {
  return (
    <>
      <div className="flex justify-center">test</div>
      <div className="flex justify-center">
        <div className="flex  overflow-x-auto ProjectListContainer">
          {ButtonBuild()}
        </div>
      </div>
    </>
  );
};

export default ProjectNav;
