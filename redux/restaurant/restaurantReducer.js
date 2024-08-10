const initialState = {
  restaurants: [],
  currentRestaurant: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      return {
        restaurants: action.payload,
      };
    case "SELECT_RESTAURANT":
      return {
        currentRestaurant: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
