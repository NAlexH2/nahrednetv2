import { NRNButton } from "../nrnButtons";
import { NRNImage } from "../imageComponents";
import { styles } from "styles";
import beard from "/public/images/beard.svg";

interface NavBarProps {
  onUpdate: (data: string) => void;
}

const PageHeader = ({ onUpdate }: NavBarProps) => {
  return (
    <header className={"flex justify-center max-md:mb-4 max-sm:-ml-6"}>
      <NRNButton onClick={() => onUpdate("Bio")}>
        <NRNImage id={styles.MyNavLogo} src={beard} alt="website logo" />
        <div id={styles.ImageNavText}>Alex Harris</div>
      </NRNButton>
    </header>
  );
};

export default PageHeader;
