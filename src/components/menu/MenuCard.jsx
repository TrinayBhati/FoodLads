import { IMG_URL } from "../../config";

const MenuCard = ({ elem }) => {
  return (
    <div className="temporary__storage">
      <div className="card">
        <img className="image" src={elem?.image.url} />
        <div className="image__overlay"></div>
        <div className="content">
          <div className="content__text">
            <span className="stream__title">{elem?.name}</span>
            <div className="content__body">
              <span className="streamer__name">
                <span>{elem?.rating?.aggregate_rating}⭐</span>
                <span>{elem?.costText?.text}</span>
              </span>
              <span className="event">{elem?.locality?.name}</span>
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
