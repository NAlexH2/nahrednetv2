import { NRNButton, NRNImage, SquarePegTrue } from ".";
import { styles } from "styles";
import beard from "/public/images/beard.svg";

const index: string = "index";

interface NavBarProps {
  onUpdate: (data: string) => void;
}

const PageHeader = ({ onUpdate }: NavBarProps) => {
  return (
    <header className={"flex justify-center"}>
      <NRNButton onClick={() => onUpdate(index)}>
        <NRNImage id={styles.mynavlogo} src={beard} alt="website logo" />
        <div className={SquarePegTrue.className} id={styles.imagenavtext}>
          Alex Harris
        </div>
      </NRNButton>
    </header>
  );
};

export default PageHeader;
