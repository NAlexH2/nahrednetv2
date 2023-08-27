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
        sx={{
          fontSize: "60px",
          color: "var(--honey)",
          border: "ActiveBorder",
          borderColor: "var(--toastedalmond)",
          borderStyle: "solid",
          borderRadius: "20%",
          background: "var(--oceanslatelight)",
        }}
        className="max-md:mt-6 ml-3 sm:mt-7"
      />
    </>
  );
};

export default NRNHamburgerButton;
