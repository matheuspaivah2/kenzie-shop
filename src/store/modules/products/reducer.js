import { ADD_PRODUCT } from "./actionsTypes";

const products = [
  { name: "Echo Dot", price: 279.0, image: "link-da-imagem" },
  { name: "Kindle Paperwhite", price: 499.0, image: "link-da-imagem" },
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const product = action.product;
      return [...state, product];
    default:
      return state;
  }
};

export default productsReducer;
