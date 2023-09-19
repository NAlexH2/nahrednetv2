import { Dispatch, SetStateAction, useState } from "react";
import { AccordionItem } from "./accordionData";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { styles } from "styles";
import { NRNButton } from "../nrnButtons";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Theme, duration } from "@mui/material";
import AnimateTx from "components/utils/animateTx";

interface AccordionInf {
  sections: AccordionItem[];
}

export const WorkAccordion = ({ sections }: AccordionInf) => {
  const [expanded, setExpanded] = useState<number | false>(0);
  const firstItem: number = 0; //Just a nice keyword
  const lastItem: number = sections.length - 1; //ID our final accordion item

  const handleChange =
    (sectionID: number) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? sectionID : false);
    };

  // Define a custom style so the accordion doesn't look awful
  const accordionStyle = (sectionID: number): React.CSSProperties => {
    const commonAccordionStyles = {
      borderLeft: "3px solid var(--honey)",
      borderRight: "3px solid var(--honey)",
    };

    if (sectionID === firstItem) {
      return {
        ...commonAccordionStyles,
        borderTop: "3px solid var(--honey)",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "0.5rem",
        borderTopLeftRadius: "0.5rem",
      };
    } else if (sectionID === lastItem) {
      return {
        ...commonAccordionStyles,
        borderBottom: "3px solid var(--honey)",
        borderBottomRightRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
      };
    } else {
      return commonAccordionStyles;
    }
  };

  // // Build the accordion based on the map below.
  // const AccordionRender = ({
  //   section,
  //   index,
  // }: {
  //   section: AccordionItem;
  //   index: number;
  // }) => {
  //   return (
  //     <Accordion
  //       className="p-1"
  //       id="WorkHistory"
  //       expanded={expanded === section.id}
  //       onChange={handleChange(section.id)}
  //       style={accordionStyle(index)}
  //     >
  //       <AccordionSummary
  //         className="m-0"
  //         sx={{
  //           // Setup the proper border radius so it looks cleaner
  //           ...(section.id === expanded
  //             ? {
  //                 background: "var(--oceanslatelight)",
  //                 color: "var(--toastedalmond)",
  //                 border: "solid 2px black",
  //               }
  //             : {
  //                 background: "var(--toastedalmond)",
  //                 borderBottomRightRadius: "0.5rem",
  //                 borderBottomLeftRadius: "0.5rem",
  //                 border: "solid 2px black",
  //               }),
  //           borderTopLeftRadius: "0.5rem",
  //           borderTopRightRadius: "0.5rem",
  //         }}
  //         expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
  //       >
  //         <Typography className="m-0" align="left" variant="inherit">
  //           {section.title}
  //           <div className="py-1" />
  //           {section.dates}
  //         </Typography>
  //       </AccordionSummary>
  //       {expanded === section.id && (
  //         <Motion.div
  //           key={index}
  //           initial={{ height: 0 }}
  //           animate={{ height: "auto" }}
  //           exit={{ height: 0 }}
  //           transition={{ duration: 0.4 }}
  //           className="overflow-clip"
  //         >
  //           <AccordionDetails
  //             className="bg-[var(--toastedalmond)]"
  //             sx={{
  //               borderBottomRightRadius: "0.5rem",
  //               borderBottomLeftRadius: "0.5rem",
  //               borderBottom: "2px solid black",
  //               borderLeft: "2px solid black",
  //               borderRight: "2px solid black",
  //             }}
  //           >
  //             <Typography className="m-0" align="left" variant="inherit">
  //               {section.content}
  //             </Typography>
  //           </AccordionDetails>
  //         </Motion.div>
  //       )}
  //     </Accordion>
  //   );
  // };

  // Return the component based on all the above logic
  return (
    <>
      <h1 className={`${styles.mynav} flex justify-center pb-2`}>
        Work History
      </h1>
      {sections.map((section, index) => (
        <div key={index}>
          <Accordion
            className="p-1"
            id="WorkHistory"
            expanded={expanded === section.id}
            onChange={handleChange(section.id)}
            style={accordionStyle(index)}
          >
            <AccordionSummary
              className="m-0"
              sx={{
                // Setup the proper border radius so it looks cleaner
                ...(section.id === expanded
                  ? {
                      background: "var(--oceanslatelight)",
                      color: "var(--toastedalmond)",
                      border: "solid 2px black",
                    }
                  : {
                      background: "var(--toastedalmond)",
                      borderBottomRightRadius: "0.5rem",
                      borderBottomLeftRadius: "0.5rem",
                      border: "solid 2px black",
                    }),
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
            >
              <Typography className="m-0" align="left" variant="inherit">
                {section.title}
                <div className="py-1" />
                {section.dates}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              className="bg-[var(--toastedalmond)]"
              sx={{
                borderBottomRightRadius: "0.5rem",
                borderBottomLeftRadius: "0.5rem",
                borderBottom: "2px solid black",
                borderLeft: "2px solid black",
                borderRight: "2px solid black",
              }}
            >
              <div
                className="-mt-6 m-0 text-justify"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export default WorkAccordion;
