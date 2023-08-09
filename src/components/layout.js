import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css";
import beard from "../../public/images/beard.svg";
import { SquarePegTrue, Josefin } from "./fonts";

export const siteTitle = "nah-red.net";

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${Josefin.className}`}>
      <Head>
        <title>nah-red.net</title>
        <link rel="nrnlogo" href="images/logo192.png" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <Link
        className={SquarePegTrue.className}
        id={styles.imagenavtext}
        href="/"
      >
        <Image id={styles.mynavlogo} src={beard} alt="website logo" />
        Alex Harris
      </Link>
      <main>{children}</main>
    </div>
  );
}
