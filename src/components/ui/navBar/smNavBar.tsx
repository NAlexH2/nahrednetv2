import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styles } from "styles";
import { NRNButton, NRNHamburgerButton } from "../nrnButtons";
import { navBarItems } from "./navItemConsts";
import { NavBar } from ".";

type Anchor = "left";

interface NavBarProps {
  onUpdate: (data: string) => void;
  thisPage: string;
}

export default function SmNavBar({ onUpdate, thisPage }: NavBarProps) {
  const [state, setState] = React.useState({
    left: false,
  });

  function barBuilder() {
    // return a particular style depending on the page currently on
    const updateCurrentNavStyle = (toChange: string) => {
      return thisPage === toChange ? styles.CurrentNav : styles.NavText;
    };
    //Return a map of buttons from my array, using the style depending on
    // the currently selected one.
    return navBarItems.map((item, index) => (
      <NavBar
        key={index}
        onUpdate={onUpdate}
        thisPage={item}
        className="mx-5 my-8"
        id={updateCurrentNavStyle(item)}
      />
    ));
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ background: "var(--oceanslatelight)" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={`${styles.MyNav} text-center`}>{barBuilder()}</List>
    </Box>
  );

  return (
    <div>
      {
        <>
          <NRNButton onClick={toggleDrawer("left", true)}>
            {<NRNHamburgerButton />}
          </NRNButton>
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: "var( --oceanslatelight)",
                border: "ActiveBorder",
                borderStyle: "inset",
                borderWidth: "5px",
                borderColor: "var(--transparentalmond)",
              },
            }}
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </>
      }
    </div>
  );
}
