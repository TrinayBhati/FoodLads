import React from "react";
import dominos from "../../../assets/dominos.png";
import macd from "../../../assets/macd.png";
import bowl from "../../../assets/bowl.png";
import kfc from "../../../assets/kfc.png";
import biscoff from "../../../assets/biscoff.png";
import rolls from "../../../assets/rolls.png";

const BodyOffer = () => {
  return (
    <>
      <div className="offer-text">
        <span>Best offers for</span> <span className="sp1">you</span>
      </div>
      <div className="offer-main">
        <div class="offer-card">
          <img src={dominos} />
        </div>
        <div class="offer-card">
          <img src={kfc} />
        </div>
        <div class="offer-card">
          <img src={bowl} />
        </div>
      </div>
      <div className="offer-main">
        <div class="offer-card">
          <img src={macd} />
        </div>
        <div class="offer-card">
          <img src={biscoff} />
        </div>
        <div class="offer-card">
          <img src={rolls} />
        </div>
      </div>
    </>
  );
};

export default BodyOffer;
