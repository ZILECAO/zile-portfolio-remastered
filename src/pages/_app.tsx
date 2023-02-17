import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { NavBar } from "../components/NavBar.js";
import { useState } from "react";


const MyApp: AppType = ({ Component, pageProps }) => {
  const [connected, setConnected] = useState(false);
  return (<>
    <Head >
      <title>Zile Cao Blockchain Portfolio</title>
      <meta
        name="Zile's Blockchain Development Portfolio"
        content='Portfolio animation with framer motion 🚀'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <NavBar />
    < Component className="scroll-smooth" {...pageProps} />
  </>)
};

export default MyApp;
