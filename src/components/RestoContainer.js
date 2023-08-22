import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestoContainer = () => {
  // This is called when State changed => Re render the component with changes!
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.910779585068106&lng=75.73754265904425&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(restaurants);
    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // This is called when Component finished rendering
  useEffect(() => {
    fetchData();
  }, []);

  return allRestaurants.length === 0 ? (
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
          const filtered = allRestaurants.filter((restuarant) => {
            return restuarant.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          setFilteredRestaurants(filtered);
        }}
      >
        Search
      </button>
      <div className="resto-container">
        {console.log(filteredRestaurants)}
        {filteredRestaurants.map((restuarant) => (
          <Link
            to={"/restaurants/" + restuarant.info.id}
            key={restuarant.info.id}
          >
            <RestoCard key={restuarant.info.id} data={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestoContainer;
