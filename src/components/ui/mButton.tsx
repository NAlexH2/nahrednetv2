import React from "react";
import { Button } from "@mui/material";

interface MButtonProps {
  text?: string;
  className?: string | undefined;
  id?: string | undefined;
  onClick?: () => void;
  children?: React.ReactNode | undefined;
}

const MButton = (prop: MButtonProps) => {
  return (
    <Button
      variant="contained"
      className={prop.className !== undefined ? prop.className : undefined}
      id={prop.id !== undefined ? prop.id : undefined}
      onClick={prop.onClick}
      sx={{
        "&:hover": { backgroundColor: "transparent", boxShadow: "none" },
        backgroundColor: "transparent",
        boxShadow: "none",
        textTransform: "none",
      }}
      disableRipple
    >
      {prop.children}
      {prop.text}
    </Button>
  );
};

export default MButton;
