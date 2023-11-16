import UpperBody from "./UpperBody";
import BodyOffer from "./BodyOffer";
import HeaderHome from "../header/HeaderHome";
import Footer from "../Footer";
import BodySuggest from "./BodySuggest";
import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderHome />
      <UpperBody />
      <BodyOffer />
      <BodySuggest />
      <Footer />
    </>
  );
};

export default Body;
