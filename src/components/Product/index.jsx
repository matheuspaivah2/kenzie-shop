import { Container } from "./styles";

const Product = ({ item }) => {
  const { name } = item;
  return (
    <Container>
      <img src="" alt="" />
      <p>{name}</p>
      <span>price</span>
      <button>Adicionar ao carrinho</button>
    </Container>
  );
};
export default Product;
