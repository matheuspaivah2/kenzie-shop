import { ADD_TO_CART, REMOVE_FROM_CART, FINISH_ORDER } from "./actionsTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeFromCart = (list) => ({
  type: REMOVE_FROM_CART,
  list,
});

export const finishiOrder = (list) => ({
  type: FINISH_ORDER,
  list,
});
