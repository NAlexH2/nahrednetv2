import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { MouseEventHandler } from "react";

export const NRNHamburgerButton = () => {
  return (
    <div className="max-md:pt-6 pl-3 sm:pt-7">
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
      />
    </div>
  );
};

export default NRNHamburgerButton;
