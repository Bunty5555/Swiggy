/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { MENU_URL } from "./logo";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("resInfo1", resInfo);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log("fetchMenu", json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
