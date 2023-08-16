import React from "react";
import { Button } from "@mui/material";

interface MButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const MButton = (prop: MButtonProps) => {
  return (
    <Button
      variant="contained"
      className={prop.className}
      id={prop.id}
      onClick={prop.onClick}
      sx={{
        "&:hover": { backgroundColor: "transparent", boxShadow: "none" },
        backgroundColor: "transparent",
        boxShadow: "none",
        textTransform: "none",
        font: "inherit",
      }}
      disableRipple
    >
      {prop.children}
    </Button>
  );
};

export default MButton;
