import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styles } from "styles";
import { NRNButton } from "..";
import NRNHamburgerButton from "../nrnButtons/nrnHamburgerMenu";

type Anchor = "left";

const index: string = "index";
const skills: string = "skills";
const projects: string = "projects";
const contact: string = "contact";

interface NavBarProps {
  onUpdate: (data: string) => void;
  thisPage: string;
}

export default function SmNavBar({ onUpdate, thisPage }: NavBarProps) {
  const updateCurrentNavStyle = (toChange: string) => {
    return thisPage === toChange ? styles.currentnav : styles.navtext;
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const navButtons = (
    <nav className={`${styles.mynav} text-center`}>
      <NRNButton
        className="mx-5 my-8"
        id={updateCurrentNavStyle(index)}
        onClick={() => onUpdate(index)}
      >
        Bio
      </NRNButton>
      <NRNButton
        className="mx-5 my-8"
        id={updateCurrentNavStyle(skills)}
        onClick={() => onUpdate(skills)}
      >
        Skills
      </NRNButton>
      <NRNButton
        className="mx-5 my-8"
        id={updateCurrentNavStyle(projects)}
        onClick={() => onUpdate(projects)}
      >
        Projects
      </NRNButton>
      <NRNButton
        className="mx-5 my-8"
        id={updateCurrentNavStyle(contact)}
        onClick={() => onUpdate(contact)}
      >
        Contact
      </NRNButton>
    </nav>
  );

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
      <List>{navButtons}</List>
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
