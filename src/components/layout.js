import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css";
import beard from "../../public/images/beard.svg";

import { Josefin_Sans, Square_Peg } from "next/font/google";

const Josefin = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SquarePeg = Square_Peg({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
export const siteTitle = "nah-red.net";

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${Josefin.className}`}>
      <Head>
        <title>nah-red.net</title>
        <link rel="nrnlogo" href="images/logo192.png" />
        <link rel="icon" href="images/favicon.png" />
      </Head>

      <header className="flex justify-center">test</header>
      <span className="flex justify-center">
        <Link id="imagenavtext" href="/">
          <Image id="mynavlogo" src={beard} alt="website logo" />
          Alex Harris
        </Link>
      </span>

      <main>{children}</main>
    </div>
  );
}
