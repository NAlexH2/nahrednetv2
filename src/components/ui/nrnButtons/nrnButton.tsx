import React, { MouseEventHandler } from "react";
import { Button, Box, SxProps, Theme } from "@mui/material";

interface MButtonProps {
  className?: string;
  id?: string;
  text?: string;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const NRNButton = (props: MButtonProps) => {
  return (
    <Box className={props.className}>
      <Button
        variant="contained"
        id={props.id}
        onClick={props.onClick}
        sx={{
          "&:hover": { backgroundColor: "transparent", boxShadow: "none" },
          backgroundColor: "transparent",
          boxShadow: "none",
          textTransform: "none",
          font: "inherit",
          color: "inherit",
          padding: 0,
          border: "none",
          borderRadius: "none",
          ...props.sx,
        }}
        disableRipple
        type={props.type}
      >
        {props.text}
        {props.children}
      </Button>
    </Box>
  );
};

export default NRNButton;
