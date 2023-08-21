import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestoContainer = () => {
  // This is called when State changed => Re render the component with changes!
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.910779585068106&lng=75.73754265904425&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = await json.data.cards[5].card.card.gridElements
      .infoWithStyle.restaurants;
    setListOfRestaurants(restaurants);
    console.log(restaurants);
  };

  // This is called when Component finished rendering
  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="banner">
      <input
        type="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const filtered = listOfRestaurants.filter((restuarant) => {
            return restuarant.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          console.log(filtered);
          setListOfRestaurants(filtered);
        }}
      >
        Search
      </button>
      <div className="resto-container">
        {listOfRestaurants.map((restuarant) => (
          <RestoCard data={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default RestoContainer;
