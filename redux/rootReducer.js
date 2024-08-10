import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurant/restaurantReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  restaurant: restaurantReducer,
  cart: cartReducer,
  // order: orderReducer,
});

export default rootReducer;
