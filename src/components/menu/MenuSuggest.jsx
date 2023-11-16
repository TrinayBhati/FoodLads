import React from "react";
import burger from "../../../assets/burger.png";
import biriyani from "../../../assets/biriyani.png";
import chicken from "../../../assets/chicken.png";
import paneer from "../../../assets/paneer.png";
import rolls from "../../../assets/rolls1.png";
import { useNavigate } from "react-router-dom";

const MenuSuggest = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="slider-main">
        <div className="slider-text">
          Try something <span className="sp1">new!</span>
        </div>
        <div class="palette">
          <div class="color" onClick={() => navigate("/menu/30308")}>
            <span>Biriyani</span>
            <img src={biriyani} />
          </div>
          <div class="color" onClick={() => navigate("/menu/9055")}>
            <span>Burgers</span>
            <img src={burger} />
          </div>
          <div class="color" onClick={() => navigate("/menu/55280")}>
            <span>Chicken</span>
            <img src={chicken} />
          </div>
          <div class="color" onClick={() => navigate("/menu/11035")}>
            <span>Paneer</span>
            <img src={paneer} />
          </div>
          <div class="color" onClick={() => navigate("/menu/56691")}>
            <span>Rolls</span>
            <img src={rolls} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSuggest;
