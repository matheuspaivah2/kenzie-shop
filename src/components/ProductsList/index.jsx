import { Container } from "./styles";
import Product from "../Product";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const { products } = useSelector((state) => state);
  console.log(products);
  return (
    <section className="Products">
      <Container>
        <ul>
          {products.map((item, index) => (
            <Product key={index} item={item}></Product>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProductsList;
