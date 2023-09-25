import { ClassStyles } from "styles";

interface ButtonProps {
  className?: string;
  id?: string | undefined;
  text?: String;
}

export const ProjectButton = (props: ButtonProps) => {
  return (
    <>
      <div
        className={`${ClassStyles.ProjectButton_base} ${props.className} m-2 p-0.5 rounded-lg `}
      >
        <div
          className={`${ClassStyles.ProjectButton_info} py-2 max-md:text-sm`}
        >
          {props.text}
        </div>
      </div>
    </>
  );
};

export default ProjectButton;
