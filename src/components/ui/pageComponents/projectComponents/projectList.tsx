import { ReactNode } from "react";
import { NRNV2, NRNV1, Safe, PhoneBill, HaskellGo } from "./projects";

const projectLists: [string, ReactNode][] = [
  ["nah-red.net v2", <NRNV2 key="0" />],
  ["nah-red.net v1", <NRNV1 key="1" />],
  ["SAFE", <Safe key="2" />],
  ["Phone Bill", <PhoneBill key="3" />],
  ["HaskellGo", <HaskellGo key="4" />],
];

export default projectLists;
