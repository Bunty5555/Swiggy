import { configureStore as store } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = store({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
