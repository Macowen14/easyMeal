const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Item already in cart, increment quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + action.payload.price,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        // Item not in cart, add new item with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
          totalQuantity: state.totalQuantity + 1,
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemToRemoveIndex === -1) return state; // Item not found in cart

      const itemToRemove = state.items[itemToRemoveIndex];

      if (itemToRemove.quantity > 1) {
        // Decrease the quantity of the item
        const updatedItems = state.items.map((item, index) =>
          index === itemToRemoveIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice - itemToRemove.price,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        // Remove the item from the cart (quantity is 1)
        const updatedItemsAfterRemoval = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          items: updatedItemsAfterRemoval,
          totalPrice: state.totalPrice - itemToRemove.price,
          totalQuantity: state.totalQuantity - 1,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
