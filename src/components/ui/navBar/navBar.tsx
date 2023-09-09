import { NRNButton } from "../nrnButtons";

interface NavBarProps {
  onUpdate: (data: string) => void;
  thisPage: string;
  id?: string;
  className?: string | undefined;
}
const defaultNavBarButtonStyle = "max-md:mr-0.5 md:mr-8";
export const NavBar = ({ onUpdate, thisPage, id, className }: NavBarProps) => {
  return (
    <NRNButton
      className={className === undefined ? defaultNavBarButtonStyle : className}
      id={id}
      onClick={() => onUpdate(thisPage)}
      text={thisPage}
    />
  );
};

export default NavBar;
