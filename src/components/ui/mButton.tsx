import React from "react";
import { Button } from "@mui/material";

interface MButtonProps {
  text?: string;
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
      }}
      disableRipple
    >
      {prop.children}
      {prop.text}
    </Button>
  );
};

export default MButton;
