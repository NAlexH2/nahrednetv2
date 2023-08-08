import dynamic from "next/dynamic";
import styles from "../styles/styles.module.css";
import Link from "next/link";

const Layout = dynamic(() => import("../components/layout"), { ssr: false });

const contactLink = "/contact";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.mynav}>test</h1>
      <Link href={contactLink} prefetch>
        Contact
      </Link>
    </Layout>
  );
}
