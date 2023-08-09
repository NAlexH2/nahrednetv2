import dynamic from "next/dynamic";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Layout = dynamic(() => import("../components/layout"), { ssr: false });
const contactLink = "/contact";

export default function Home() {
  return (
    <Layout>
      <span className="flex justify-center">
        <Link href={contactLink} prefetch>
          Contact
        </Link>
      </span>
      <h1 className={styles.mynav}>bio</h1>
    </Layout>
  );
}
