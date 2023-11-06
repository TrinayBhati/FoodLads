import { useState } from "react";
import { ResturantData } from "../config";
import BodyCard from "./BodyCard";

const Body = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(ResturantData);

  const filterData = (unfilteredData, searched) => {
    const filteredData = unfilteredData.filter((elem) =>
      elem.name.toLowerCase().includes(searched)
    );
    return filteredData;
  };

  const handleSearchClick = () => {
    const result = filterData(ResturantData, query);
    setData(result);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => handleSearchClick()}>
          Search
        </button>
      </div>
      <div className="main-body">
        {data.map((elem) => (
          <BodyCard elem={elem} key={elem.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
