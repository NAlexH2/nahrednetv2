import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

function renderRow(props: ListChildComponentProps) {
  const { index } = props;

  return (
    <ListItem key={index} component="div" disablePadding>
      <ListItemButton divider>
        <ListItemText
          className="flex justify-center py-2"
          primary={`Item ${index + 1}`}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default function TechnicalSkills() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 410,
        maxWidth: 360,
        bgcolor: "var(--oceanslatelight)",
        border: "ActiveBorder",
        borderColor: "var(--toastedalmond)",
        borderStyle: "solid",
        borderRadius: "2%",
        fontFamily: "inherit",
      }}
    >
      <FixedSizeList
        height={400}
        width={354}
        itemSize={46}
        itemCount={50}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
