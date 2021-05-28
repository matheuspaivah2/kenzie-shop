import { useSelector } from "react-redux";
import { Container, ContainerProducts, ContainerResume } from "./styles";
import Product from "../Product";
const Order = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      <ContainerProducts>
        <ul>
          {cart &&
            cart.map((item, index) => (
              <Product key={index} item={item} btActive={false}></Product>
            ))}
        </ul>
      </ContainerProducts>
      <ContainerResume>
        <h3>Resumo do Pedido</h3>
        <div>
          <span>{cart.length} Produtos</span>
          <span>
            R$ {cart.reduce((acc, curr) => {
              return acc + curr.price;
            }, 0)}
          </span>
        </div>
        <button>Finalizar Compra</button>
      </ContainerResume>
    </Container>
  );
};

export default Order;
