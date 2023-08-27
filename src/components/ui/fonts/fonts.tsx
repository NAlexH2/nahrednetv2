import { Josefin_Sans } from "next/font/google";
import localFont from "next/font/local";

export const SquarePegTrue = localFont({
  src: "../../../../public/fonts/SquarePeg-Reg.ttf",
});

export const Josefin = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
