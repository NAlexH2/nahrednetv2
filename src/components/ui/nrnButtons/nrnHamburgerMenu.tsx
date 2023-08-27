import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { MouseEventHandler } from "react";

interface MButtonProps {
  className?: string;
  id?: string;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
}

export const NRNHamburgerButton = () => {
  return (
    <>
      <MenuOpenIcon
        sx={{ fontSize: "72px", color: "var(--toastedalmond)" }}
        className="max-md:mt-6 ml-3 sm:mt-8"
      />
    </>
  );
};

export default NRNHamburgerButton;
