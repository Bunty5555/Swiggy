import React, { useContext } from "react";
import { image_url } from "../utiles/logo";
import UserContext from "../utiles/UserContext";

const RestaurantCard = (props) => {
  const { loggedUer } = useContext(UserContext);
  const { restaurant } = props;
  // console.log("restaurant", restaurant);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurant?.info;
  return (
    <div>
      <div className="p-4 m-4 w-[200px] bg-gray-200 rounded-md h-8/12">
        <img
          className="h-22 w-22 rounded-md h-4/12"
          src={image_url + cloudinaryImageId}
          alt="res-logo"
        />
        <h3 className="font-bold py-3 text-2xl">{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} star</h3>
        <h3>{sla.slaString} away</h3>
        <h3>{costForTwo}</h3>
        <h3>{loggedUer}</h3>
      </div>
    </div>
  );
};

export const WithLabelCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white rounded-lg p-2">
          {" "}
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
