// import Layout, { siteTitle } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import PageHeader from "./header";
import styles from "../components/styles.module.css";

export default function Home() {
  return (
    <div className={styles.mycontainer}>
      <PageHeader />
      <h1>test</h1>
    </div>
  );
}
