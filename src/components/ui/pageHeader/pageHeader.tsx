import { NRNButton } from "../nrnButtons";
import { NRNImage } from "../imageComponents";
import { styles } from "styles";
import beard from "images/beard.svg";

interface NavBarProps {
  onUpdate: (data: string) => void;
}

const PageHeader = ({ onUpdate }: NavBarProps) => {
  return (
    <header className={"flex justify-center mt-2 max-md:mb-4 max-sm:-ml-6"}>
      <NRNButton onClick={() => onUpdate("Bio")}>
        <NRNImage id={styles.mynavlogo} src={beard} alt="website logo" />
        <div id={styles.imagenavtext}>Alex Harris</div>
      </NRNButton>
    </header>
  );
};

export default PageHeader;
