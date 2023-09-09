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
          className="flex justify-center py-2 px-1 text-center"
          primary={`${listedItems[index]}`}
        />
      </ListItem>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: 310,
        maxWidth: 280,
        bgcolor: "var(--oceanslatelight)",
        borderStyle: "solid",
        borderRadius: "2%",
        fontSize: "14px",
      }}
      id="MyMuiListBox" //located in global css to assist in specificity id
    >
      <FixedSizeList
        height={300}
        width={270}
        itemSize={55.6}
        itemCount={listedItems.length}
        overscanCount={4}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
