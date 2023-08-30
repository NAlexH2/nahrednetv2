import { NRNButton } from "../nrnButtons";

interface NavBarProps {
  onUpdate: (data: string) => void;
  thisPage: string;
  id?: string;
}

export const NavBar = ({ onUpdate, thisPage, id }: NavBarProps) => {
  return (
    <NRNButton
      className="max-md:mr-0.5 md:mr-8"
      id={id}
      onClick={() => onUpdate(thisPage)}
      text={thisPage}
    />
  );
};

export default NavBar;
