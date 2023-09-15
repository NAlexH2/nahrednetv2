import { Dispatch, SetStateAction, useState } from "react";
import { AccordionItem } from "./accordionData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { styles } from "styles";

interface AccordionInf {
  sections: AccordionItem[];
}

const AccordionRender = ({ section }: { section: AccordionItem }) => {
  return (
    <div className="p-0.5">
      <div
        className=" border-[2px] border-black bor w-full xl:text-xl md:text-lg
        focus:outline-none p-4 bg-[var(--toastedalmond)] rounded-lg shadow-md 
        justify-between 
        items-center text-black"
      >
        <div className="pb-5">{section.title}</div>
        <div>{section.dates}</div>
      </div>
    </div>
  );
};
export const WorkAccordion = ({ sections }: AccordionInf) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="">
      <h1 className={`${styles.mynav} flex justify-center pb-2`}>
        Work History
      </h1>
      <div className="bg-[var(--honey)] rounded-lg shadow-md">
        {sections.map((section, index) => (
          <AccordionRender key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default WorkAccordion;
