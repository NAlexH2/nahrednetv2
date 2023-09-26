import React, { MouseEventHandler } from "react";
import { Button, Box } from "@mui/material";

interface MButtonProps {
  className?: string;
  id?: string;
  text?: string;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
}

const NavButton = (prop: MButtonProps) => {
  return (
    <Box className={prop.className}>
      <Button
        variant="contained"
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
        {prop.text}
        {prop.children}
      </Button>
    </Box>
  );
};

export default NavButton;
