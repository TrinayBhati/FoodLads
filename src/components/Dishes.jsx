import React, { useEffect } from "react";
import { dish_data } from "../config";
import { useNavigate } from "react-router-dom";
import MenuSuggest from "./menu/MenuSuggest";

const generateDishItems = (slice) => {
  const navigate = useNavigate();
  return slice.map((elem) => (
    <a
      key={elem.id}
      className="suggest-a"
      onClick={() => navigate(`/menu/${elem.id}`)}
    >
      <img src={elem.image} alt="biriyani" />
      <p> {elem.name}</p>
    </a>
  ));
};

const Dishes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slicedArr = dish_data.slice(0, 6);
  const slicedArr2 = dish_data.slice(6, 12);
  const slicedArr3 = dish_data.slice(12, 17);

  return (
    <div className="dish-main">
      <div className="dish-suggest-text">
        <span className="sp1">What's on your</span> mind?
      </div>
      <div className="suggest-flex-items">{generateDishItems(slicedArr)}</div>
      <div className="suggest-flex-items">{generateDishItems(slicedArr2)}</div>
      <div className="suggest-flex-items">{generateDishItems(slicedArr3)}</div>
      <MenuSuggest />
    </div>
  );
};

export default Dishes;

// import React from "react";
// import { dish_data } from "../config";

// const Dishes = () => {
//   const slicedArr = dish_data.slice(0, 6);
//   const slicedArr2 = dish_data.slice(6, 12);
//   const slicedArr3 = dish_data.slice(11, 17);

//   return (
//     <>
//       <div className="suggest-flex-items">
//         {slicedArr3.map((elem) => (
//           <a
//             key={elem.id}
//             className="suggest-a"
//             onClick={() => navigate(`/menu/${elem.id}`)}
//           >
//             <img src={elem.image} alt="biriyani" />
//             <p> {elem.name}</p>
//           </a>
//         ))}
//       </div>
//       <div className="suggest-flex-items">
//         {slicedArr.map((elem) => (
//           <a
//             key={elem.id}
//             className="suggest-a"
//             onClick={() => navigate(`/menu/${elem.id}`)}
//           >
//             <img src={elem.image} alt="biriyani" />
//             <p> {elem.name}</p>
//           </a>
//         ))}
//       </div>{" "}
//       <div className="suggest-flex-items">
//         {slicedArr2.map((elem) => (
//           <a
//             key={elem.id}
//             className="suggest-a"
//             onClick={() => navigate(`/menu/${elem.id}`)}
//           >
//             <img src={elem.image} alt="biriyani" />
//             <p> {elem.name}</p>
//           </a>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Dishes;
