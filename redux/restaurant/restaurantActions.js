const SET_RESTAURANTS = "SET_RESTAURANTS";
const SELECT_RESTAURANT = "SELECT_RESTAURANT";

//Action handler
export const setRestaurant = (restaurants) => {
  return {
    type: SET_RESTAURANTS,
    payload: restaurants,
  };
};

export const selectRestaurant = (restaurant) => {
  return {
    type: SELECT_RESTAURANT,
    payload: restaurant,
  };
};
