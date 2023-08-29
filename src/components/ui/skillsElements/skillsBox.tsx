import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

interface ItemsList {
  listedItems: string[];
}

export default function SkillsBox({ listedItems }: ItemsList) {
  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;
    const isLastItem = index === listedItems.length - 1;

    return (
      <ListItem
        style={style}
        key={index}
        component="div"
        disablePadding
        divider={isLastItem ? false : true}
      >
        <ListItemText
          className="flex justify-center py-2 text-center"
          primary={`${listedItems[index]}`}
        />
      </ListItem>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: 410,
        maxWidth: 360,
        bgcolor: "var(--oceanslatelight)",
        border: "ActiveBorder",
        borderStyle: "solid",
        borderRadius: "2%",
        fontFamily: "inherit",
      }}
      id="MyMuiListBox"
    >
      <FixedSizeList
        height={400}
        width={350}
        itemSize={75.6}
        itemCount={listedItems.length}
        overscanCount={4}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
