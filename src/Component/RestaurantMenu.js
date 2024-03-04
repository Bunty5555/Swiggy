import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utiles/useRestaurantMenu";
import RestMenuCetogary from "./RestMenuCetogary";
import { useState } from "react";

// RestaurantMenu is parent component to - resMenuCetogarty and listMenu
const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState(null);
  // const dummy = "Dummuy data";
  console.log("showItem", showItem);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, sla, locality } =
    resInfo?.cards[0]?.card?.card?.info;
  console.log("resInfo", resInfo);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl py-3 font-bold">{name}</h1>
      <h3 className="text-lg py-1 font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <p>deliveryTime - {sla.deliveryTime} min </p>
      <p>locality - {locality} </p>

      <ul>
        <li>
          <ul>
            {categories.map((catogary, index) => (
              <RestMenuCetogary
                key={catogary?.card?.card?.itemCards?.card?.info?.id}
                data={catogary?.card?.card}
                showItem={index === showItem ? true : false}
                setShowItem={() => setShowItem(index)}

                // dummy={dummy}
              />
            ))}
            {/* {itemCards.map((item) => (
              <li key={item.card.info.id}>
                {" "}
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
                ₹
              </li>
            ))} */}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
