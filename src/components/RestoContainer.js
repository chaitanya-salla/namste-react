import RestoCard from "./RestoCard";
import { restaurantData } from "../utils/mockData";
import { useState } from "react";

const RestoContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    restaurantData.restaurants
  );
  return (
    <div className="resto-container">
      <div>
        <button
          onClick={() => {
            const filterred = restaurantData.restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filterred);
          }}
        >
          Top Rated Restaurents
        </button>
        <button
          onClick={() => {
            const filterred = restaurantData.restaurants.filter(
              (restaurant) => restaurant.info.avgRating < 4
            );
            setListOfRestaurants(filterred);
          }}
        >
          Top Low Restaurents
        </button>
      </div>
      {listOfRestaurants.map((restuarant) => (
        <RestoCard data={restuarant} />
      ))}
    </div>
  );
};

export default RestoContainer;
