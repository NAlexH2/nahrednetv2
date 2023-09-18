import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

interface ItemsList {
  listedItems: string[];
}

export default function SkillsBox({ listedItems }: ItemsList) {
  const itemHeight = 55.6;
  const boxHeight = itemHeight * listedItems.length + 10;

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
        className="text-sm sm:text-lg"
      >
        <ListItemText
          className="flex justify-center py-2 px-1"
          primary={`${listedItems[index]}`}
        />
      </ListItem>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: boxHeight,
        maxWidth: 280,
        borderStyle: "solid",
        borderRadius: "2%",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
      }}
      id="MyMuiListBox" //located in global css to assist in element specificity
    >
      <FixedSizeList
        height={boxHeight}
        width={270}
        itemSize={itemHeight}
        itemCount={listedItems.length}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
