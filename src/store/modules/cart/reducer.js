import { ADD_TO_CART } from "./actionsTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.product;
      return [...state, product];
    default:
      return state;
  }
};

export default cartReducer;
