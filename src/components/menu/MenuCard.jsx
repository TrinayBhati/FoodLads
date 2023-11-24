import { useNavigate } from "react-router-dom";

const MenuCard = ({ elem }) => {
  const navigate = useNavigate();
  return (
    <div
      className="temporary__storage"
      onClick={() => {
        navigate(
          `/restaurant/${elem?.info?.name
            ?.split(" ")
            .join("-")
            .toLowerCase()
            .trim()}`
        );
      }}
    >
      <div className="card">
        <img className="image" src={elem?.info?.image.url} />
        <div className="image__overlay"></div>
        <div className="content">
          <div className="content__text">
            <span className="stream__title">{elem?.info?.name}</span>
            <div className="content__body">
              <span className="streamer__name">
                <span>{elem?.info?.rating?.aggregate_rating}⭐</span>
                <span>{elem?.info?.costText?.text}</span>
              </span>
              <span className="event">{elem?.info?.locality?.name}</span>
              {/* <span>{elem?.cft?.text}</span> */}
            </div>

            <span className="categories">
              {/* {elem?.cuisine?.map((elem, index) => (
                <a key={index} className="categories__btn" href="#">
                  {elem}
                </a>
              ))} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuCard;

// <div className="card">
//   <img src={IMG_URL + elem?.info?.cloudinaryImageId} />
//   <h2>{elem?.info?.name}</h2>
//   <h3>{elem?.info?.cuisines.join(", ")}</h3>
//   <h4>{elem?.info?.avgRating}</h4>
// </div>
