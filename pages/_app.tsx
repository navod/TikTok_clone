import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebaar from "./components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setSSR] = useState(true);

  useEffect(() => {
    setSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebaar />
        </div>

        <div className="mt-4 flex overflow-auto flex-col gap-10 h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
