import UpperBody from "./UpperBody";
import BodyOffer from "./BodyOffer";
import HeaderHome from "../header/HeaderHome";
import Footer from "../Footer";
import BodySuggest from "./BodySuggest";
import { useEffect, useState } from "react";
import Header from "../header/Header";

const Body = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isMobile ? <Header /> : <HeaderHome />}
      <UpperBody />
      <BodyOffer />
      <BodySuggest />
      <Footer />
    </>
  );
};

export default Body;
