import { NavButton } from "../nrnButtons";
import { NRNImage } from "../imageComponents";
import { IDStyles } from "styles";
import beard from "/public/images/beard.svg";

interface NavBarProps {
  onUpdate: (data: string) => void;
}

const PageHeader = ({ onUpdate }: NavBarProps) => {
  return (
    <header className={"flex justify-center max-md:mb-4 max-sm:-ml-6"}>
      <NavButton onClick={() => onUpdate("Bio")}>
        <NRNImage id={IDStyles.MyNavLogo} src={beard} alt="website logo" />
        <div id={IDStyles.ImageNavText}>Alex Harris</div>
      </NavButton>
    </header>
  );
};

export default PageHeader;
