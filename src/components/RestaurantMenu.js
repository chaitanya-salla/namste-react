import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fectData();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const fectData = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data.cards);
  };

  if (resInfo === null) return <Shimmer />;

  const items =
    resInfo[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

  return (
    <div className="menu">
      <h1>{resInfo[0].card.card.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => {
          return (
            <div key={item.card.info.id}>
              {item.card.info.name} -{" Rs. "}
              {(item.card.info?.price || item.card.info?.defaultPrice) / 100}
              {" /-"}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
