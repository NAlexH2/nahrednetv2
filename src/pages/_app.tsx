import { AppProps } from "next/app";
import "styles/global.css";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout"), { ssr: false });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
