import { ClassStyles } from "styles";

interface ButtonProps {
  className?: string;
  id?: string | undefined;
  text?: String;
}

export const ProjectButton = (props: ButtonProps) => {
  return (
    <>
      <div className={`${ClassStyles.ProjectButton_base} m-2 p-2 rounded-lg `}>
        <div className={`${ClassStyles.ProjectButton_info} py-2`}>
          {props.text}
        </div>
      </div>
    </>
  );
};

export default ProjectButton;
