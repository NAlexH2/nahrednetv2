import "../styles/globals.css";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout"), { ssr: false });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
