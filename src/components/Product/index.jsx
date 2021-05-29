import { useDispatch } from "react-redux";
import { Container } from "./styles";
import addToCartThunk from "../../store/modules/cart/thunks";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";

const Product = ({ item, btActive }) => {
  const { name, price, image, id } = item;
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addToCartThunk(item));
  };
  const handleRemoveProduct = () => {
    dispatch(removeFromCartThunk(id));
  };
  return (
    <Container btActive={btActive}>
      <figure>
        <img src={image} alt="product" />
      </figure>
      <p>{name}</p>
      <span>{price}</span>

      <div
        className="btn"
        onClick={btActive ? handleAddProduct : handleRemoveProduct}
      >
        {btActive ? "Adicionar ao carrinho" : "Remover"}
      </div>
    </Container>
  );
};
export default Product;
