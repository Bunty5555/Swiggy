import RestaurantCard, { WithLabelCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utiles/useOnLineStatus";

//https://reactrouter.com/en/main/start/tutorial

const Body = (props) => {
  // Local State Variable - Super powerful variable

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestWithLabelCard = WithLabelCard(RestaurantCard);
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered",listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5195375&lng=77.2396172&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log("fetchData1",json)

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > 4.5
  );

  const onLineStatus = useOnLineStatus();
  if (onLineStatus === false)
    return (
      <h1>
        Looks Like You Are Offline!!! Please Check Your InterNet Connection
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-5">
        <div className="flex">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onClick={() => {
              console.log("Clicked");
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log("Clicked");
            }}
          />
          <button
            className="mx-3 py-1 px-3 bg-green-200 border border-solid border-black w-55 shadow-lg rounded-lg "
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
                // const filteredRestaurant = listOfRestaurants.filter((res) =>
                // {  const cuisines = res.info.cuisines.map(c => c.toLowerCase())
                //   return cuisines.includes(searchText)
                // }
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-yellow-300 mx-3 rounded-lg px-3"
          onClick={() => {
            filteredRestaurant === listOfRestaurants
              ? setFilteredRestaurant(filteredList)
              : setFilteredRestaurant(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestWithLabelCard restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
