import React from "react";
import { useNavigate } from "react-router-dom";
import { dish_data } from "../../config";

const BodySuggest = () => {
  const navigate = useNavigate();
  const slicedArr = dish_data.slice(0, 6);

  return (
    <>
      <div className="suggest-main">
        <div className="suggest-flex">
          <div className="suggest-text">
            <span className="sp1">Inspiration</span> for your first order
          </div>
          <span className="btn" onClick={() => navigate("/dishes")}>
            View all
          </span>
        </div>
        <div className="flex-items">
          {slicedArr.map((elem) => (
            <a
              key={elem.id}
              className="suggest-a"
              onClick={() => navigate(`/menu/${elem.id}`)}
            >
              <img src={elem.image} alt="biriyani" />
              <p> {elem.name}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default BodySuggest;
