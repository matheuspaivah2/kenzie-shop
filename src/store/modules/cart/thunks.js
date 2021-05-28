import axios from "axios";
import { addToCart } from "./actions";

const addToCartThunk = (product, setError) => (dispatch) => {
  dispatch(addToCart(product));
};

export default addToCartThunk;
