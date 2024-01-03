import { ReactNode } from "react";
import {
  NRNV2,
  NRNV1,
  Safe,
  PhoneBill,
  HaskellGo,
  CloudProject,
} from "./projects";

const projectLists: [string, ReactNode][] = [
  ["Video Game Search", <CloudProject key="0" />],
  ["nah-red.net v2", <NRNV2 key="1" />],
  ["nah-red.net v1", <NRNV1 key="2" />],
  ["SAFE", <Safe key="3" />],
  ["Phone Bill", <PhoneBill key="4" />],
  ["HaskellGo", <HaskellGo key="5" />],
];

export default projectLists;
