import { ADD_TO_CART } from "./actionsTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});
