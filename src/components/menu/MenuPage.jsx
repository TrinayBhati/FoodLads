import React from "react";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Skeleton from "../Skeleton";
import { useNavigate, useParams } from "react-router-dom";
import MenuSuggest from "./MenuSuggest";

const MenuPage = () => {
  const [cardData, setCardData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.zomato.com/webroutes/getPage?page_url=/ncr/restaurants?place_name=Ywca%2C+1%2C+Ashoka+Rd%2C+Hanuman+Road+Area%2C+Connaught+Place%2C+New+Delhi%2C+Delhi&dishv2_id=${id}&location=&isMobile=0`
    );
    const json = await data.json();
    // console.log(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    setCardData(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
  };

  return (
    <>
      <div className="menupage-main">
        {!cardData ? (
          <Skeleton />
        ) : (
          <div>
            <div className="main-body">
              {
                // console.log(cardData.map((elem) => elem?.info))
                cardData?.map((elem) => (
                  <MenuCard elem={elem} key={elem?.info?.resId} />
                ))
              }
            </div>
          </div>
        )}
      </div>
      <MenuSuggest />
    </>
  );
};

export default MenuPage;
