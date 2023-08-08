import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/layout"), { ssr: false });

export default function Contact() {
  return (
    <Layout>
      <h1>Projects</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
