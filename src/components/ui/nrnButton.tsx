import React from "react";
import { Button } from "@mui/material";

interface MButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NRNButton = (prop: MButtonProps) => {
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
        padding: 0,
      }}
      disableRipple
    >
      {prop.children}
    </Button>
  );
};

export default NRNButton;
