import { useDispatch, useSelector } from "react-redux";
import { Container, ContainerProducts, ContainerResume } from "./styles";
import { finishOrderThunk } from "../../store/modules/cart/thunks";
import Product from "../Product";
const Order = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleFinish = () => {
    dispatch(finishOrderThunk());
  };
  return (
    <Container>
      {cart[0] ? (
        <>
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
                R${" "}
                {cart.reduce((acc, curr) => {
                  return acc + curr.price;
                }, 0)}
              </span>
            </div>
            <button onClick={handleFinish}>Finalizar Compra</button>
          </ContainerResume>
        </>
      ) : (
        <span className="empty">Carrinho vazio</span>
      )}
    </Container>
  );
};

export default Order;
